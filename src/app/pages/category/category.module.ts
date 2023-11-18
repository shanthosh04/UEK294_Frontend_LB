import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CategoryModule { }
