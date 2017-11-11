import TonicService from "./TonicService";
export interface INotifyable {
    onNotification(sender: {}, message: string): void;
}
export interface INotificationService {
    fireNotification(sender: {}, message: string): INotificationService;
    registerListener(listener: INotifyable): INotificationService;
    unregisterListener(listener: INotifyable): INotificationService;
}
export declare class NotificationService extends TonicService implements INotificationService {
    private listeners;
    constructor();
    fireNotification(sender: {}, message: string): NotificationService;
    registerListener(listener: INotifyable): NotificationService;
    unregisterListener(listener: INotifyable): NotificationService;
}
