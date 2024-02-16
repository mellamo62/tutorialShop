import {Component} from '@angular/core';
import {Providers} from '../providers.json';
import {providers} from "../providers";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports:[RouterLink, CurrencyPipe,CommonModule],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {

  provider: providers | undefined;
  constructor(
      private route: ActivatedRoute,
  ) {}
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.provider = Providers.find(pro => pro.id === providerIdFromRoute);
  }
}
