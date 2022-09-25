function showProduct(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myCar = {
    name: 'HB20',
    engine: 1.0,
    wheels: 4
};
function getSomeKey(obj, key) {
    return "A chave '".concat(key, "' possui o valor ").concat(obj[key]);
}
var obj = { name: 'Matheus' };
function normalizeDate(number) {
    return number.toString().padStart(2, 0);
}
var today = {
    day: 24,
    month: 9,
    year: 2022,
    show: function () { return "".concat(normalizeDate(this.day), "/").concat(normalizeDate(this.month), "/").concat(this.year); }
};
function getDate(obj, year) {
    console.log(obj.show());
    return "A chave '".concat(year, "' est\u00E1 contida na data e possui o valor de ").concat(obj[year]);
}
console.log(getDate(today, 'year'));
