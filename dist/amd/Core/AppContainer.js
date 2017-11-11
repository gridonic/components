define(["require", "exports", "../Service/Debug/DebuggerService", "../Service/NotificationService"], function (require, exports, DebuggerService_1, NotificationService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AppContainer {
        constructor() {
            this.serviceRegistration = {};
            this.services = {};
        }
        build() {
            this.register("service.core.notification", () => new NotificationService_1.NotificationService())
                .register("service.debug.debugger", () => new DebuggerService_1.DebuggerService());
        }
        getNotificationService() {
            return this.get("service.core.notification");
        }
        getDebuggerService() {
            return this.get("service.debug.debugger");
        }
        register(name, init) {
            this.serviceRegistration[name] = init;
            return this;
        }
        get(name) {
            if (!(name in this.services)) {
                if (!(name in this.serviceRegistration)) {
                    throw new Error(`Service ${name} is not registered!`);
                }
                this.services[name] = this.createServiceInstance(this.serviceRegistration[name]);
            }
            return this.services[name];
        }
        createServiceInstance(init) {
            const instance = init();
            this.getNotificationService().registerListener(instance);
            return instance;
        }
    }
    exports.AppContainer = AppContainer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBQ1ksd0JBQW1CLEdBQTJDLEVBQUUsQ0FBQztZQUNqRSxhQUFRLEdBQXFDLEVBQUUsQ0FBQztRQXlDNUQsQ0FBQztRQXZDVSxLQUFLO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FDTCwyQkFBMkIsRUFDM0IsR0FBRyxFQUFFLENBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO2lCQUNuQyxRQUFRLENBQ0wsd0JBQXdCLEVBQ3hCLEdBQUcsRUFBRSxDQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVNLHNCQUFzQjtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBd0IsQ0FBQztRQUN4RSxDQUFDO1FBRU0sa0JBQWtCO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFvQixDQUFDO1FBQ2pFLENBQUM7UUFFUyxRQUFRLENBQUMsSUFBWSxFQUFFLElBQXdCO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRVMsR0FBRyxDQUFDLElBQVk7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUkscUJBQXFCLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVTLHFCQUFxQixDQUFDLElBQXdCO1lBQ3BELE1BQU0sUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUNKO0lBM0NELG9DQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVidWdnZXJTZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZS9EZWJ1Zy9EZWJ1Z2dlclNlcnZpY2VcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2UvTm90aWZpY2F0aW9uU2VydmljZVwiO1xuaW1wb3J0IFRvbmljU2VydmljZSBmcm9tIFwiLi4vU2VydmljZS9Ub25pY1NlcnZpY2VcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFwcENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVnaXN0cmF0aW9uOiB7IFtrZXk6IHN0cmluZ106ICgpID0+IFRvbmljU2VydmljZTsgfSA9IHt9O1xuICAgIHByaXZhdGUgc2VydmljZXM6IHsgW2tleTogc3RyaW5nXTogVG9uaWNTZXJ2aWNlOyB9ID0ge307XG5cbiAgICBwdWJsaWMgYnVpbGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXG4gICAgICAgICAgICAgICAgXCJzZXJ2aWNlLmNvcmUubm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgKCkgPT4gbmV3IE5vdGlmaWNhdGlvblNlcnZpY2UoKSlcbiAgICAgICAgICAgIC5yZWdpc3RlcihcbiAgICAgICAgICAgICAgICBcInNlcnZpY2UuZGVidWcuZGVidWdnZXJcIixcbiAgICAgICAgICAgICAgICAoKSA9PiBuZXcgRGVidWdnZXJTZXJ2aWNlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb3RpZmljYXRpb25TZXJ2aWNlKCk6IE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJzZXJ2aWNlLmNvcmUubm90aWZpY2F0aW9uXCIpIGFzIE5vdGlmaWNhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlYnVnZ2VyU2VydmljZSgpOiBEZWJ1Z2dlclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJzZXJ2aWNlLmRlYnVnLmRlYnVnZ2VyXCIpIGFzIERlYnVnZ2VyU2VydmljZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBpbml0OiAoKSA9PiBUb25pY1NlcnZpY2UpOiBBcHBDb250YWluZXIge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZWdpc3RyYXRpb25bbmFtZV0gPSBpbml0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0KG5hbWU6IHN0cmluZyk6IFRvbmljU2VydmljZSB7XG4gICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy5zZXJ2aWNlcykpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy5zZXJ2aWNlUmVnaXN0cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmljZSAke25hbWV9IGlzIG5vdCByZWdpc3RlcmVkIWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc1tuYW1lXSA9IHRoaXMuY3JlYXRlU2VydmljZUluc3RhbmNlKHRoaXMuc2VydmljZVJlZ2lzdHJhdGlvbltuYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc1tuYW1lXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2VydmljZUluc3RhbmNlKGluaXQ6ICgpID0+IFRvbmljU2VydmljZSk6IFRvbmljU2VydmljZSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5pdCgpO1xuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvblNlcnZpY2UoKS5yZWdpc3Rlckxpc3RlbmVyKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxufVxuIl19