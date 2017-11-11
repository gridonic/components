define(["require", "exports", "./TonicService"], function (require, exports, TonicService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NotificationService extends TonicService_1.default {
        constructor() {
            super();
            this.listeners = [];
        }
        fireNotification(sender, message) {
            this.listeners.forEach((listener) => {
                listener.onNotification(sender, message);
            });
            return this;
        }
        registerListener(listener) {
            this.listeners.push(listener);
            return this;
        }
        unregisterListener(listener) {
            const index = this.listeners.indexOf(listener, 0);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
            return this;
        }
    }
    exports.NotificationService = NotificationService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQVlBLHlCQUFpQyxTQUFRLHNCQUFZO1FBR2pEO1lBQ0ksS0FBSyxFQUFFLENBQUM7WUFFUixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRU0sZ0JBQWdCLENBQUMsTUFBVSxFQUFFLE9BQWU7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDaEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxnQkFBZ0IsQ0FBQyxRQUFxQjtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxrQkFBa0IsQ0FBQyxRQUFxQjtZQUMzQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUNKO0lBL0JELGtEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb25pY1NlcnZpY2UgZnJvbSBcIi4vVG9uaWNTZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmeWFibGUge1xuICAgIG9uTm90aWZpY2F0aW9uKHNlbmRlcjoge30sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIGZpcmVOb3RpZmljYXRpb24oc2VuZGVyOiB7fSwgbWVzc2FnZTogc3RyaW5nKTogSU5vdGlmaWNhdGlvblNlcnZpY2U7XG4gICAgcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcjogSU5vdGlmeWFibGUpOiBJTm90aWZpY2F0aW9uU2VydmljZTtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKTogSU5vdGlmaWNhdGlvblNlcnZpY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgVG9uaWNTZXJ2aWNlIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBJTm90aWZ5YWJsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyZU5vdGlmaWNhdGlvbihzZW5kZXI6IHt9LCBtZXNzYWdlOiBzdHJpbmcpOiBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyLm9uTm90aWZpY2F0aW9uKHNlbmRlciwgbWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBJTm90aWZ5YWJsZSk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIsIDApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==