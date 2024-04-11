"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(id$, name$, price$, description$) {
        this.id$ = id$;
        this.name$ = name$;
        this.price$ = price$;
        this.description$ = description$;
    }
    get id() { return this.id$; }
    get name() { return this.name$; }
    get price() { return this.price$; }
    get description() { return this.description$; }
}
class User {
    constructor(id$, name$, age$) {
        this.id$ = id$;
        this.name$ = name$;
        this.age$ = age$;
        this.cart$ = [];
    }
    get id() { return this.id$; }
    get name() { return this.name$; }
    get page() { return this.age$; }
    get cart() { return this.cart$; }
    set cart(items) { this.cart$ = items; }
}
function createUser(name, age) {
    let uuid = (0, uuid_1.v4)();
    return new User(uuid, name, age);
}
function createItem(name, price, description) {
    let uuid = (0, uuid_1.v4)();
    return new Item(uuid, name, price, description);
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    let newCart = [];
    for (let itm of user.cart) {
        if (itm !== item) {
            newCart.push(itm);
        }
    }
    user.cart = newCart;
}
function removeQuantityFromCart(item, user, amount) {
    let newCart = [];
    let count = 0;
    for (let itm of user.cart) {
        if (itm !== item) {
            newCart.push(itm);
        }
        else {
            if (count >= amount) {
                newCart.push(itm);
            }
            else {
                count += 1;
            }
        }
    }
    user.cart = newCart;
}
function cartTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    console.log(user.cart);
}
let Jean = createUser("Jean", 26);
console.log(Jean);
let pants = createItem("pants", 10.00, "clothing");
console.log(pants);
let car = createItem("car", 1000, "vehicle");
console.log(car);
let TV = createItem("TV", 500, "Entertainment");
console.log(TV);
addToCart(pants, Jean);
printCart(Jean);
console.log(cartTotal(Jean));
addToCart(car, Jean);
printCart(Jean);
console.log(cartTotal(Jean));
addToCart(TV, Jean);
printCart(Jean);
console.log(cartTotal(Jean));
removeFromCart(car, Jean);
printCart(Jean);
console.log(cartTotal(Jean));
addToCart(TV, Jean);
printCart(Jean);
removeQuantityFromCart(TV, Jean, 2);
printCart(Jean);
