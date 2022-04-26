import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/Cartitem';
import { Foods } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Cart = new Cart();

  // Method to add item into cart
  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(item =>item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  // Method to remove item from cart
  removeFromCart(foodId:number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  //Method to edit item quantity
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem)
    return;
    cartItem.quantity = quantity;
  }
  // Get Cart-Item 
  getCart():Cart{
    return this.cart
  }
}
