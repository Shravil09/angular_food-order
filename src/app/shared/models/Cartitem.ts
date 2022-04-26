import { Foods } from "./Food";

export class CartItem{
    
    food:Foods;
    quantity:number = 1;

    // Injecting food services
    constructor(food:Foods){
        this.food = food;
        this.price;
    }
    
    get price():number{
        return this.food.price * this.quantity;
    }
}