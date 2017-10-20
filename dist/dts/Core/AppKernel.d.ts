import { DebuggerService } from "../Service/DebuggerService";
import { NotificationService } from "../Service/NotificationService";
import { TonicService } from "../Service/TonicService";
export declare abstract class AppKernel {
    private debug;
    private notificationService;
    getNotificationService(): NotificationService;
    getDebug(): DebuggerService;
    init(): this;
    protected registerService<T extends TonicService>(service: T): T;
    protected abstract registerServices(): any;
}
