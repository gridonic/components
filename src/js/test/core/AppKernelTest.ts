import {expect} from "chai";
import {suite, test} from "mocha-typescript";
import AppContainer from "../../src/core/AppContainer";
import {AppKernel} from "../../src/core/AppKernel";

class TestAppContainer extends AppContainer {
}

class TestAppKernel extends AppKernel {
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
