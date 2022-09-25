function showProduct(product) {
    console.log("O produto ".concat(product.name, " possui o pre\u00E7o de R$").concat(product.price));
    if (product.isAvailable) {
        console.log('Está disponível');
    }
}
var mouse = {
    name: 'G6',
    price: 70,
    isAvailable: true
};
var bike = {
    model: 'Z300',
    wheels: 2
};
var coord = {
    x: 10,
    y: 10
};
var plan = {
    dimensions: 3,
    x: 1,
    y: 1,
    z: 1
};
var tuple = [1, 2, 3];
