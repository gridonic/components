import {Environment} from "../model/Environment";
import Container from "./Container";

export default abstract class ContainerBuilder {
    private container: Container;

    /**
     * Used to build the container, registering all the dependencies like services, factories, parameters, ...
     *
     * NOTE: Do not override this method directly,
     * use the dedicated protected methods like {@see buildDefault} or {@see buildDev}
     */
    public build(container: Container, env: string, isDebug: boolean): void {
        this.container = container;

        this.buildDefault(isDebug);

        if (env === Environment.Dev) {
            this.buildDev(isDebug);
            return;
        }

        if (env === Environment.Prod) {
            this.buildProd(isDebug);
            return;
        }

        if (env === Environment.Test) {
            this.buildTest(isDebug);
            return;
        }

        this.buildEnv(env, isDebug);
    }

    /**
     * Registers the given item in the container.
     */
    public register(name: string, init: () => any): ContainerBuilder {
        this.container.register(name, init);
        return this;
    }

    /**
     * This build method will always be called, no matter what the environment is.
     * Override it to register the services that will always be used
     */
    protected abstract buildDefault(isDebug: boolean): void;

    /**
     * This build method is called when the "dev" environment is {@see Environment.Dev}
     */
    protected abstract buildDev(isDebug: boolean): void;

    /**
     * This build method is called when the "prod" environment is {@see Environment.Prod}
     */
    protected abstract buildProd(isDebug: boolean): void;

    /**
     * This build method is called when the "test" environment is {@see Environment.Test}
     */
    protected abstract buildTest(isDebug: boolean): void;

    /**
     * This build method is called when a custom environment is set.
     */
    protected abstract buildEnv(env: string, isDebug: boolean): void;
}
