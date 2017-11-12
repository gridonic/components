import AppService from "../service/AppService";
import DebuggerService from "../service/Debug/DebuggerService";
import NotificationService from "../service/NotificationService";
import Container from "./Container";

export default abstract class AppContainer extends Container {
    // tslint:disable-next-line
    public static readonly Key = {
        Debugger: "service.debug.debugger",
        Notification: "service.core.notification",
    };

    /**
     * @return {NotificationService}
     */
    public get notificationService(): NotificationService {
        return this.get<NotificationService>(AppContainer.Key.Notification);
    }

    /**
     * @return {DebuggerService}
     */
    public get debuggerService(): DebuggerService {
        return this.get<DebuggerService>(AppContainer.Key.Debugger);
    }

    /**
     * In the app Container, we detect "special" injected instances like {@see AppService} instances, that we wire
     * up with some default dependencies. E.g., the {@see Debugger} service will always be available in another service.
     *
     * @override
     */
    protected createInstance(init: () => any): any {
        const instance = super.createInstance(init);
        return this.setupServiceInstance(instance);
    }

    /**
     * Checks if the new instance is a service, and if true injects the default dependencies.
     */
    protected setupServiceInstance(instance: any): any {
        if (instance instanceof AppService && !(instance instanceof NotificationService)) {
            this.wireServiceWithDefaultDependencies(instance as AppService);
        }
        return instance;
    }

    /**
     * Inject the default dependencies into the given service
     */
    protected wireServiceWithDefaultDependencies(instance: AppService): void {
        this.notificationService.registerListener(instance);
    }
}
