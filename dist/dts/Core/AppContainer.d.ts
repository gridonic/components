import AppService from "../service/AppService";
import DebuggerService from "../service/Debug/DebuggerService";
import NotificationService from "../service/NotificationService";
import Container from "./Container";
export default abstract class AppContainer extends Container {
    static readonly Key: {
        Debugger: string;
        Notification: string;
    };
    readonly notificationService: NotificationService;
    readonly debuggerService: DebuggerService;
    protected createInstance(init: () => any): any;
    protected setupServiceInstance(instance: any): any;
    protected wireServiceWithDefaultDependencies(instance: AppService): void;
}
