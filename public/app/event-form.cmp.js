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
var core_1 = require('@angular/core');
var event_1 = require('./event');
var master_service_1 = require('./master.service');
var EventFormCmp = (function () {
    function EventFormCmp(service) {
        this.service = service;
        this.model = new event_1.Event('', '', '', '', '', '', '');
        this.submitted = false;
    }
    EventFormCmp.prototype.onSubmit = function () {
        this.submitted = true;
        this.service.createEvent(this.model).then(function (res) {
            console.log(res.json());
        });
    };
    Object.defineProperty(EventFormCmp.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    EventFormCmp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event-form',
            templateUrl: 'event-form.cmp.html',
            providers: [master_service_1.MasterService]
        }), 
        __metadata('design:paramtypes', [master_service_1.MasterService])
    ], EventFormCmp);
    return EventFormCmp;
}());
exports.EventFormCmp = EventFormCmp;
//# sourceMappingURL=event-form.cmp.js.map