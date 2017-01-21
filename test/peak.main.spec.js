import { expect } from 'chai'
import { describe, beforeEach, it } from "mocha";

describe('first controller', () => {
   describe('when initialized', () => {
      beforeEach(() => { })

      it('should have a hello message variable', () => {
         expect('hello world').to.equal('hello world')
      })
   })
})