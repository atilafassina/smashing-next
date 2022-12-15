'use client'
import { signIn } from 'next-auth/react'

const LoginIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  )
}

const GithubLogin = () => (
  <section className="grid gap-2 text-lg">
    <div className="grid gap-2 mt-32 text-center">
      <button
        className="block px-8 py-4 text-3xl transition-colors border-4 border-purple-400 rounded-md hover:bg-purple-500 focus:bg-purple-500"
        type="submit"
        onClick={() => signIn('github', { callbackUrl: '/internal' })}
      >
        Login with Github{' '}
        <LoginIcon className="relative inline-block w-8 bottom-1" />
      </button>
    </div>
  </section>
)

export { GithubLogin }
