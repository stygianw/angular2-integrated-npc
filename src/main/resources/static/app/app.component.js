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
var core_1 = require("@angular/core");
var app_nameservice_1 = require("./app.nameservice");
var AppComponent = (function () {
    function AppComponent(nameService) {
        this.nameService = nameService;
        this.pages = [];
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataQuantity;
        this.nameService.getCount().subscribe(function (num) { return _this.processData(num); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.processData = function (dataQuantity) {
        if (dataQuantity != null && dataQuantity != 0) {
            console.log(dataQuantity);
            var pages = Math.floor(dataQuantity / AppComponent.ELEMENTS) + 1;
            for (var i = 1; i <= pages; i++) {
                this.pages.push(i);
            }
            this.selectedPage = 1;
        }
    };
    AppComponent.ELEMENTS = 20;
    AppComponent = __decorate([
        core_1.Component({
            selector: "component",
            templateUrl: "pagination.html",
            providers: [app_nameservice_1.NameService]
        }), 
        __metadata('design:paramtypes', [app_nameservice_1.NameService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map