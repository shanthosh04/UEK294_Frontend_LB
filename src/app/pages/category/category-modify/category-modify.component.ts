import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryControllerService } from "../../../openapi-client";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pm-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.scss']
})

export class CategoryModifyComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = new FormGroup({});
  categoryId: string | number | undefined;

  constructor(
    private readonly categoryControllerService: CategoryControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.activatedRoute.snapshot.params['id']) {
      this.isEdit = true;

      this.categoryControllerService.getCategoryById(this.activatedRoute.snapshot.params['id']).subscribe(category => {
        this.formGroup.patchValue(category);
        this.categoryId = category.id;
      });
    }
  }
}

