import {INotifyable} from "./NotificationService";

export default abstract class AppService implements INotifyable {
    public onNotification(sender: any, message: string): void {
        // override for handling notifications
    }
}
