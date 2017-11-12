import DebuggerService from "../service/debug/DebuggerService";
import AppContainer from "./AppContainer";
import ContainerBuilder from "./ContainerBuilder";
export default abstract class AppKernel {
    private _appContainer;
    private _env;
    private _isDebug;
    constructor(env: string, isDebug?: boolean);
    readonly env: string;
    readonly isDebug: boolean;
    readonly appContainer: AppContainer;
    boot(): AppKernel;
    protected buildContainer(): void;
    protected debug(): DebuggerService;
    protected abstract createAppContainer(): AppContainer;
    protected abstract createAppContainerBuilder(): ContainerBuilder;
}
