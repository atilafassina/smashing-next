import { NextResponse } from 'next/server'
import { csp } from './lib/csp'

export function middleware() {
  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: '/:path*',
}
