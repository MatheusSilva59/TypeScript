class User {
    name
    constructor(name: string){
        this.name = name
    }
}
class AdminUser extends User{
    constructor(name: string){
        super(name)
    }
}

const user: object = new User('Ratoeira')
const userAdmin: object = new AdminUser('Ratoeira Admin')

function showMenu(user: object){
    if (user instanceof AdminUser){
        console.log('Usúario administrador')
    }
    else{
        console.log('Usúario normal')
    }
}
showMenu(userAdmin)



const RatingMessages = {
    1: 'Avaliação de 1 estrela',
    2: 'Avaliação de 2 estrelas',
    3: 'Avaliação de 3 estrelas',
    4: 'Avaliação de 4 estrelas',
    5: 'Avaliação de 5 estrelas',
}

function setRating(rating: number | boolean): string{
    if (typeof rating === 'number'){
        return RatingMessages[rating as keyof object]
    }
    else{
        return 'Sem avaliação'
    }
}

console.log(setRating(2))

// function setRating(rating: number | boolean): string{
//     if (typeof rating === 'number'){
//         return `Avaliação de ${rating} estrela` + (rating > 1 ? 's' : '')
//     }
//     return 'Avalie o produto'
// }

// console.log(setRating(5))