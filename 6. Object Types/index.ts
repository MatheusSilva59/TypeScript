interface Product{
    name: string,
    price: number,
    isAvailable: boolean,
}

function showProduct(product: Product){
    console.log(`O produto ${product.name} possui o preço de R$${product.price}`)
    if(product.isAvailable){
        console.log('Está disponível')
    }
}

const mouse: Product = {
    name: 'G6',
    price: 70,
    isAvailable: true
}

// showProduct(mouse)

interface Bike{
    model: string,
    readonly wheels: number
}

const bike: Bike = {
    model: 'Z300',
    wheels: 2
}

interface Coord{
    [index: string]: number
}

let coord: Coord = {
    x : 10,
    y : 10
}

// console.log(coord)

interface TypePlan extends Coord{
    dimensions: number
}

let plan: TypePlan = {
    dimensions: 3,
    x: 1,
    y: 1,
    z: 1
}

// console.log(plan)


type tupla = [number, number, number]

const tuple: tupla = [1, 2, 3]

