import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../cart.service";
import {AsyncPipe, CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports:[CurrencyPipe, AsyncPipe,CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<{type: string, price: number}[]>;
  constructor(private cartService: CartService) {
  }

  ngOnInit(){
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
