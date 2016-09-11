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
var app_component_1 = require("./app.component");
var TableComponent = (function () {
    function TableComponent(nameService) {
        this.nameService = nameService;
        this.isLoading = false;
    }
    Object.defineProperty(TableComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (page) {
            console.log(page);
            this._page = page;
            if (page > 0) {
                this.loadData(page, app_component_1.AppComponent.ELEMENTS);
            }
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.loadData = function (page, pageVolume) {
        var _this = this;
        var start = pageVolume * (page - 1);
        var end = start + pageVolume;
        this.isLoading = true;
        this.nameService.getData(start, end).subscribe(function (data) { _this.data = data; _this.isLoading = false; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], TableComponent.prototype, "page", null);
    TableComponent = __decorate([
        core_1.Component({
            selector: "child-table",
            templateUrl: "childtable.html",
            providers: [app_nameservice_1.NameService]
        }), 
        __metadata('design:paramtypes', [app_nameservice_1.NameService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map