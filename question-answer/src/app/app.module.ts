import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRouteModule } from "./app.routes";

NgModule({
    imports: [BrowserModule, AppRouteModule], // this module is imported by each component 
    declarations: [AppComponent], // we're registering these components with the module
    bootstrap: [AppComponent] // from this component boostrapping takes place
})
export class AppModule {}