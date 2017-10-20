import {TonicService} from "./TonicService";

export interface INotifyable {
    onNotification(sender: any, message: string);
}

export class NotificationService extends TonicService {
    private listeners: INotifyable[];

    constructor() {
        super();

        this.listeners = [];
    }

    public fireNotification(sender: any, message: string) {
        this.listeners.forEach((listener) => {
            listener.onNotification(sender, message);
        });

        return this;
    }

    public registerListener(listener: INotifyable) {
        this.listeners.push(listener);

        return this;
    }

    public unregisterListener(listener: INotifyable) {
        const index = this.listeners.indexOf(listener, 0);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }

        return this;
    }
}
