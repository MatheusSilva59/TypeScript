class User{
    name: string
    age: number
    readonly species = 'Human'
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const newUser = new User('Matheus', 22)

interface Dimensions {
    width: number
    height: number
    length: number
}

class Vehicle{
    wheels: number
    color: string
    dimensions: Dimensions
    
    constructor(wheels: number, color: string, dimensions: Dimensions){
        this.wheels = wheels
        this.color = color
        this.dimensions = dimensions
    }
}

class Truck extends Vehicle{
    maxLoad: number
    price: number
    model: string

    constructor(maxLoad: number, price: number, model: string, wheels: number, color: string, dimensions: Dimensions){
        super(wheels, color, dimensions)
        this.maxLoad = maxLoad
        this.price = price
        this.model = model
    }
}

const truck = new Truck(16000, 120000, 'SH300', 10, 'white', {width: 2, length: 10, height: 2.5})

console.log(truck)