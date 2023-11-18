import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth/login",
    // Lazy Loading der LoginComponent beim Aufrufen des Pfads
    loadChildren: () => import('./pages/auth/login/login.component').then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    // Lazy Loading der RegisterComponent beim Aufrufen des Pfads
    loadChildren: () => import(`./pages/auth/register/register.component`).then(v => v.RegisterComponent)
  },
  {
    path: "categories",
    // Lazy Loading des CategoryModule beim Aufrufen des Pfads
    loadChildren: () => import('./pages/category/category.module').then(v => v.CategoryModule)
  },
  {
    path: "products",
    // Lazy Loading des ProductsModule beim Aufrufen des Pfads
    loadChildren: () => import('./pages/products/products.module').then(v => v.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
