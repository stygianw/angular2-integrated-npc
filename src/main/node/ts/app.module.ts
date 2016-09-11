import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { TableComponent } from "./table.component";


@NgModule({
	imports: [ BrowserModule, HttpModule ],
	declarations: [ AppComponent, TableComponent],
	bootstrap: [ AppComponent ]

})
export class AppModule {}