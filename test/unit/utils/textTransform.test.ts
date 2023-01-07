import { assert } from 'chai'
import { alternateCase } from '@/utils/textTransform.js'

describe('textTransform', () => {
    it("Alternate case actually alternates case", () => {
        assert.equal(alternateCase("aba"), "AbA")
    })
})