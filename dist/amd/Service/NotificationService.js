define(["require", "exports", "./TonicService"], function (require, exports, TonicService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NotificationService extends TonicService_1.TonicService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BLHlCQUFpQyxTQUFRLDJCQUFZO1FBR2pEO1lBQ0ksS0FBSyxFQUFFLENBQUM7WUFFUixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRU0sZ0JBQWdCLENBQUMsTUFBVyxFQUFFLE9BQWU7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDaEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxnQkFBZ0IsQ0FBQyxRQUFxQjtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxrQkFBa0IsQ0FBQyxRQUFxQjtZQUMzQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUNKO0lBL0JELGtEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9uaWNTZXJ2aWNlfSBmcm9tIFwiLi9Ub25pY1NlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZ5YWJsZSB7XG4gICAgb25Ob3RpZmljYXRpb24oc2VuZGVyOiBhbnksIG1lc3NhZ2U6IHN0cmluZyk7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgVG9uaWNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogSU5vdGlmeWFibGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGZpcmVOb3RpZmljYXRpb24oc2VuZGVyOiBhbnksIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIub25Ob3RpZmljYXRpb24oc2VuZGVyLCBtZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXI6IElOb3RpZnlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciwgMCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19