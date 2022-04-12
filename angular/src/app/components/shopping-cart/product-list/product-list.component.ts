import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor(
    private productService: ProductService,private cartService: CartService,
  ) { }

  ngOnInit() {
    this.loadProducts();

  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      let cartarray = []
      cartarray = this.cartService.getsession("cart");
      if(cartarray){
        if(cartarray.length > 0){
          for (let i = 0; i < products.length; i++) {
              for (let j = 0; j < cartarray.length; j++) {
                if(products[i].title ===  cartarray[j].title){
                  products[i].added = 1;
                  products[i].qty = cartarray[j].qty;
                }
                
              }
            
          }
        }
      }
      

      this.productList = products;
    })
  }

  handleAddToCart(value:any,index:any) {
      this.productList[index].added = 1 
      this.addtocart(value)
  }

  addtocart(value){
    let cartarray = []
    cartarray = this.cartService.getsession("cart")
   if(cartarray){
    if(cartarray.length > 0){
      let check_in_it = []
      check_in_it = cartarray.filter(check => check.title === value.title);
      if(check_in_it.length === 0){
        value.qty = 1;
        cartarray.push(value)
        this.cartService.setsession("cart",cartarray)
        this.cartService.topShow("updatecart")
      }else{
        alert("Already exist in the cart")
      }
    }
   }
    else{
      let cartarray = [];
      value.qty = 1;
      cartarray.push(value)
      this.cartService.setsession("cart",cartarray)
      this.cartService.topShow("updatecart")
    }
  }

  inc(product,index){
    this.productList[index].qty = this.productList[index].qty + 1;
    let cartarray = []
    cartarray = this.cartService.getsession("cart");
    let value = cartarray.findIndex((res: any) => res.title == product.title);
    cartarray[value].qty =  this.productList[index].qty;
    this.cartService.setsession("cart",cartarray)
    this.cartService.topShow("updatecart")
  }

  dec(product,index){
    if(this.productList[index].qty > 1){
      this.productList[index].qty = this.productList[index].qty - 1;
      let cartarray = []
      cartarray = this.cartService.getsession("cart");
      let value = cartarray.findIndex((res: any) => res.title == product.title);
      cartarray[value].qty =  this.productList[index].qty;
      this.cartService.setsession("cart",cartarray)
      this.cartService.topShow("updatecart")
    }
 
  }

}
