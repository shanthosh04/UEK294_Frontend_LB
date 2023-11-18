import { Component } from '@angular/core';
import { CategoryControllerService, CategoryShowDto } from "../../../openapi-client";

@Component({
  selector: 'pm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  // Definieren der Spaltennamen für die Kategorieliste
  columnNames: string[] = ['name', 'action'];
  // Array zur Speicherung aller Kategorien
  allCategories: CategoryShowDto[] = [];

  constructor(
    private categoryControllerService: CategoryControllerService
  ) {
    // Abrufen aller Kategorien über den Service und Zuweisen zum 'allCategories'-Array
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    })
  }
}
