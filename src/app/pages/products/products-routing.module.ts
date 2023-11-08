import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "../products/products-list/products-list.component";
import {ProductsModifyComponent} from "../products/products-modify/products-modify.component";
import {ProductsDetailComponent} from "../products/products-detail/products-detail.component";

const routes: Routes = [
  {
    path: 'list',
    component: ProductsListComponent
  },
  {
    path: 'create',
    component: ProductsModifyComponent
  },
  {
    path: 'edit/:id',
    component: ProductsModifyComponent
  },
  {
    path: ":id",
    component: ProductsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
