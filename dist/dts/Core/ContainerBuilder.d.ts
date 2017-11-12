import Container from "./Container";
export default abstract class ContainerBuilder {
    private container;
    build(container: Container, env: string, isDebug: boolean): void;
    register(name: string, init: () => any): ContainerBuilder;
    protected abstract buildDefault(isDebug: boolean): void;
    protected abstract buildDev(isDebug: boolean): void;
    protected abstract buildProd(isDebug: boolean): void;
    protected abstract buildTest(isDebug: boolean): void;
    protected abstract buildEnv(env: string, isDebug: boolean): void;
}
