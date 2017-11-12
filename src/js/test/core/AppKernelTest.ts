import {expect} from "chai";
import {suite, test} from "mocha-typescript";
import AppContainer from "../../src/core/AppContainer";
import {AppKernel} from "../../src/core/AppKernel";
import ContainerBuilder from "../../src/core/ContainerBuilder";

class TestAppContainer extends AppContainer {
}

class TestAppContainerBuilder extends ContainerBuilder {
    protected buildDefault(isDebug: boolean): void {
        // no-op
    }

    protected buildDev(isDebug: boolean): void {
        // no-op
    }

    protected buildProd(isDebug: boolean): void {
        // no-op
    }

    protected buildTest(isDebug: boolean): void {
        // no-op
    }

    protected buildEnv(env: string, isDebug: boolean): void {
        // no-op
    }
}

class TestAppKernel extends AppKernel {
    protected createAppContainerBuilder(): ContainerBuilder {
        return new TestAppContainerBuilder();
    }
    protected createAppContainer(): AppContainer {
        return new TestAppContainer();
    }
}

@suite
class AppKernelTest {
    @test
    public instanciate_DevModeAndDebug_PropertiesAreSetAndContainerIsEmpty(): void {
        const appKernel = new TestAppKernel("dev", true);

        expect(appKernel.env).to.be.eq("dev");
        expect(appKernel.isDebug).to.be.true;

        expect(appKernel.appContainer).is.undefined;
    }

    @test
    public boot_DevModeAndDebug_ContainerIsCreated(): void {
        const appKernel = new TestAppKernel("dev", true);
        appKernel.boot();

        expect(appKernel.appContainer).instanceof(TestAppContainer);
    }
}
