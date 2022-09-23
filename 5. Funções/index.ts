function firstElement<T>(arr: T[]): T{
    return arr[0]
}
function biggestNumber<T extends number | string>(a: T, b: T): T{
    const biggestNumber: T = a > b ? a : b
    return biggestNumber
}
// console.log(biggestNumber('-22', '-3'))

function mergeArrays<T>(arrFirst: T[], arrSecond: T[]){
    return arrFirst.concat(arrSecond)
}
// console.log(mergeArrays<number | string>([1, 2, 3], [ 'a', 'b']))
// console.log(mergeArrays([1, 2, 3], [4, 5]))

function showError(err: string): never{
    throw new Error(err)
}

// showError('ERROR 404')

function sumAll(...numbers: number[]): number{
    return numbers.reduce((numbers, sum) => sum + numbers)
}

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9))
