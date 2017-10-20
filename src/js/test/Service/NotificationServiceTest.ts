import { expect } from "chai";
import { slow, suite, test, timeout } from "mocha-typescript";
import {INotifyable, NotificationService} from "../../src/Service/NotificationService";

class TestNotifyable implements INotifyable {
    public sender: any;
    public message: string;

    public onNotification(sender: any, message: string) {
        this.sender = sender;
        this.message = message;
    }
}

@suite class NotificationServiceTest {
    @test public notification_sendNotification_ListenerGetsNotified() {
        const notificationService = new NotificationService();

        const testNotifyable1 = new TestNotifyable();
        const testNotifyable2 = new TestNotifyable();

        expect(testNotifyable1.sender).to.be.an("undefined");
        expect(testNotifyable1.message).to.be.an("undefined");

        notificationService.registerListener(testNotifyable1);
        notificationService.fireNotification("sender", "event");

        expect(testNotifyable1.sender).to.be.eq("sender");
        expect(testNotifyable1.message).to.be.eq("event");

        notificationService.fireNotification("anotherSender", "anotherEvent");

        expect(testNotifyable1.sender).to.be.eq("anotherSender");
        expect(testNotifyable1.message).to.be.eq("anotherEvent");

        return this;
    }

    @test public multipleNotifications_sendNotification_ListenerGetsNotified() {
        const notificationService = new NotificationService();

        const testNotifyable1 = new TestNotifyable();
        const testNotifyable2 = new TestNotifyable();

        expect(testNotifyable1.sender).to.be.an("undefined");
        expect(testNotifyable1.message).to.be.an("undefined");
        expect(testNotifyable2.sender).to.be.an("undefined");
        expect(testNotifyable2.message).to.be.an("undefined");

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

        return this;
    }
}
