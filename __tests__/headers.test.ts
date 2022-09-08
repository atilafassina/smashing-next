import 'isomorphic-fetch'
import { describe, expect, test } from 'vitest'
import { csp } from '../lib/csp'
import { securityHeaders } from '../lib/security-headers'

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.PREVIEW_URL

describe('Check if Security Headers are defined', async () => {
  test.concurrent(
    `test if Content-Security-Policy is set on root`,
    async () => {
      const ping = await fetch(url)
      const cspHeader = ping.headers.get('Content-Security-Policy')

      expect(cspHeader).toMatch(csp)
    }
  )

  Object.entries(securityHeaders).forEach(([headerName, headerConfigValue]) => {
    test.concurrent(`test if ${headerName} is set on root`, async () => {
      const ping = await fetch(url)
      const responseHeaderValue = ping.headers.get(headerName)
      expect(responseHeaderValue).toMatch(headerConfigValue)
    })
  })
})
