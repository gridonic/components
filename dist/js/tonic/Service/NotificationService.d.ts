import { TonicService } from "../TonicService";
export interface INotifyable {
    onNotification(sender: any, message: string): any;
}
export declare class NotificationService extends TonicService {
    private listeners;
    constructor();
    fireNotification(sender: any, message: string): this;
    registerListener(listener: INotifyable): this;
    unregisterListener(listener: INotifyable): this;
}
