"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consoleDiv() {
    console.log(' '.repeat(20));
    console.log('_'.repeat(20));
    console.log(' '.repeat(20));
}
function myDecorator() {
    console.log('Iniciando decorator');
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        // console.log(`target: ${target}, propertyKey: ${propertyKey}, descriptor: ${descriptor}`)
    };
}
class MyClass {
    testing() {
        console.log('Terminando execução do método');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myClass = new MyClass();
myClass.testing();
consoleDiv();
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator A');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator B');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MultipleDecorators {
    testing() {
        console.log('Terminando execução');
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multipleDecorators = new MultipleDecorators();
multipleDecorators.testing();
consoleDiv();
function classDecorator(constructor) {
    console.log(constructor);
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const newUser = new User('Matheus');
consoleDiv();
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Truck {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da caminhão é ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Truck.prototype, "showName", null);
const truck = new Truck('FH540');
console.log(truck.showName());
consoleDiv();
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(true)
], Human.prototype, "showName", null);
__decorate([
    enumerable(true)
], Human.prototype, "showAge", null);
const human = new Human('Matheus', 22);
console.log(human);
consoleDiv();
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newID = new ID('1');
console.log(newID);
consoleDiv(); //Decorator Class
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
class Pen {
    constructor(id) {
        this.id = id;
    }
}
const newBook = new Book(1);
const newPen = new Pen(10);
console.log(newBook);
consoleDiv(); //Decorator Method
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const child = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usúario já postou');
                return null;
            }
            else {
                return child.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log('Postagem realizada com sucesso');
        console.log(content);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Postagem 1', newPost.alreadyPosted);
newPost.post('Postagem 2', newPost.alreadyPosted);
consoleDiv(); //Decorator property
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.slice(0, limit);
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(10)
], Admin.prototype, "username", void 0);
const newAdmin = new Admin('Caio Berrante Patinho Betoneira');
console.log(newAdmin);
