"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DebuggerService_1 = require("../Service/DebuggerService");
const NotificationService_1 = require("../Service/NotificationService");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUEyRDtBQUMzRCx3RUFBbUU7QUFHbkU7SUFBQTtRQUVZLFVBQUssR0FBb0IsSUFBSSxDQUFDO1FBQzlCLHdCQUFtQixHQUF3QixJQUFJLENBQUM7SUF1QzVELENBQUM7SUFyQ1Usc0JBQXNCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxDQUFDO0lBRU0sUUFBUTtRQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxpQ0FBZSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sSUFBSTtRQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLGVBQWUsQ0FBeUIsT0FBVTtRQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7YUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBR0o7QUExQ0QsOEJBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEZWJ1Z2dlclNlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlL0RlYnVnZ2VyU2VydmljZVwiO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlXCI7XG5pbXBvcnQge1RvbmljU2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2UvVG9uaWNTZXJ2aWNlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHBLZXJuZWwge1xuXG4gICAgcHJpdmF0ZSBkZWJ1ZzogRGVidWdnZXJTZXJ2aWNlID0gbnVsbDtcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBudWxsO1xuXG4gICAgcHVibGljIGdldE5vdGlmaWNhdGlvblNlcnZpY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZSA9IG5ldyBOb3RpZmljYXRpb25TZXJ2aWNlKCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZSh0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGVidWcoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gdGhpcy5yZWdpc3RlclNlcnZpY2UobmV3IERlYnVnZ2VyU2VydmljZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZGVidWcuZGV0ZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWJ1ZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXREZWJ1ZygpLmxvZyhcIkluaXRpYWxpemUgYXBwLi4uXCIpO1xuICAgICAgICB0aGlzLmdldERlYnVnKCkubG9nKFwiUmVnaXN0ZXIgc2VydmljZXMuLi5cIik7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2VzKCk7XG5cbiAgICAgICAgdGhpcy5nZXREZWJ1ZygpLmxvZyhcIkluaXRpYWxpemF0aW9uIGNvbXBsZXRlIVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJTZXJ2aWNlPFQgZXh0ZW5kcyBUb25pY1NlcnZpY2U+KHNlcnZpY2U6IFQpOiBUIHtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25TZXJ2aWNlKClcbiAgICAgICAgICAgIC5yZWdpc3Rlckxpc3RlbmVyKHNlcnZpY2UpO1xuXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWdpc3RlclNlcnZpY2VzKCk7XG59XG4iXX0=