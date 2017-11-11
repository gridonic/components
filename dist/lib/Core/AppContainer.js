"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebuggerService_1 = require("../Service/Debug/DebuggerService");
var NotificationService_1 = require("../Service/NotificationService");
var AppContainer = (function () {
    function AppContainer() {
        this.serviceRegistration = {};
        this.services = {};
    }
    AppContainer.prototype.build = function () {
        this.register("service.core.notification", function () { return new NotificationService_1.NotificationService(); })
            .register("service.debug.debugger", function () { return new DebuggerService_1.DebuggerService(); });
    };
    AppContainer.prototype.getNotificationService = function () {
        return this.get("service.core.notification");
    };
    AppContainer.prototype.getDebuggerService = function () {
        return this.get("service.debug.debugger");
    };
    AppContainer.prototype.register = function (name, init) {
        this.serviceRegistration[name] = init;
        return this;
    };
    AppContainer.prototype.get = function (name) {
        if (!(name in this.services)) {
            if (!(name in this.serviceRegistration)) {
                throw new Error("Service " + name + " is not registered!");
            }
            this.services[name] = this.createServiceInstance(this.serviceRegistration[name]);
        }
        return this.services[name];
    };
    AppContainer.prototype.createServiceInstance = function (init) {
        var instance = init();
        this.getNotificationService().registerListener(instance);
        return instance;
    };
    return AppContainer;
}());
exports.AppContainer = AppContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9FQUFpRTtBQUNqRSxzRUFBbUU7QUFHbkU7SUFBQTtRQUNZLHdCQUFtQixHQUEyQyxFQUFFLENBQUM7UUFDakUsYUFBUSxHQUFxQyxFQUFFLENBQUM7SUF5QzVELENBQUM7SUF2Q1UsNEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQ0wsMkJBQTJCLEVBQzNCLGNBQU0sT0FBQSxJQUFJLHlDQUFtQixFQUFFLEVBQXpCLENBQXlCLENBQUM7YUFDbkMsUUFBUSxDQUNMLHdCQUF3QixFQUN4QixjQUFNLE9BQUEsSUFBSSxpQ0FBZSxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sNkNBQXNCLEdBQTdCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQXdCLENBQUM7SUFDeEUsQ0FBQztJQUVNLHlDQUFrQixHQUF6QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFvQixDQUFDO0lBQ2pFLENBQUM7SUFFUywrQkFBUSxHQUFsQixVQUFtQixJQUFZLEVBQUUsSUFBd0I7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUywwQkFBRyxHQUFiLFVBQWMsSUFBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBVyxJQUFJLHdCQUFxQixDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRVMsNENBQXFCLEdBQS9CLFVBQWdDLElBQXdCO1FBQ3BELElBQU0sUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDcUIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlYnVnZ2VyU2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2UvRGVidWcvRGVidWdnZXJTZXJ2aWNlXCI7XG5pbXBvcnQge05vdGlmaWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlL05vdGlmaWNhdGlvblNlcnZpY2VcIjtcbmltcG9ydCBUb25pY1NlcnZpY2UgZnJvbSBcIi4uL1NlcnZpY2UvVG9uaWNTZXJ2aWNlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHBDb250YWluZXIge1xuICAgIHByaXZhdGUgc2VydmljZVJlZ2lzdHJhdGlvbjogeyBba2V5OiBzdHJpbmddOiAoKSA9PiBUb25pY1NlcnZpY2U7IH0gPSB7fTtcbiAgICBwcml2YXRlIHNlcnZpY2VzOiB7IFtrZXk6IHN0cmluZ106IFRvbmljU2VydmljZTsgfSA9IHt9O1xuXG4gICAgcHVibGljIGJ1aWxkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgIFwic2VydmljZS5jb3JlLm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICgpID0+IG5ldyBOb3RpZmljYXRpb25TZXJ2aWNlKCkpXG4gICAgICAgICAgICAucmVnaXN0ZXIoXG4gICAgICAgICAgICAgICAgXCJzZXJ2aWNlLmRlYnVnLmRlYnVnZ2VyXCIsXG4gICAgICAgICAgICAgICAgKCkgPT4gbmV3IERlYnVnZ2VyU2VydmljZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9uU2VydmljZSgpOiBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwic2VydmljZS5jb3JlLm5vdGlmaWNhdGlvblwiKSBhcyBOb3RpZmljYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWJ1Z2dlclNlcnZpY2UoKTogRGVidWdnZXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwic2VydmljZS5kZWJ1Zy5kZWJ1Z2dlclwiKSBhcyBEZWJ1Z2dlclNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgaW5pdDogKCkgPT4gVG9uaWNTZXJ2aWNlKTogQXBwQ29udGFpbmVyIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVnaXN0cmF0aW9uW25hbWVdID0gaW5pdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldChuYW1lOiBzdHJpbmcpOiBUb25pY1NlcnZpY2Uge1xuICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMuc2VydmljZXMpKSB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMuc2VydmljZVJlZ2lzdHJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZpY2UgJHtuYW1lfSBpcyBub3QgcmVnaXN0ZXJlZCFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VydmljZXNbbmFtZV0gPSB0aGlzLmNyZWF0ZVNlcnZpY2VJbnN0YW5jZSh0aGlzLnNlcnZpY2VSZWdpc3RyYXRpb25bbmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNlcnZpY2VJbnN0YW5jZShpbml0OiAoKSA9PiBUb25pY1NlcnZpY2UpOiBUb25pY1NlcnZpY2Uge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGluaXQoKTtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25TZXJ2aWNlKCkucmVnaXN0ZXJMaXN0ZW5lcihpbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbn1cbiJdfQ==