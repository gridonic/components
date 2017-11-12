import ContainerBuilder from "./ContainerBuilder";

export default abstract class Container {
    private registration: { [key: string]: () => any; } = {};
    private instances: { [key: string]: any; } = {};

    /**
     * Used to build the container, registering all the dependencies like services, factories, parameters, ...
     */
    public build(builder: ContainerBuilder, env: string, isDebug: boolean): void {
       builder.build(this, env, isDebug);
    }

    public register(name: string, init: () => any): Container {
        this.registration[name] = init;
        return this;
    }

    public get<T>(name: string): T {
        if (!(name in this.instances)) {
            if (!(name in this.registration)) {
                throw new Error(`Service ${name} is not registered!`);
            }
            this.instances[name] = this.createInstance(this.registration[name]);
        }

        return this.instances[name] as T;
    }

    protected createInstance(init: () => any): any {
        return init();
    }
}
