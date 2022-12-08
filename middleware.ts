import { type NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { securityHeaders } from './lib/security-headers'
import { csp } from './lib/csp'

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  if (req.nextUrl.pathname.startsWith('/internal') && !token) {
    return NextResponse.redirect(process.env.NEXTAUTH_URL)
  }
  const response = NextResponse.next()

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: '/:path*',
}
