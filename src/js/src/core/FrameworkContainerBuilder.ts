import DebuggerService from "../service/debug/DebuggerService";
import NotificationService from "../service/NotificationService";
import AppContainer from "./AppContainer";
import ContainerBuilder from "./ContainerBuilder";

export default class FrameworkContainerBuilder extends ContainerBuilder {
    /** @inheritDoc */
    protected buildDefault(isDebug: boolean): void {
        this.register(
            AppContainer.Key.Notification,
            () => new NotificationService())
            .register(
                AppContainer.Key.Debugger,
                () => new DebuggerService(false));
    }

    /** @inheritDoc */
    protected buildDev(isDebug: boolean): void {
        this.register(
            AppContainer.Key.Debugger,
            () => new DebuggerService(isDebug));
    }

    /** @inheritDoc */
    protected buildProd(isDebug: boolean): void {
        // no-op
    }

    /** @inheritDoc */
    protected buildTest(isDebug: boolean): void {
        // no-op
    }

    /** @inheritDoc */
    protected buildEnv(env: string, isDebug: boolean): void {
        // no-op
    }
}
