import DebuggerService from "../service/debug/DebuggerService";
import NotificationService from "../service/NotificationService";
import ContainerBuilder from "./ContainerBuilder";

export default class FrameworkContainerBuilder extends ContainerBuilder {
    protected buildDefault(isDebug: boolean): void {
        this.register(
            "service.core.notification",
            () => new NotificationService());
    }

    protected buildDev(isDebug: boolean): void {
        if (isDebug) {
            this.register(
                "service.debug.debugger",
                () => new DebuggerService());
        }
    }

    protected buildProd(isDebug: boolean): void {
        // no-op
    }

    protected buildTest(isDebug: boolean): void {
        // no-op
    }

    protected buildEnv(env: string, isDebug: boolean): void {
        // no-op
    }
}
