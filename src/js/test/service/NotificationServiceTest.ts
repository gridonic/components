import {expect} from "chai";
import {suite, test} from "mocha-typescript";
import NotificationService, {INotifyable} from "../../src/service/NotificationService";

class TestNotifyable implements INotifyable {
    public sender: {};
    public message: string;

    public onNotification(sender: {}, message: string): void {
        this.sender = sender;
        this.message = message;
    }
}

@suite
class NotificationServiceTest {
    @test
    public notification_sendNotification_ListenerGetsNotified(): void {
        const notificationService = new NotificationService();

        const testNotifyable = new TestNotifyable();

        expect(testNotifyable.sender).to.be.undefined;
        expect(testNotifyable.message).to.be.undefined;

        notificationService.registerListener(testNotifyable);
        notificationService.fireNotification("sender", "event");

        expect(testNotifyable.sender).to.be.eq("sender");
        expect(testNotifyable.message).to.be.eq("event");

        notificationService.fireNotification("anotherSender", "anotherEvent");

        expect(testNotifyable.sender).to.be.eq("anotherSender");
        expect(testNotifyable.message).to.be.eq("anotherEvent");
    }

    @test
    public multipleNotifications_sendNotification_ListenerGetsNotified(): void {
        const notificationService = new NotificationService();

        const testNotifyable1 = new TestNotifyable();
        const testNotifyable2 = new TestNotifyable();

        expect(testNotifyable1.sender).to.be.undefined;
        expect(testNotifyable1.message).to.be.undefined;
        expect(testNotifyable2.sender).to.be.undefined;
        expect(testNotifyable2.message).to.be.undefined;

        notificationService.registerListener(testNotifyable1);
        notificationService.fireNotification("sender", "event");

        expect(testNotifyable1.sender).to.be.eq("sender");
        expect(testNotifyable1.message).to.be.eq("event");
        expect(testNotifyable2.sender).to.be.an("undefined");
        expect(testNotifyable2.message).to.be.an("undefined");

        notificationService.registerListener(testNotifyable2);
        notificationService.fireNotification("anotherSender", "anotherEvent");

        expect(testNotifyable1.sender).to.be.eq("anotherSender");
        expect(testNotifyable1.message).to.be.eq("anotherEvent");
        expect(testNotifyable2.sender).to.be.eq("anotherSender");
        expect(testNotifyable2.message).to.be.eq("anotherEvent");
    }
}
