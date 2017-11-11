import {INotifyable} from "./NotificationService";

export default abstract class TonicService implements INotifyable {
    // noinspection JSUnusedLocalSymbols
    public onNotification(sender: {}, message: string): void {
        // override for handling notifications
    }
}
