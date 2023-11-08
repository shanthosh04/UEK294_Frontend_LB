import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryDetailComponent} from "./category-detail/category-detail.component";
import {CategoryModifyComponent} from "./category-modify/category-modify.component";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryModifyComponent
  },
  {
    path: 'edit/:id',
    component: CategoryModifyComponent
  },
  {
    path: ":id",
    component: CategoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
