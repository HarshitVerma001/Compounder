import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  HeaderComponent
} from './header/header.component';
import {
  AllCompoundsComponent
} from './all-compounds/all-compounds.component';
import {
  CompoundInfoComponent
} from './compound-info/compound-info.component';
import {
  AddCompoundComponent
} from './add-compound/add-compound.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  NgxPaginationModule
} from 'ngx-pagination';
import {
  HttpClientModule
} from '@angular/common/http'
import {
  FormsModule
} from '@angular/forms';
import {
  MatCardModule
} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCompoundsComponent,
    CompoundInfoComponent,
    AddCompoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
