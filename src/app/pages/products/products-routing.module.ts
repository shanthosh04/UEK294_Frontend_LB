import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "../products/products-list/products-list.component";
import {ProductsModifyComponent} from "../products/products-modify/products-modify.component";
import {ProductsDetailComponent} from "../products/products-detail/products-detail.component";
import {authGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'list',
    component: ProductsListComponent
  },
  {
    path: 'create',
    component: ProductsModifyComponent,
    canActivate: [authGuard],

  },
  {
    path: 'edit/:id',
    component: ProductsModifyComponent,
    canActivate: [authGuard],
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
