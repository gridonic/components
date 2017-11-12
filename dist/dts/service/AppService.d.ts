import { INotifyable } from "./NotificationService";
export default abstract class AppService implements INotifyable {
    onNotification(sender: any, message: string): void;
}
