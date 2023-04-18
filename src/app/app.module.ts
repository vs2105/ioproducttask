import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsformComponent } from './component/productsform/productsform.component';
import { CarddashbordComponent } from './component/carddashbord/carddashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsformComponent,
    CarddashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
