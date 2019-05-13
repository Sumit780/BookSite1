import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';

const routes: Routes = [
  {
    path: 'books',
    component: AllbooksComponent
  },
  {
    path: 'books/:genre',
    component: AllbooksComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
