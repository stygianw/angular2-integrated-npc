import { Http } from "@angular/http";
import { Name } from "./name";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "./rxjs-operators";

@Injectable()
export class NameService {

	constructor(private http: Http) {};

	private static GETCOUNT: string = "/getcount";
	private static GETDATA: string = "/getdata";

	getCount(): Observable<number> {
		return this.http.get(NameService.GETCOUNT).map(response => response.json()).catch(error => Observable.throw(error));
	}

	getData(min: number, max: number): Observable<Name[]> {
		return this.http.get(NameService.GETDATA + `?min=${min}&max=${max}`).map(response => response.json() || { }).catch(error => Observable.throw(error));
	}

}