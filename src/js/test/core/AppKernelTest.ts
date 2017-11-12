import {expect} from "chai";
import {suite, test} from "mocha-typescript";
import AppContainer from "../../src/core/AppContainer";
import {AppKernel} from "../../src/core/AppKernel";
import ContainerBuilder from "../../src/core/ContainerBuilder";
import {Environment} from "../../src/model/Environment";
import AppService from "../../src/service/AppService";

class TestService extends AppService {
    private _id: string;

    constructor(id: string) {
        super();
        this._id = id;
    }

    get id(): string {
        return this._id;
    }
}

class TestAppContainer extends AppContainer {
}

class TestAppContainerBuilder extends ContainerBuilder {
    protected buildDefault(isDebug: boolean): void {
        this.register("service.test", () => new TestService("default"));
        this.register("parameter.some_number", () => 111);
        this.register("parameter.some_string", () => "default string");
    }

    protected buildDev(isDebug: boolean): void {
        if (isDebug) {
            this.register("parameter.some_number", () => 333);
        }
        this.register("parameter.some_string", () => "dev string");
    }

    protected buildProd(isDebug: boolean): void {
        this.register("parameter.some_number", () => 555);
        this.register("parameter.some_string", () => "prod string");
    }

    protected buildTest(isDebug: boolean): void {
        this.register("service.test", () => new TestService("test override"));
        this.register("parameter.some_string", () => "test string");
    }

    protected buildEnv(env: string, isDebug: boolean): void {
        if (env === "stage") {
            this.register("parameter.some_number", () => 999);
            this.register("parameter.some_string", () => "stage string");
        }
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
    public instanciate_DevAndDebug_PropertiesAreSetAndContainerIsEmpty(): void {
        const appKernel = new TestAppKernel(Environment.Dev, true);

        expect(appKernel.env).to.be.eq("dev");
        expect(appKernel.isDebug).to.be.true;

        expect(appKernel.appContainer).is.undefined;
    }

    @test
    public boot_DevAndDebug_ContainerIsCreated(): void {
        const appKernel = new TestAppKernel(Environment.Dev, true);
        appKernel.boot();

        expect(appKernel.appContainer).instanceof(TestAppContainer);
    }

    @test
    public boot_DevAndDebug_DefaultServicesAreCreated(): void {
        const appKernel = new TestAppKernel(Environment.Dev, true);
        appKernel.boot();

        expect(appKernel.appContainer.notificationService).is.not.null;
        expect(appKernel.appContainer.debuggerService).is.not.null;
    }

    @test
    public boot_DevAndDebug_DebugServiceEnabled(): void {
        const appKernel = new TestAppKernel(Environment.Dev, true);
        appKernel.boot();

        expect(appKernel.appContainer.debuggerService.enabled).is.true;
    }

    @test
    public boot_DevWithoutDebug_DebugServiceDisabled(): void {
        const appKernel = new TestAppKernel(Environment.Dev, false);
        appKernel.boot();

        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }

    @test
    public boot_Prod_DebugServiceDisabled(): void {
        const appKernel = new TestAppKernel(Environment.Prod);
        appKernel.boot();

        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }

    @test
    public container_DevAndDebug_CheckCorrectState(): void {
        const appKernel = new TestAppKernel(Environment.Dev, true);
        appKernel.boot();

        expect(appKernel.appContainer.get<TestService>("service.test").id).is.eq("default");
        expect(appKernel.appContainer.get<number>("parameter.some_number")).is.eq(333);
        expect(appKernel.appContainer.get<string>("parameter.some_string")).is.eq("dev string");
        expect(appKernel.appContainer.debuggerService.enabled).is.true;
    }

    @test
    public container_Dev_CheckCorrectState(): void {
        const appKernel = new TestAppKernel(Environment.Dev);
        appKernel.boot();

        expect(appKernel.appContainer.get<TestService>("service.test").id).is.eq("default");
        expect(appKernel.appContainer.get<number>("parameter.some_number")).is.eq(111);
        expect(appKernel.appContainer.get<string>("parameter.some_string")).is.eq("dev string");
        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }

    @test
    public container_Prod_CheckCorrectState(): void {
        const appKernel = new TestAppKernel(Environment.Prod);
        appKernel.boot();

        expect(appKernel.appContainer.get<TestService>("service.test").id).is.eq("default");
        expect(appKernel.appContainer.get<number>("parameter.some_number")).is.eq(555);
        expect(appKernel.appContainer.get<string>("parameter.some_string")).is.eq("prod string");
        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }

    @test
    public container_Test_CheckCorrectState(): void {
        const appKernel = new TestAppKernel(Environment.Test);
        appKernel.boot();

        expect(appKernel.appContainer.get<TestService>("service.test").id).is.eq("test override");
        expect(appKernel.appContainer.get<number>("parameter.some_number")).is.eq(111);
        expect(appKernel.appContainer.get<string>("parameter.some_string")).is.eq("test string");
        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }

    @test
    public container_CustomEnvStage_CheckCorrectState(): void {
        const appKernel = new TestAppKernel("stage");
        appKernel.boot();

        expect(appKernel.appContainer.get<TestService>("service.test").id).is.eq("default");
        expect(appKernel.appContainer.get<number>("parameter.some_number")).is.eq(999);
        expect(appKernel.appContainer.get<string>("parameter.some_string")).is.eq("stage string");
        expect(appKernel.appContainer.debuggerService.enabled).is.false;
    }
}
