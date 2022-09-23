//ARRAY

let arr: number[] = [0, 1, 2, 3]
// arr.push(4)
let arrLetters: string[] = ['a', 'b']
//arrLetters.push('asd')
let arrBool: boolean[] = [true, false, false]
// arrBool.push(true)

function sum(a: number, b: number): number{
    return a + b
}
console.log(sum(2, 6))

const soma = (a: number, b: number): number => {
    return a+b
}
console.log(soma(1, 2))

const obj: {nome: string, surname: string} = {nome: "Matheus", surname: "Silva"}
const objInference = {nome: "Matheus", surname: "Silva"}

function setCoord(coord: {x: number, y: number, z?: number}): void{
    console.log(`X = ${coord.x}`)
    console.log(`Y = ${coord.y}`)
    if (coord.z){
        console.log(`Z = ${coord.z}`)
    }
}
setCoord({x: 52, y: 75, z: 27})

let union: number|string|number[] = 2
union = [2, 1, 3]
union = 'String'

interface XYZ {
    x: number,
    y: number,
    z?: number
}

const coord:XYZ = {
    x: 1,
    y: 2
}

function showCoord(coord: XYZ){
    console.log(`X = ${coord.x}`)
    console.log(`Y = ${coord.y}`)
    if (coord.z){
        console.log(`Z = ${coord.z}`)
    }
}
const separator = (num: number) => { console.log('-'.repeat(num)) }
separator(20)

showCoord(coord)

const h1Main = document.querySelector('#teste') as HTMLElement
console.log(h1Main!.textContent)

let value: bigint = 1000n
console.log(value)