import {DebuggerService} from "../Service/Debug/DebuggerService";
import {AppContainer} from "./AppContainer";

export abstract class AppKernel {
    private appContainer: AppContainer;

    public init(): AppKernel {
        this.appContainer.build();

        this.getDebuggerService().log("Initialize app...");
        this.getDebuggerService().log("Register services...");

        this.getDebuggerService().log("Initialization complete!");

        return this;
    }

    protected getDebuggerService(): DebuggerService {
        return this.appContainer.getDebuggerService();
    }
}
