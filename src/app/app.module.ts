import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [AppComponent, CategoriesComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRouteModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }