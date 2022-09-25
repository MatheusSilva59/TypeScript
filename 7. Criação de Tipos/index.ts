function showProduct<T extends {name: string}>(obj: T): string{
    return `O nome do produto é ${obj.name}`
}

// console.log(showProduct({a: '123'}))
// console.log(showProduct({name: '123'}))

interface Car<T, U>{
    name: string,
    engine: T,
    wheels: U
}

type car = Car<number, number>

const myCar: car = {
    name: 'HB20',
    engine: 1.0,
    wheels: 4
}

function getSomeKey<T, K extends string & keyof T>(obj: T, key: K){
    return `A chave '${key}' possui o valor ${obj[key]}`
}

const obj = {name: 'Matheus'}
// console.log(getSomeKey(obj, 'name'))

type date = {day: number, month: number, year: number, show: Function}
type year = keyof date

function normalizeDate(number){
    return number.toString().padStart(2, 0)
}
const today: date = {
    day: 24,
    month: 9,
    year: 2022,
    show: function () {return `${normalizeDate(this.day)}/${normalizeDate(this.month)}/${this.year}`}
}

function getDate(obj: date, year: year): string{
    console.log(obj.show())
    return `A chave '${year}' está contida na data e possui o valor de ${obj[year]}`
}

console.log(getDate(today, 'year'))