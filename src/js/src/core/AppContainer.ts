import AppService from "../service/AppService";
import DebuggerService from "../service/Debug/DebuggerService";
import NotificationService from "../service/NotificationService";
import Container from "./Container";

export default abstract class AppContainer extends Container {

    public build(): void {
        this.register(
                "service.core.notification",
                () => new NotificationService())
            .register(
                "service.debug.debugger",
                () => new DebuggerService());
    }

    public getNotificationService(): NotificationService {
        return this.get<NotificationService>("service.core.notification");
    }

    public getDebuggerService(): DebuggerService {
        return this.get<DebuggerService>("service.debug.debugger");
    }

    protected createInstance(init: () => any): any {
        const instance = super.createInstance(init);

        if (instance instanceof AppService && !(instance instanceof NotificationService)) {
            this.getNotificationService().registerListener(instance);
        }

        return instance;
    }
}
