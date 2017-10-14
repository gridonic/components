"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationService_1 = require("./Service/NotificationService");
var DebuggerService_1 = require("./Service/DebuggerService");
var AppKernel = (function () {
    function AppKernel() {
        this.debug = null;
        this.notificationService = null;
    }
    AppKernel.prototype.getNotificationService = function () {
        if (this.notificationService === null) {
            this.notificationService = new NotificationService_1.NotificationService();
            this.registerService(this.notificationService);
        }
        return this.notificationService;
    };
    AppKernel.prototype.getDebug = function () {
        if (this.debug === null) {
            this.debug = this.registerService(new DebuggerService_1.DebuggerService());
            this.debug.detect();
        }
        return this.debug;
    };
    AppKernel.prototype.init = function () {
        this.getDebug().log('Initialize app...');
        this.getDebug().log('Register services...');
        this.registerServices();
        this.getDebug().log('Initialization complete!');
        return this;
    };
    AppKernel.prototype.registerService = function (service) {
        this.getNotificationService()
            .registerListener(service);
        return service;
    };
    return AppKernel;
}());
exports.AppKernel = AppKernel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3RvbmljL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUFrRTtBQUVsRSw2REFBMEQ7QUFFMUQ7SUFBQTtRQUVZLFVBQUssR0FBb0IsSUFBSSxDQUFDO1FBQzlCLHdCQUFtQixHQUF3QixJQUFJLENBQUM7SUF1QzVELENBQUM7SUFyQ1UsMENBQXNCLEdBQTdCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGlDQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsbUNBQWUsR0FBekIsVUFBa0QsT0FBVTtRQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7YUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNxQiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tm90aWZpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vU2VydmljZS9Ob3RpZmljYXRpb25TZXJ2aWNlXCI7XG5pbXBvcnQge1RvbmljU2VydmljZX0gZnJvbSBcIi4vVG9uaWNTZXJ2aWNlXCI7XG5pbXBvcnQge0RlYnVnZ2VyU2VydmljZX0gZnJvbSBcIi4vU2VydmljZS9EZWJ1Z2dlclNlcnZpY2VcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFwcEtlcm5lbCB7XG5cbiAgICBwcml2YXRlIGRlYnVnOiBEZWJ1Z2dlclNlcnZpY2UgPSBudWxsO1xuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9uU2VydmljZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uU2VydmljZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlID0gbmV3IE5vdGlmaWNhdGlvblNlcnZpY2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlKHRoaXMubm90aWZpY2F0aW9uU2VydmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWJ1ZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcgPSB0aGlzLnJlZ2lzdGVyU2VydmljZShuZXcgRGVidWdnZXJTZXJ2aWNlKCkpO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Zy5kZXRlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLmdldERlYnVnKCkubG9nKCdJbml0aWFsaXplIGFwcC4uLicpO1xuICAgICAgICB0aGlzLmdldERlYnVnKCkubG9nKCdSZWdpc3RlciBzZXJ2aWNlcy4uLicpO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlcygpO1xuXG4gICAgICAgIHRoaXMuZ2V0RGVidWcoKS5sb2coJ0luaXRpYWxpemF0aW9uIGNvbXBsZXRlIScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlclNlcnZpY2U8VCBleHRlbmRzIFRvbmljU2VydmljZT4oc2VydmljZTogVCk6IFQge1xuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvblNlcnZpY2UoKVxuICAgICAgICAgICAgLnJlZ2lzdGVyTGlzdGVuZXIoc2VydmljZSk7XG5cbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlZ2lzdGVyU2VydmljZXMoKTtcbn0iXX0=