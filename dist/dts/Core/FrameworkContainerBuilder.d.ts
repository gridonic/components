import ContainerBuilder from "./ContainerBuilder";
export default class FrameworkContainerBuilder extends ContainerBuilder {
    protected buildDefault(isDebug: boolean): void;
    protected buildDev(isDebug: boolean): void;
    protected buildProd(isDebug: boolean): void;
    protected buildTest(isDebug: boolean): void;
    protected buildEnv(env: string, isDebug: boolean): void;
}
