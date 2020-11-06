import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookCardComponent } from './pages/home/book-card/book-card.component';
import { TableAuthorComponent } from './pages/table-author/table-author.component';
import { TableHomeComponent } from './pages/table-home/table-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    TableAuthorComponent,
    TableHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, TableHomeComponent]
})
export class AppModule { }
