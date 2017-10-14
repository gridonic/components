import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from 'chai';
import {INotifyable, NotificationService} from "../../../../src/js/tonic/Service/NotificationService";

class TestNotifyable implements INotifyable {
    sender: any;
    message: string;

    onNotification(sender: any, message: string) {
        this.sender = sender;
        this.message = message;
    }
}

@suite class NotificationServiceTest {
    @test notification_sendNotification_ListenerGetsNotified() {
        const notificationService = new NotificationService();

        const testNotifyable1 = new TestNotifyable();
        const testNotifyable2 = new TestNotifyable();

        expect(testNotifyable1.sender).to.be.an('undefined');
        expect(testNotifyable1.message).to.be.an('undefined');

        notificationService.registerListener(testNotifyable1);
        notificationService.fireNotification('sender', 'event');

        expect(testNotifyable1.sender).to.be.eq('sender');
        expect(testNotifyable1.message).to.be.eq('event');

        notificationService.fireNotification('anotherSender', 'anotherEvent');

        expect(testNotifyable1.sender).to.be.eq('anotherSender');
        expect(testNotifyable1.message).to.be.eq('anotherEvent');

        return this;
    }

    @test multipleNotifications_sendNotification_ListenerGetsNotified() {
        const notificationService = new NotificationService();

        const testNotifyable1 = new TestNotifyable();
        const testNotifyable2 = new TestNotifyable();

        expect(testNotifyable1.sender).to.be.an('undefined');
        expect(testNotifyable1.message).to.be.an('undefined');
        expect(testNotifyable2.sender).to.be.an('undefined');
        expect(testNotifyable2.message).to.be.an('undefined');

        notificationService.registerListener(testNotifyable1);
        notificationService.fireNotification('sender', 'event');

        expect(testNotifyable1.sender).to.be.eq('sender');
        expect(testNotifyable1.message).to.be.eq('event');
        expect(testNotifyable2.sender).to.be.an('undefined');
        expect(testNotifyable2.message).to.be.an('undefined');

        notificationService.registerListener(testNotifyable2);
        notificationService.fireNotification('anotherSender', 'anotherEvent');

        expect(testNotifyable1.sender).to.be.eq('anotherSender');
        expect(testNotifyable1.message).to.be.eq('anotherEvent');
        expect(testNotifyable2.sender).to.be.eq('anotherSender');
        expect(testNotifyable2.message).to.be.eq('anotherEvent');

        return this;
    }
}