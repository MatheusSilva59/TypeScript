//ARRAY
var arr = [0, 1, 2, 3];
// arr.push(4)
var arrLetters = ['a', 'b'];
//arrLetters.push('asd')
var arrBool = [true, false, false];
// arrBool.push(true)
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 6));
var soma = function (a, b) {
    return a + b;
};
console.log(soma(1, 2));
var obj = { nome: "Matheus", surname: "Silva" };
var objInference = { nome: "Matheus", surname: "Silva" };
function setCoord(coord) {
    console.log("X = ".concat(coord.x));
    console.log("Y = ".concat(coord.y));
    if (coord.z) {
        console.log("Z = ".concat(coord.z));
    }
}
setCoord({ x: 52, y: 75, z: 27 });
var union = 2;
union = [2, 1, 3];
union = 'String';
var coord = {
    x: 1,
    y: 2
};
function showCoord(coord) {
    console.log("X = ".concat(coord.x));
    console.log("Y = ".concat(coord.y));
    if (coord.z) {
        console.log("Z = ".concat(coord.z));
    }
}
var separator = function (num) { console.log('-'.repeat(num)); };
separator(20);
showCoord(coord);
var h1Main = document.querySelector('#teste');
console.log(h1Main.textContent);
var value = 1000n;
console.log(value);
