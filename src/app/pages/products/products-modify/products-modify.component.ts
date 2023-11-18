import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductControllerService } from '../../../openapi-client';

@Component({
  selector: 'pm-products-modify',
  templateUrl: './products-modify.component.html',
  styleUrls: ['./products-modify.component.scss']
})
export class ProductsModifyComponent implements OnInit {
  // Definition des FormGroup für das Formular
  formGroup: FormGroup;
  // Variable zur Bestimmung, ob es sich um eine Bearbeitung handelt
  isEdit: boolean = false;
  // Produkt-ID, die während der Bearbeitung verwendet wird
  productId!: number;

  constructor(
    private productsService: ProductControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Initialisierung des Formulars mit leeren Werten und Validatoren
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, Validators.required),
      active: new FormControl(true)
    });
  }

  ngOnInit(): void {
    // Abrufen der Produkt-ID aus den Aktivierungsinformationen der Route
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      // Wenn eine ID vorhanden ist, handelt es sich um eine Bearbeitung
      this.isEdit = true;
      this.productId = id;
      // Abrufen des Produkts über den Service und Patchen des Formulars mit den Daten
      this.productsService.getProductById(id).subscribe(product => {
        this.formGroup.patchValue(product);
      });
    }
  }

  submit(): void {
    if (this.formGroup.valid) {
      // Erfassen der Daten aus dem Formular
      const productData = this.formGroup.value;
      if (this.isEdit && this.productId) {
        // Aktualisieren des vorhandenen Produkts oder Erstellen eines neuen Produkts
        this.productsService.updateProductById(this.productId, productData).subscribe(() => {
          // Nach erfolgreichem Aktualisieren zur Startseite navigieren
          this.router.navigate(['']);
        });
      } else {
        // Neues Produkt erstellen
        this.productsService.createProduct(productData).subscribe(() => {
          // Nach erfolgreichem Erstellen zur Startseite navigieren
          this.router.navigate(['']);
        });
      }
    } else {
      // Wenn das Formular nicht gültig ist, eine Fehlermeldung ausgeben
      console.error('Form is not valid');
    }
  }

  navigateToProductList(): void {
    // Zurück zur Produktliste navigieren
    this.router.navigate(['/products/list']);
  }
}
