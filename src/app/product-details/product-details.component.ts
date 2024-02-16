import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CartService} from "../cart.service";

import { Product, products } from '../products';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent  implements OnInit{
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
