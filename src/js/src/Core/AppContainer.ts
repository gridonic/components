import {Container} from "inversify";
import "reflect-metadata";
import {INotificationService, NotificationService} from "../Service/NotificationService";

export class AppContainer {
    private container: Container = null;

    public build(): void {
        const container = this.getContainer();

        container
            .bind<INotificationService>("service.notification")
            .to(NotificationService);
    }

    public getNotificationService(): INotificationService {
        return this.getContainer().get<INotificationService>("service.notification");
    }

    protected getContainer(): Container {
        if (this.container === null) {
            this.container = new Container();
        }

        return this.container;
    }
}
