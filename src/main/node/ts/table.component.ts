import { Component, Input } from "@angular/core";
import { NameService } from "./app.nameservice";
import { Name } from "./name";
import { AppComponent } from "./app.component"; 

@Component({
	selector: "child-table",
	templateUrl: "childtable.html",
	providers: [ NameService ]
})
export class TableComponent {

	isLoading: boolean = false;
    
    
    _page: number;
    
    @Input()
    set page(page: number) {
        console.log(page);
        this._page = page;
        if(page > 0) {
            this.loadData(page, AppComponent.ELEMENTS);
        }
    }
    get page(): number {
        return this._page;    
    }
    
	data: Name[];

	errorMessage: string;

	constructor(private nameService: NameService) {}

	loadData(page: number, pageVolume: number) {
		let start = pageVolume * (page - 1);
		let end = start + pageVolume;
		this.isLoading = true;
		this.nameService.getData(start,end).subscribe(data => { this.data = data; this.isLoading = false }, 
			error => this.errorMessage = error);

	}

}