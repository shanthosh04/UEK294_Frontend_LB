// category-modify.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryControllerService } from '../../../openapi-client';
@Component({
  selector: 'app-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.scss']
})
export class CategoryModifyComponent implements OnInit {
  formGroup: FormGroup;
  isEdit: boolean = false;
  categoryId: number | null = null;

  constructor(
    private categoryControllerService: CategoryControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      active: new FormControl(false)
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.categoryId = id;
      this.categoryControllerService.getCategoryById(id).subscribe(category => {
        this.formGroup.patchValue(category);
      });
    }
  }

  submit(): void {
    if (this.formGroup.valid) {
      const categoryData = this.formGroup.value;
      if (this.isEdit && this.categoryId) {
        this.categoryControllerService.updateCategoryById(this.categoryId, categoryData).subscribe(() => {
          this.router.navigateByUrl('/categories/list');
        });
      } else {
        this.categoryControllerService.createCategory(categoryData).subscribe(() => {
          this.router.navigateByUrl('/categories/list');
        });
      }
    } else {
      console.error('Form is not valid');
    }
  }
}
