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
    function User(name) {
        this.name = name;
    }
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(name) {
        return _super.call(this, name) || this;
    }
    return AdminUser;
}(User));
var user = new User('Ratoeira');
var userAdmin = new AdminUser('Ratoeira Admin');
function showMenu(user) {
    if (user instanceof AdminUser) {
        console.log('Usúario administrador');
    }
    else {
        console.log('Usúario normal');
    }
}
showMenu(userAdmin);
var RatingMessages = {
    1: 'Avaliação de 1 estrela',
    2: 'Avaliação de 2 estrelas',
    3: 'Avaliação de 3 estrelas',
    4: 'Avaliação de 4 estrelas',
    5: 'Avaliação de 5 estrelas'
};
function setRating(rating) {
    if (typeof rating === 'number') {
        return RatingMessages[rating];
    }
    else {
        return 'Sem avaliação';
    }
}
console.log(setRating(2));
// function setRating(rating: number | boolean): string{
//     if (typeof rating === 'number'){
//         return `Avaliação de ${rating} estrela` + (rating > 1 ? 's' : '')
//     }
//     return 'Avalie o produto'
// }
// console.log(setRating(5))
