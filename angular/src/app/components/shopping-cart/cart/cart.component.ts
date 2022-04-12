import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(

    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.myOutputValue.subscribe(data => {
      this.cartItems =  this.cartService.getsession('cart')
      this.calcCartTotal()
      });
   this.cartItems =  this.cartService.getsession('cart')
    this.calcCartTotal()
  }





  calcCartTotal() {
    this.cartTotal = 0

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
