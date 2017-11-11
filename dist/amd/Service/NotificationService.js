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
define(["require", "exports", "./TonicService"], function (require, exports, TonicService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFZQTtRQUF5Qyx1Q0FBWTtRQUdqRDtZQUFBLFlBQ0ksaUJBQU8sU0FHVjtZQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUN4QixDQUFDO1FBRU0sOENBQWdCLEdBQXZCLFVBQXdCLE1BQVUsRUFBRSxPQUFlO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDNUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsUUFBcUI7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRU0sZ0RBQWtCLEdBQXpCLFVBQTBCLFFBQXFCO1lBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQUFDLEFBL0JELENBQXlDLHNCQUFZLEdBK0JwRDtJQS9CWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9uaWNTZXJ2aWNlIGZyb20gXCIuL1RvbmljU2VydmljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZnlhYmxlIHtcbiAgICBvbk5vdGlmaWNhdGlvbihzZW5kZXI6IHt9LCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICBmaXJlTm90aWZpY2F0aW9uKHNlbmRlcjoge30sIG1lc3NhZ2U6IHN0cmluZyk6IElOb3RpZmljYXRpb25TZXJ2aWNlO1xuICAgIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKTogSU5vdGlmaWNhdGlvblNlcnZpY2U7XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IElOb3RpZmljYXRpb25TZXJ2aWNlO1xufVxuXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSBleHRlbmRzIFRvbmljU2VydmljZSBpbXBsZW1lbnRzIElOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogSU5vdGlmeWFibGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGZpcmVOb3RpZmljYXRpb24oc2VuZGVyOiB7fSwgbWVzc2FnZTogc3RyaW5nKTogTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5vbk5vdGlmaWNhdGlvbihzZW5kZXIsIG1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcjogSU5vdGlmeWFibGUpOiBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHVucmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcjogSU5vdGlmeWFibGUpOiBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyLCAwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=