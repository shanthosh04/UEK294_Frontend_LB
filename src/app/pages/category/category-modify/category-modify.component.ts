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
  categoryId!: number;

  constructor(
    private categoryControllerService: CategoryControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Initialisierung des Formulars mit leeren Werten und Validatoren
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      active: new FormControl(false)
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      // Wenn eine ID vorhanden ist, handelt es sich um eine Bearbeitung
      this.isEdit = true;
      this.categoryId = id;
      // Abrufen der Kategorie über den Service und Patchen des Formulars mit den Daten
      this.categoryControllerService.getCategoryById(id).subscribe(category => {
        this.formGroup.patchValue(category);
      });
    }
  }

  submit(): void {
    if (this.formGroup.valid) {
      // Erfassen der Daten aus dem Formular
      const categoryData = this.formGroup.value;
      if (this.isEdit && this.categoryId) {
        // Aktualisieren der vorhandenen Kategorie oder Erstellen einer neuen Kategorie
        this.categoryControllerService.updateCategoryById(this.categoryId, categoryData).subscribe(() => {
          // Nach erfolgreichem Aktualisieren zur Kategorieliste navigieren
          this.router.navigate(['/categories/list']);
        });
      } else {
        // Neue Kategorie erstellen
        this.categoryControllerService.createCategory(categoryData).subscribe(() => {
          // Nach erfolgreichem Erstellen zur Kategorieliste navigieren
          this.router.navigate(['/categories/list']);
        });
      }
    } else {
      // Wenn das Formular nicht gültig ist, eine Fehlermeldung ausgeben
      console.error('Form is not valid');
    }
  }
}
