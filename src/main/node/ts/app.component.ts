import { Component, OnInit, ViewChild } from "@angular/core";
import { NameService } from "./app.nameservice";
import { TableComponent } from "./table.component";


@Component({
	selector: "component",
	templateUrl: "pagination.html",
	providers: [ NameService ]
})
export class AppComponent implements OnInit {

	constructor(private nameService: NameService) {};

	public static ELEMENTS: number = 20;

	errorMessage: string;
	pages: number[] = [];

	selectedPage: number;
    
	ngOnInit() : void {
		let dataQuantity;
		this.nameService.getCount().subscribe(num => this.processData(num), error => this.errorMessage = error);

	}
    
    processData(dataQuantity: number) : void {
        if(dataQuantity != null && dataQuantity != 0) {
            console.log(dataQuantity);
            let pages = Math.floor(dataQuantity / AppComponent.ELEMENTS) + 1;
            for (let i = 1; i <= pages; i++) {
                this.pages.push(i);
            }
            this.selectedPage = 1;
        }
    }

}