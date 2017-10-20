import {injectable} from "inversify";
import "reflect-metadata";
import {INotifyable} from "./NotificationService";

@injectable()
export abstract class TonicService implements INotifyable {
    // noinspection JSUnusedLocalSymbols
    public onNotification(sender: {}, message: string): void {
        // override for handling notifications
    }
}
