import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsModifyComponent } from './products-modify/products-modify.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        // Deklaration der Komponenten, die in diesem Modul verwendet werden
        ProductsDetailComponent,
        ProductsListComponent,
        ProductsModifyComponent
    ],
    imports: [
        CommonModule, // CommonModule für gemeinsame Module
        ProductsRoutingModule, // Import des Routing-Moduls
        ReactiveFormsModule // Import des Reactive Forms-Moduls
    ]
})
export class ProductsModule { }
