import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { getXataClient } from '~/lib/xata.codegen.server'

export const authOption = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },

    async session({ session, token }) {
      const access = `token ${token.accessToken}`
      const profileResponse = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: access,
        },
      })

      const xata = getXataClient()
      const { login, email, avatar_url } = await profileResponse.json()
      const userExists = Boolean(
        await xata.db.users.filter({ email }).getFirst()
      )

      if (!userExists) {
        await xata.db.users.create({
          slug: login.toLowerCase(),
          email: email,
          photo: avatar_url,
        })
      }

      return session
    },
  },
}

export default NextAuth(authOption)
