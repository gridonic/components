define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppKernel = (function () {
        function AppKernel() {
        }
        AppKernel.prototype.init = function () {
            this.appContainer.build();
            this.getDebuggerService().log("Initialize app...");
            this.getDebuggerService().log("Register services...");
            this.getDebuggerService().log("Initialization complete!");
            return this;
        };
        AppKernel.prototype.getDebuggerService = function () {
            return this.appContainer.getDebuggerService();
        };
        return AppKernel;
    }());
    exports.AppKernel = AppKernel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBaUJBLENBQUM7UUFkVSx3QkFBSSxHQUFYO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFUyxzQ0FBa0IsR0FBNUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFDTCxnQkFBQztJQUFELENBQUMsQUFqQkQsSUFpQkM7SUFqQnFCLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEZWJ1Z2dlclNlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlL0RlYnVnL0RlYnVnZ2VyU2VydmljZVwiO1xuaW1wb3J0IHtBcHBDb250YWluZXJ9IGZyb20gXCIuL0FwcENvbnRhaW5lclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXBwS2VybmVsIHtcbiAgICBwcml2YXRlIGFwcENvbnRhaW5lcjogQXBwQ29udGFpbmVyO1xuXG4gICAgcHVibGljIGluaXQoKTogQXBwS2VybmVsIHtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYnVpbGQoKTtcblxuICAgICAgICB0aGlzLmdldERlYnVnZ2VyU2VydmljZSgpLmxvZyhcIkluaXRpYWxpemUgYXBwLi4uXCIpO1xuICAgICAgICB0aGlzLmdldERlYnVnZ2VyU2VydmljZSgpLmxvZyhcIlJlZ2lzdGVyIHNlcnZpY2VzLi4uXCIpO1xuXG4gICAgICAgIHRoaXMuZ2V0RGVidWdnZXJTZXJ2aWNlKCkubG9nKFwiSW5pdGlhbGl6YXRpb24gY29tcGxldGUhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXREZWJ1Z2dlclNlcnZpY2UoKTogRGVidWdnZXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwQ29udGFpbmVyLmdldERlYnVnZ2VyU2VydmljZSgpO1xuICAgIH1cbn1cbiJdfQ==