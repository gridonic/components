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
import TonicService from "./TonicService";
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
}(TonicService));
export { NotificationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQVkxQztJQUF5Qyx1Q0FBWTtJQUdqRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztJQUN4QixDQUFDO0lBRU0sOENBQWdCLEdBQXZCLFVBQXdCLE1BQVUsRUFBRSxPQUFlO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM1QixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDhDQUFnQixHQUF2QixVQUF3QixRQUFxQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxnREFBa0IsR0FBekIsVUFBMEIsUUFBcUI7UUFDM0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUF5QyxZQUFZLEdBK0JwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb25pY1NlcnZpY2UgZnJvbSBcIi4vVG9uaWNTZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmeWFibGUge1xuICAgIG9uTm90aWZpY2F0aW9uKHNlbmRlcjoge30sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIGZpcmVOb3RpZmljYXRpb24oc2VuZGVyOiB7fSwgbWVzc2FnZTogc3RyaW5nKTogSU5vdGlmaWNhdGlvblNlcnZpY2U7XG4gICAgcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcjogSU5vdGlmeWFibGUpOiBJTm90aWZpY2F0aW9uU2VydmljZTtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKTogSU5vdGlmaWNhdGlvblNlcnZpY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgVG9uaWNTZXJ2aWNlIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBJTm90aWZ5YWJsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyZU5vdGlmaWNhdGlvbihzZW5kZXI6IHt9LCBtZXNzYWdlOiBzdHJpbmcpOiBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyLm9uTm90aWZpY2F0aW9uKHNlbmRlciwgbWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIsIDApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==