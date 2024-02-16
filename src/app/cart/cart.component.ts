import { Component } from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(){
    this.items = this.cartService.clearCart();
    console.warn('You order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }

}
