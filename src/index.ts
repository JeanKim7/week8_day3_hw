import { v4 as uuidv4 } from "uuid";


class Item {
    constructor(protected id$: string, protected name$:string, protected price$: number, protected description$:string){}

    public get id(){return this.id$}
    public get name(){return this.name$}
    public get price(){return this.price$}
    public get description(){return this.description$}

}

class User {
    protected cart$: Item[] = []

    constructor(protected id$:string, protected name$: string, protected age$: number){}

    public get id(){return this.id$}
    public get name(){return this.name$}
    public get page(){return this.age$}
    public get cart(){return this.cart$}

    public set cart(items:Item[]){this.cart$ = items}

}

function createUser (name:string, age: number){
    let uuid:string = uuidv4()
    return new User(uuid, name, age)
}

function createItem (name:string, price:number, description:string){
    let uuid:string = uuidv4()
    return new Item(uuid, name, price, description)
}

function addToCart (item: Item, user: User){
    user.cart.push(item)
}

function removeFromCart (item: Item, user:User){
    let newCart:Item[] = []
    for (let itm of user.cart) {
        if (itm !== item){
            newCart.push(itm)
        }
    }
    user.cart = newCart
}

function removeQuantityFromCart(item:Item, user:User, amount: number){
    let newCart:Item[] = []
    let count:number = 0
    for (let itm of user.cart) {
        if (itm !== item){
            newCart.push(itm)
        } else {
            if (count >= amount) {
                newCart.push(itm)
            } else {count+=1}
        }
    }
    user.cart = newCart
}

function cartTotal(user:User){
    let total:number = 0
    for (let item of user.cart){
        total += item.price
    }
    return total
}

function printCart(user:User){
    console.log(user.cart)
}

let Jean:User = createUser("Jean", 26)
console.log(Jean)

let pants:Item = createItem("pants", 10.00, "clothing")
console.log(pants)

let car:Item = createItem("car", 1000, "vehicle")
console.log(car)

let TV:Item = createItem("TV", 500, "Entertainment")
console.log(TV)

addToCart(pants, Jean)
printCart(Jean)
console.log(cartTotal(Jean))

addToCart(car, Jean)
printCart(Jean)
console.log(cartTotal(Jean))

addToCart(TV, Jean)
printCart(Jean)
console.log(cartTotal(Jean))

removeFromCart(car, Jean)
printCart(Jean)
console.log(cartTotal(Jean))

addToCart(TV, Jean)
printCart(Jean)
removeQuantityFromCart(TV, Jean, 2)
printCart(Jean)
