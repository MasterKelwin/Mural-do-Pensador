import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateQuoteComponent } from './main/create-quote/create-quote.component';
import { FormsModule } from '@angular/forms';
import { QuotesComponent } from './main/quotes/quotes.component';
import { CardQuoteComponent } from './main/quotes/card-quote/card-quote.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateQuoteComponent,
    QuotesComponent,
    CardQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
