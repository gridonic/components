import { NotificationService } from "./Service/NotificationService";
import { TonicService } from "./TonicService";
import { DebuggerService } from "./Service/DebuggerService";
export declare abstract class AppKernel {
    private debug;
    private notificationService;
    getNotificationService(): NotificationService;
    getDebug(): DebuggerService;
    init(): this;
    protected registerService<T extends TonicService>(service: T): T;
    protected abstract registerServices(): any;
}
