import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import { add } from './add.js'

describe('add', () => {
    it('returns the sum of two numbers', () => {
        assert.equal(add(2, 3), 5)
    })

    it('adds negative numbers', () => {
        assert.equal(add(-2, -3), -5)
    })
})
