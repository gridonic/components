import DebuggerService from "../service/debug/DebuggerService";
import AppContainer from "./AppContainer";

export abstract class AppKernel {
    private _appContainer: AppContainer;

    private _env: string;
    private _isDebug: boolean;

    constructor(env: string, isDebug: boolean) {
        this._env = env;
        this._isDebug = isDebug;
    }

    public boot(): AppKernel {
        this._appContainer = this.createAppContainer();
        this._appContainer.build();

        this.debug().log("App booted!");

        return this;
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

    protected debug(): DebuggerService {
        return this._appContainer.getDebuggerService();
    }

    protected abstract createAppContainer(): AppContainer;
}
