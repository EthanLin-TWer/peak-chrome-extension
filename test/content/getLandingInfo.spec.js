import { describe, beforeEach, it } from "mocha"
import { expect } from 'chai'
import getLandingInfo from '../../src/content/getLandingInfo'

describe('getLandingInfo.js', () => {
   beforeEach(() => {
      global.window = {
         location: { href: 'http://target.url.com' }
      }
   })

   it('should get landing time and current url from window.location.href', () => {
      expect(getLandingInfo().currentUrl).to.equal('http://target.url.com')
   })
})