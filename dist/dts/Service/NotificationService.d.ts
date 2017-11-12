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
    private listeners;
    constructor();
    fireNotification(sender: any, message: string): NotificationService;
    registerListener(listener: INotifyable): NotificationService;
    unregisterListener(listener: INotifyable): NotificationService;
}
