import {it,expect} from 'vitest'

import { mount } from '@vue/test-utils'

import { useSummation } from './calcValues'


it("should return the summation of numbers ",()=>{

    // Arrange
    const numbers = [1,2]
    const {summation,Sum} = useSummation()
    Sum(numbers)

    // Act
    const result = summation.value

    // Assert
    const expectedValues = numbers.reduce((preValue,curValue)=>preValue+curValue,0)
    expect(result).toBe(expectedValues)

})


it("should throw error when no numbers are provided",()=>{

    const numbers = 'invalid'
    let result;
    const {summation,Sum} = useSummation()

    const resultFn = function(){

        Sum(numbers)
        result = sum.value
    }

    expect(resultFn).toThrowError()
})

