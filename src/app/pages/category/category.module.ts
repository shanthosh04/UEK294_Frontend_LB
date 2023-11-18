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
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    // Deklaration der Komponenten, die in diesem Modul verwendet werden
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule, // CommonModule für gemeinsame Funktionalitäten
    CategoryRoutingModule, // Import des Routing-Moduls
    MatSlideToggleModule, // Import des Material Design-Schalters
    ReactiveFormsModule, // Import des Reactive Forms-Moduls
    MatInputModule, // Import des Material Design-Eingabefelds
    MatButtonModule, // Import der Material Design-Schaltfläche
    MatIconModule, // Import des Material Design-Icons
    MatTableModule // Import des Material Design-Tabellenmoduls
  ]
})
export class CategoryModule { }
