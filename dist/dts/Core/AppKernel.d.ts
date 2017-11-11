import { DebuggerService } from "../Service/Debug/DebuggerService";
export declare abstract class AppKernel {
    private appContainer;
    init(): AppKernel;
    protected getDebuggerService(): DebuggerService;
}
