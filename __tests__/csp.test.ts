import 'isomorphic-fetch'
import { describe, expect, test } from 'vitest'
import { csp } from '../lib/csp'

describe('ping all routes in sitemaps and Redirects', async () => {
  test.concurrent(
    `test if Content-Security-Policy is set on root`,
    async () => {
      const ping = await fetch('http://localhost:3000')
      const cspHeader = ping.headers.get('Content-Security-Policy')

      expect(cspHeader).toMatch(csp)
      expect(ping.status).toEqual(200)
      expect(ping.ok).toBeTruthy()
    }
  )
})
