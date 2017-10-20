define(["require", "exports", "../Service/DebuggerService", "../Service/NotificationService"], function (require, exports, DebuggerService_1, NotificationService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AppKernel {
        constructor() {
            this.debug = null;
            this.notificationService = null;
        }
        getNotificationService() {
            if (this.notificationService === null) {
                this.notificationService = new NotificationService_1.NotificationService();
                this.registerService(this.notificationService);
            }
            return this.notificationService;
        }
        getDebug() {
            if (this.debug === null) {
                this.debug = this.registerService(new DebuggerService_1.DebuggerService());
                this.debug.detect();
            }
            return this.debug;
        }
        init() {
            this.getDebug().log("Initialize app...");
            this.getDebug().log("Register services...");
            this.registerServices();
            this.getDebug().log("Initialization complete!");
            return this;
        }
        registerService(service) {
            this.getNotificationService()
                .registerListener(service);
            return service;
        }
    }
    exports.AppKernel = AppKernel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBRVksVUFBSyxHQUFvQixJQUFJLENBQUM7WUFDOUIsd0JBQW1CLEdBQXdCLElBQUksQ0FBQztRQXVDNUQsQ0FBQztRQXJDVSxzQkFBc0I7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQztRQUVNLFFBQVE7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGlDQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRU0sSUFBSTtZQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVTLGVBQWUsQ0FBeUIsT0FBVTtZQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7aUJBQ3hCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUdKO0lBMUNELDhCQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVidWdnZXJTZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZS9EZWJ1Z2dlclNlcnZpY2VcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2UvTm90aWZpY2F0aW9uU2VydmljZVwiO1xuaW1wb3J0IHtUb25pY1NlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlL1RvbmljU2VydmljZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXBwS2VybmVsIHtcblxuICAgIHByaXZhdGUgZGVidWc6IERlYnVnZ2VyU2VydmljZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXROb3RpZmljYXRpb25TZXJ2aWNlKCkge1xuICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UgPSBuZXcgTm90aWZpY2F0aW9uU2VydmljZSgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UodGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlYnVnKCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1ZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IHRoaXMucmVnaXN0ZXJTZXJ2aWNlKG5ldyBEZWJ1Z2dlclNlcnZpY2UoKSk7XG4gICAgICAgICAgICB0aGlzLmRlYnVnLmRldGVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVidWc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGVidWcoKS5sb2coXCJJbml0aWFsaXplIGFwcC4uLlwiKTtcbiAgICAgICAgdGhpcy5nZXREZWJ1ZygpLmxvZyhcIlJlZ2lzdGVyIHNlcnZpY2VzLi4uXCIpO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlcygpO1xuXG4gICAgICAgIHRoaXMuZ2V0RGVidWcoKS5sb2coXCJJbml0aWFsaXphdGlvbiBjb21wbGV0ZSFcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyU2VydmljZTxUIGV4dGVuZHMgVG9uaWNTZXJ2aWNlPihzZXJ2aWNlOiBUKTogVCB7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uU2VydmljZSgpXG4gICAgICAgICAgICAucmVnaXN0ZXJMaXN0ZW5lcihzZXJ2aWNlKTtcblxuICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVnaXN0ZXJTZXJ2aWNlcygpO1xufVxuIl19