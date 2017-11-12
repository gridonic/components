import ContainerBuilder from "./ContainerBuilder";
export default abstract class Container {
    private registration;
    private instances;
    build(builder: ContainerBuilder, env: string, isDebug: boolean): void;
    register(name: string, init: () => any): Container;
    get<T>(name: string): T;
    protected createInstance(init: () => any): any;
}
