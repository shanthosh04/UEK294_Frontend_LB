import { Component } from '@angular/core';
import {CategoryControllerService, CategoryShowDto} from "../../../openapi-client";

@Component({
  selector: 'pm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  columnNames: string[] = ['name', 'action'];
  allCategories: CategoryShowDto[] = [];
  constructor(
    private categoryControllerService: CategoryControllerService
  ) {
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    })
  }

}

