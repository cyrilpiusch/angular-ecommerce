import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';

export const routes: Routes = [

{
    path:'',component:HomeComponent
},
{
    path:'product/:id',component:ProductComponent
}

];