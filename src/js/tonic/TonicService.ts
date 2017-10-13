import {INotifyable} from "./Service/NotificationService";

export  abstract class TonicService implements INotifyable {
    // noinspection JSUnusedLocalSymbols
    public onNotification(sender: any, message: string) {
        // override for handling notifications
    }
}
