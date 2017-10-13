"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TonicService_1 = require("../TonicService");
var NotificationService = (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService() {
        var _this = _super.call(this) || this;
        _this.listeners = [];
        return _this;
    }
    NotificationService.prototype.fireNotification = function (sender, message) {
        this.listeners.forEach(function (listener) {
            listener.onNotification(sender, message);
        });
        return this;
    };
    NotificationService.prototype.registerListener = function (listener) {
        this.listeners.push(listener);
        return this;
    };
    NotificationService.prototype.unregisterListener = function (listener) {
        var index = this.listeners.indexOf(listener, 0);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
        return this;
    };
    return NotificationService;
}(TonicService_1.TonicService));
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9qcy90b25pYy9TZXJ2aWNlL05vdGlmaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTZDO0FBTTdDO0lBQXlDLHVDQUFZO0lBR2pEO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBVyxFQUFFLE9BQWU7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLFFBQXFCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdEQUFrQixHQUFsQixVQUFtQixRQUFxQjtRQUNwQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBL0JELENBQXlDLDJCQUFZLEdBK0JwRDtBQS9CWSxrREFBbUIifQ==