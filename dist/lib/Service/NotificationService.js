"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TonicService_1 = require("./TonicService");
var NotificationService = (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService() {
        var _this = _super.call(this) || this;
        _this.listeners = [];
        return _this;
    }
    NotificationService.prototype.fireNotification = function (sender, message) {
        this.listeners.forEach(function (listener) {
            listener.onNotification(sender, message);
        });
        return this;
    };
    NotificationService.prototype.registerListener = function (listener) {
        this.listeners.push(listener);
        return this;
    };
    NotificationService.prototype.unregisterListener = function (listener) {
        var index = this.listeners.indexOf(listener, 0);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
        return this;
    };
    return NotificationService;
}(TonicService_1.default));
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQVkxQztJQUF5Qyx1Q0FBWTtJQUdqRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztJQUN4QixDQUFDO0lBRU0sOENBQWdCLEdBQXZCLFVBQXdCLE1BQVUsRUFBRSxPQUFlO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM1QixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDhDQUFnQixHQUF2QixVQUF3QixRQUFxQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxnREFBa0IsR0FBekIsVUFBMEIsUUFBcUI7UUFDM0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUF5QyxzQkFBWSxHQStCcEQ7QUEvQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvbmljU2VydmljZSBmcm9tIFwiLi9Ub25pY1NlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZ5YWJsZSB7XG4gICAgb25Ob3RpZmljYXRpb24oc2VuZGVyOiB7fSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgZmlyZU5vdGlmaWNhdGlvbihzZW5kZXI6IHt9LCBtZXNzYWdlOiBzdHJpbmcpOiBJTm90aWZpY2F0aW9uU2VydmljZTtcbiAgICByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IElOb3RpZmljYXRpb25TZXJ2aWNlO1xuICAgIHVucmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcjogSU5vdGlmeWFibGUpOiBJTm90aWZpY2F0aW9uU2VydmljZTtcbn1cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBUb25pY1NlcnZpY2UgaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IElOb3RpZnlhYmxlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaXJlTm90aWZpY2F0aW9uKHNlbmRlcjoge30sIG1lc3NhZ2U6IHN0cmluZyk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIub25Ob3RpZmljYXRpb24oc2VuZGVyLCBtZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKTogTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKTogTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciwgMCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19