import { DebuggerService } from "../Service/Debug/DebuggerService";
import { NotificationService } from "../Service/NotificationService";
import TonicService from "../Service/TonicService";
export declare abstract class AppContainer {
    private serviceRegistration;
    private services;
    build(): void;
    getNotificationService(): NotificationService;
    getDebuggerService(): DebuggerService;
    protected register(name: string, init: () => TonicService): AppContainer;
    protected get(name: string): TonicService;
    protected createServiceInstance(init: () => TonicService): TonicService;
}
