import {DebuggerService} from "../Service/Debug/DebuggerService";
import {NotificationService} from "../Service/NotificationService";
import TonicService from "../Service/TonicService";

export abstract class AppContainer {
    private serviceRegistration: { [key: string]: () => TonicService; } = {};
    private services: { [key: string]: TonicService; } = {};

    public build(): void {
        this.register(
                "service.core.notification",
                () => new NotificationService())
            .register(
                "service.debug.debugger",
                () => new DebuggerService());
    }

    public getNotificationService(): NotificationService {
        return this.get("service.core.notification") as NotificationService;
    }

    public getDebuggerService(): DebuggerService {
        return this.get("service.debug.debugger") as DebuggerService;
    }

    protected register(name: string, init: () => TonicService): AppContainer {
        this.serviceRegistration[name] = init;
        return this;
    }

    protected get(name: string): TonicService {
        if (!(name in this.services)) {
            if (!(name in this.serviceRegistration)) {
                throw new Error(`Service ${name} is not registered!`);
            }
            this.services[name] = this.createServiceInstance(this.serviceRegistration[name]);
        }

        return this.services[name];
    }

    protected createServiceInstance(init: () => TonicService): TonicService {
        const instance = init();
        this.getNotificationService().registerListener(instance);

        return instance;
    }
}
