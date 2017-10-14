import { INotifyable } from "./Service/NotificationService";
export declare abstract class TonicService implements INotifyable {
    onNotification(sender: any, message: string): void;
    test(xxx: any): void;
}
