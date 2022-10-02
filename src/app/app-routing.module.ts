import { DeleteComponent } from './main/delete/delete.component';
import { CreateQuoteComponent } from './main/create-quote/create-quote.component';
import { QuotesComponent } from './main/quotes/quotes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'quotes', pathMatch: 'full' },
  { path: 'quotes', component: QuotesComponent },
  { path: 'create-quote', component: CreateQuoteComponent },
  { path: 'quotes/delete-quote/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
