"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("./rxjs-operators");
var NameService = (function () {
    function NameService(http) {
        this.http = http;
    }
    ;
    NameService.prototype.getCount = function () {
        return this.http.get(NameService.GETCOUNT).map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    NameService.prototype.getData = function (min, max) {
        return this.http.get(NameService.GETDATA + ("?min=" + min + "&max=" + max)).map(function (response) { return response.json() || {}; }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    NameService.GETCOUNT = "/getcount";
    NameService.GETDATA = "/getdata";
    NameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameService);
    return NameService;
}());
exports.NameService = NameService;
//# sourceMappingURL=app.nameservice.js.map