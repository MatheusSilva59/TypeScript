var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.species = 'Human';
        this.name = name;
        this.age = age;
    }
    return User;
}());
var newUser = new User('Matheus', 22);
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels, color, dimensions) {
        this.wheels = wheels;
        this.color = color;
        this.dimensions = dimensions;
    }
    return Vehicle;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(maxLoad, price, model, wheels, color, dimensions) {
        var _this = _super.call(this, wheels, color, dimensions) || this;
        _this.maxLoad = maxLoad;
        _this.price = price;
        _this.model = model;
        return _this;
    }
    return Truck;
}(Vehicle));
var truck = new Truck(16000, 120000, 'SH300', 10, 'white', { width: 2, length: 10, height: 2.5 });
console.log(truck);
