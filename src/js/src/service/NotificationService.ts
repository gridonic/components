import AppService from "./AppService";

export interface INotifyable {
    onNotification(sender: any, message: string): void;
}

export interface INotificationService {
    fireNotification(sender: any, message: string): INotificationService;
    registerListener(listener: INotifyable): INotificationService;
    unregisterListener(listener: INotifyable): INotificationService;
}

export default class NotificationService extends AppService implements INotificationService {
    private listeners: INotifyable[];

    constructor() {
        super();

        this.listeners = [];
    }

    public fireNotification(sender: any, message: string): NotificationService {
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
