import DebuggerService from "../service/debug/DebuggerService";
import AppContainer from "./AppContainer";
import ContainerBuilder from "./ContainerBuilder";
import FrameworkContainerBuilder from "./FrameworkContainerBuilder";

export abstract class AppKernel {
    private _appContainer: AppContainer;

    private _env: string;
    private _isDebug: boolean;

    constructor(env: string, isDebug: boolean = false) {
        this._env = env;
        this._isDebug = isDebug;
    }

    get env(): string {
        return this._env;
    }

    get isDebug(): boolean {
        return this._isDebug;
    }

    get appContainer(): AppContainer {
        return this._appContainer;
    }

    public boot(): AppKernel {
        this._appContainer = this.createAppContainer();
        this.buildContainer();

        this.debug().log("App booted!");

        return this;
    }

    protected buildContainer(): void {
        const frameworkContainerBuilder = new FrameworkContainerBuilder();
        const appContainerBuilder = this.createAppContainerBuilder();

        this.appContainer.build(frameworkContainerBuilder, this.env, this.isDebug);
        this.appContainer.build(appContainerBuilder, this.env, this.isDebug);
    }

    protected debug(): DebuggerService {
        return this._appContainer.debuggerService;
    }

    protected abstract createAppContainer(): AppContainer;
    protected abstract createAppContainerBuilder(): ContainerBuilder;
}
