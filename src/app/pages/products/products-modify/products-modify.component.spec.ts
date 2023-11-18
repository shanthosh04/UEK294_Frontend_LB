import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModifyComponent } from './products-modify.component';

describe('ProductsModifyComponent', () => {
  let component: ProductsModifyComponent;
  let fixture: ComponentFixture<ProductsModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModifyComponent]
    });
    // Erstellt eine Komponenteninstanz und eine Fixture
    fixture = TestBed.createComponent(ProductsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initialisierung der Komponente
  });

  it('should create', () => {
    // Überprüft, ob die Komponente erfolgreich erstellt wurde
    expect(component).toBeTruthy();
  });
});
