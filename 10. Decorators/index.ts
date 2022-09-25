function consoleDiv() {
    console.log(' '.repeat(20))
    console.log('_'.repeat(20))
    console.log(' '.repeat(20))
}

function myDecorator() {
    console.log('Iniciando decorator')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando decorator')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
        // console.log(`target: ${target}, propertyKey: ${propertyKey}, descriptor: ${descriptor}`)
    }
}

class MyClass {
    @myDecorator()
    public testing() {
        console.log('Terminando execução do método')
    }
}

const myClass = new MyClass()

myClass.testing()

consoleDiv()

interface Decorators {
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
}

function a() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando decorator A')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}
function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando decorator B')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log('Terminando execução')
    }
}

const multipleDecorators = new MultipleDecorators()

multipleDecorators.testing()

consoleDiv()


function classDecorator(constructor: Function) {
    console.log(constructor)
}

@classDecorator
class User {
    name
    constructor(name: string) {
        this.name = name
    }
}

const newUser = new User('Matheus')


consoleDiv()

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Truck {
    name
    constructor(name: string) {
        this.name = name
    }
    @enumerable(true)
    showName() {
        console.log(this)
        return `O nome da caminhão é ${this.name}`
    }
}

const truck = new Truck('FH540')

console.log(truck.showName())

consoleDiv()


class Human {
    name
    age
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    @enumerable(true)
    get showName() {
        return this.name
    }
    @enumerable(true)
    get showAge() {
        return this.age
    }
}

const human = new Human('Matheus', 22)
console.log(human)

consoleDiv()

function formatNumber() {
    return function (target: Object, propertyKey: string) {
        let value: string
        const getter = function () {
            return value
        }
        const setter = function (newValue: string) {
            value = newValue.padStart(5, '0')
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

class ID {
    @formatNumber()
    id
    constructor(id: string) {
        this.id = id
    }
}

const newID = new ID('1')

console.log(newID)

consoleDiv() //Decorator Class

function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date
    constructor(id: number) {
        this.id = id
    }
}
class Pen {
    id
    createdAt?: Date
    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(1)
const newPen = new Pen(10)

console.log(newBook)

consoleDiv() //Decorator Method

function checkIfUserPosted(){
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor){
        const child = descriptor.value
        descriptor.value = function(...args: any[]){
            if(args[1] === true){
                console.log('Usúario já postou')
                return null
            }
            else{
                return child.apply(this, args)
            }
        }
        return descriptor
    }
}

class Post{
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted?: boolean){
        this.alreadyPosted = true
        console.log('Postagem realizada com sucesso')
        console.log(content)
    }
}

const newPost = new Post()

newPost.post('Postagem 1', newPost.alreadyPosted)
newPost.post('Postagem 2', newPost.alreadyPosted)

consoleDiv() //Decorator property

function max(limit: number){
    return function (target: Object, propertyKey: string) {
        let value: string
        const getter = function () {
            return value
        }
        const setter = function (newValue: string) {
            value = newValue.slice(0, limit)
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

class Admin{
    @max(10)
    username
    constructor(username: string){
        this.username = username
    }
}

const newAdmin = new Admin('Caio Berrante Patinho Betoneira')

console.log(newAdmin)