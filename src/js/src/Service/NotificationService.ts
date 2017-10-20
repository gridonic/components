import {injectable} from "inversify";
import {TonicService} from "./TonicService";

export interface INotifyable {
    onNotification(sender: {}, message: string): void;
}

export interface INotificationService {
    fireNotification(sender: {}, message: string): INotificationService;
    registerListener(listener: INotifyable): INotificationService;
    unregisterListener(listener: INotifyable): INotificationService;
}

@injectable()
export class NotificationService extends TonicService implements INotificationService {
    private listeners: INotifyable[];

    constructor() {
        super();

        this.listeners = [];
    }

    public gak(): string {
        return "gak";
    }

    public fireNotification(sender: {}, message: string): NotificationService {
        this.listeners.forEach((listener) => {
            listener.onNotification(sender, message);
        });

        return this;
    }

    public registerListener(listener: INotifyable): NotificationService {
        this.listeners.push(listener);

        return this;
    }

    public unregisterListener(listener: INotifyable): NotificationService {
        const index = this.listeners.indexOf(listener, 0);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }

        return this;
    }
}
