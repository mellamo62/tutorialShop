import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";
import {ProviderDetailsComponent} from "./provider-details/provider-details.component";

const routeConfig: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'products/:productId', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shipping', component: ShippingComponent,},
    {path: 'provider/:providerId', component: ProviderDetailsComponent}
];

export default routeConfig;
