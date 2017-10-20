import {DebuggerService} from "../Service/Debug/DebuggerService";
import {NotificationService} from "../Service/NotificationService";
import {TonicService} from "../Service/TonicService";

export abstract class AppKernel {

    private debug: DebuggerService = null;
    private notificationService: NotificationService = null;

    public getNotificationService() {
        if (this.notificationService === null) {
            this.notificationService = new NotificationService();
            this.registerService(this.notificationService);
        }

        return this.notificationService;
    }

    public getDebug() {
        if (this.debug === null) {
            this.debug = this.registerService(new DebuggerService());
            this.debug.detect();
        }

        return this.debug;
    }

    public init() {
        this.getDebug().log("Initialize app...");
        this.getDebug().log("Register services...");

        this.registerServices();

        this.getDebug().log("Initialization complete!");

        return this;
    }

    protected registerService<T extends TonicService>(service: T): T {
        this.getNotificationService()
            .registerListener(service);

        return service;
    }

    protected abstract registerServices();
}
