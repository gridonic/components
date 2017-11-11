import { INotifyable } from "./NotificationService";
export default abstract class TonicService implements INotifyable {
    onNotification(sender: {}, message: string): void;
}
