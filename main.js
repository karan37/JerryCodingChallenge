// Problem Set below:
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range
// includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,
// 201)

/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
 class RangeList {

    constructor() {
        this.rangeValues = new Set()
    }

    /**
    * Lists numbers within the range
    * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
    * @returns {Array<number>} - List of numbers in the range
    */
    getNumbersInRange = (range) => {
        const rangeStart = range[0]
        const rangeEnd = range[1]
        const numbers = []
        for (let i = rangeStart; i < rangeEnd; i++) {
            numbers.push(i)
        }
        return numbers
    }

    /**
    * Adds a range to the list
    * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
    */
    add(range) {
        // TODO: implement this
        const rangeNumbers = this.getNumbersInRange(range)
        rangeNumbers.forEach(number => this.rangeValues.add(number))
    }

    /**
    * Removes a range from the list
    * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
    */
    remove(range) {
        // TODO: implement this
        const rangeNumbers = this.getNumbersInRange(range)
        rangeNumbers.forEach(number => this.rangeValues.delete(number))
    }

    /**
    * Removes a range from the list
    * @param {Array<number>} sortedNumberList - Array of unique unsorted numbers.
    * @returns  {Array<Array<number>>} - List of range elements
    */
    getRangesFromNumberList(numberList) {
        if(numberList.length === 0 || !numberList){
                return []
        }
        const sortedNumberList = numberList.sort((a, b) => a - b)
        const ranges = []
        let start = sortedNumberList[0]
        let consecutiveIndex = 0
        for (let i = 0; i < sortedNumberList.length; i++) {
            if (sortedNumberList[i] === start + consecutiveIndex) {
                consecutiveIndex++
            } else {
                const end = start + consecutiveIndex
                ranges.push([start, end])
                consecutiveIndex = 1
                start = sortedNumberList[i]
            }
        }
        ranges.push([start, sortedNumberList[sortedNumberList.length - 1] + 1])
        return ranges
    }

    /**
    * Prints out the list of ranges in the range list
    */
    print() {
        const rangeElements = Array.from(this.rangeValues)
        const rangeList = this.getRangesFromNumberList(rangeElements)
        const printString = rangeList.reduce((acc, range) => {
            return `${acc}[${range[0]},${range[1]}) `
        },"")
        console.log(printString)
    }
}

module.exports = RangeList;

const r0 = new RangeList()
r0.add([1, 5])
r0.add([9, 11])
r0.print()


// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)