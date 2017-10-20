import {INotifyable} from "./NotificationService";

export  abstract class TonicService implements INotifyable {
    // noinspection JSUnusedLocalSymbols
    public onNotification(sender: any, message: string) {
        // override for handling notifications
    }
}
