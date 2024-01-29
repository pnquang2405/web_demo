import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/Products-list/Products-list.component';
import { ProductDetailsComponent } from './components/Product-details/Product-details.component';
import { AddProductComponent } from './components/add-Product/add-Product.component';

const routes: Routes = [
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
  { path: 'Products', component: ProductsListComponent },
  { path: 'Products/:id', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
