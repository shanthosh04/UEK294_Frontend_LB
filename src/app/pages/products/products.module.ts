import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsModifyComponent } from './products-modify/products-modify.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductsListComponent,
    ProductsModifyComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
