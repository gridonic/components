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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3RvbmljL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUFrRTtBQUVsRSw2REFBMEQ7QUFFMUQ7SUFBQTtRQUVZLFVBQUssR0FBb0IsSUFBSSxDQUFDO1FBQzlCLHdCQUFtQixHQUF3QixJQUFJLENBQUM7SUF1QzVELENBQUM7SUFyQ1UsMENBQXNCLEdBQTdCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGlDQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsbUNBQWUsR0FBekIsVUFBa0QsT0FBVTtRQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7YUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNxQiw4QkFBUyJ9