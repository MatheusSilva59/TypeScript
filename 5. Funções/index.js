function firstElement(arr) {
    return arr[0];
}
function biggestNumber(a, b) {
    var biggestNumber = a > b ? a : b;
    return biggestNumber;
}
// console.log(biggestNumber('-22', '-3'))
function mergeArrays(arrFirst, arrSecond) {
    return arrFirst.concat(arrSecond);
}
// console.log(mergeArrays<number | string>([1, 2, 3], [ 'a', 'b']))
// console.log(mergeArrays([1, 2, 3], [4, 5]))
function showError(err) {
    throw new Error(err);
}
// showError('ERROR 404')
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (numbers, sum) { return sum + numbers; });
}
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9))
function optionalParameters(a, b) {
    if (a === void 0) { a = 15; }
    return a + b;
}
