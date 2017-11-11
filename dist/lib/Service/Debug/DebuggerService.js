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
var store = require("store2");
var TonicService_1 = require("../TonicService");
var DebuggerService = (function (_super) {
    __extends(DebuggerService, _super);
    function DebuggerService() {
        var _this = _super.call(this) || this;
        _this.detect();
        return _this;
    }
    Object.defineProperty(DebuggerService.prototype, "status", {
        get: function () {
            return this.enabled || false;
        },
        set: function (status) {
            var $root = window.document.documentElement;
            this.enabled = Boolean(status);
            $root.classList[this.enabled ? "add" : "remove"]("debug-mode");
            store.set("debug", this.enabled);
        },
        enumerable: true,
        configurable: true
    });
    DebuggerService.prototype.detect = function () {
        var match = window.location.href.match(/debug=(\d|true|false)/i);
        try {
            this.status = JSON.parse(store.get("debug"));
        }
        catch (e) {
            this.status = false;
        }
        if (match) {
            var status_1 = match[1].toLowerCase();
            this.status = status_1 === "1" || status_1 === "true";
        }
    };
    DebuggerService.prototype.log = function (message, typeId) {
        if (typeId === void 0) { typeId = DebuggerService.CORE; }
        if (this.status === false) {
            return;
        }
        var output = [];
        var styles = [];
        var type = DebuggerService.TYPE[typeId];
        output.push("%c" + type.emoji);
        styles.push(["margin: 0 10px 0 -1.5em"].join(";"));
        output.push("%c" + message);
        styles.push(["font-weight: normal", "text-transform: none"].join(";"));
        console.log.apply(console, [output.join("")].concat(styles));
    };
    DebuggerService.prototype.warn = function (message, options) {
        if (options === void 0) { options = DebuggerService.WARNING; }
        this.log(message, options);
    };
    DebuggerService.prototype.error = function (message, options) {
        if (options === void 0) { options = DebuggerService.ERROR; }
        this.log(message, options);
    };
    Object.defineProperty(DebuggerService, "TYPE", {
        get: function () {
            return [{
                    emoji: "🍏",
                }, {
                    emoji: "🎲",
                }, {
                    emoji: "🔥",
                }, {
                    emoji: "⚠️",
                }, {
                    emoji: "👍🏻",
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebuggerService, "CORE", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebuggerService, "ERROR", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebuggerService, "WARNING", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    return DebuggerService;
}(TonicService_1.default));
exports.DebuggerService = DebuggerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdnZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2pzL3NyYy9TZXJ2aWNlL0RlYnVnL0RlYnVnZ2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4QkFBZ0M7QUFDaEMsZ0RBQTJDO0FBUzNDO0lBQXFDLG1DQUFZO0lBRzdDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUNsQixDQUFDO0lBT0Qsc0JBQUksbUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUNqQyxDQUFDO2FBT0QsVUFBVyxNQUFNO1lBQ2IsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBSS9ELEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FsQkE7SUF5Qk0sZ0NBQU0sR0FBYjtRQUNJLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBR25FLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQU0sUUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQU0sS0FBSyxHQUFHLElBQUksUUFBTSxLQUFLLE1BQU0sQ0FBQztRQUN0RCxDQUFDO0lBQ0wsQ0FBQztJQVFNLDZCQUFHLEdBQVYsVUFBVyxPQUFlLEVBQUUsTUFBcUM7UUFBckMsdUJBQUEsRUFBQSxTQUFpQixlQUFlLENBQUMsSUFBSTtRQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFHbEIsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUcxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBU25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBSyxPQUFTLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUd2RSxPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sR0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFLLE1BQU0sR0FBRTtJQUM1QyxDQUFDO0lBUU0sOEJBQUksR0FBWCxVQUFZLE9BQWUsRUFBRSxPQUFpQztRQUFqQyx3QkFBQSxFQUFBLFVBQVUsZUFBZSxDQUFDLE9BQU87UUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVFNLCtCQUFLLEdBQVosVUFBYSxPQUFlLEVBQUUsT0FBK0I7UUFBL0Isd0JBQUEsRUFBQSxVQUFVLGVBQWUsQ0FBQyxLQUFLO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLENBQUM7b0JBQ0osS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsSUFBSTtpQkFDZCxFQUFFO29CQUNDLEtBQUssRUFBRSxJQUFJO2lCQUNkLEVBQUU7b0JBQ0MsS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1QkFBSTthQUFmLGNBQW9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUUvQixzQkFBVyx3QkFBSzthQUFoQixjQUFxQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEMsc0JBQVcsMEJBQU87YUFBbEIsY0FBdUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXRDLHNCQUFDO0FBQUQsQ0FBQyxBQXJJRCxDQUFxQyxzQkFBWSxHQXFJaEQ7QUFySVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdG9yZSBmcm9tIFwic3RvcmUyXCI7XG5pbXBvcnQgVG9uaWNTZXJ2aWNlIGZyb20gXCIuLi9Ub25pY1NlcnZpY2VcIjtcblxuLyoqXG4gKiBUaGUgRGVidWdnZXIgY29tcG9uZW50IGlzIGEgc2ltcGxlIGRlYnVnZ2luZyBoZWxwZXIuIFVzZSBpdCBmb3IgZXhhbXBsZSB0b1xuICogbG9nIG1lc3NhZ2VzIHRvIHRoZSBjbGllbnQgd2hpY2ggd2lsbCBvbmx5IGJlIHByaW50ZWQgd2hlbiBpbiBkZWJ1ZyBtb2RlLlxuICpcbiAqIFRPRE86IHRha2VuIGZyb20gZXM2LCB0cmFuc2Zvcm0gdG8gcHVyZSB0eXBlc2NyaXB0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlXG5leHBvcnQgY2xhc3MgRGVidWdnZXJTZXJ2aWNlIGV4dGVuZHMgVG9uaWNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRldGVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBkZWJ1Z2dpbmcgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgc3RhdHVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVkIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgZGVidWdnaW5nIG91dHB1dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gICAgICovXG4gICAgc2V0IHN0YXR1cyhzdGF0dXMpIHtcbiAgICAgICAgY29uc3QgJHJvb3QgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IEJvb2xlYW4oc3RhdHVzKTtcblxuICAgICAgICAvLyBEZWxlZ2F0ZSBzdGF0dXMgdG8gQ1NTIGFzIHdlbGxcbiAgICAgICAgJHJvb3QuY2xhc3NMaXN0W3RoaXMuZW5hYmxlZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShcImRlYnVnLW1vZGVcIik7XG5cbiAgICAgICAgLy8gSWYgbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZSwgd3JpdGUgdGhlIGN1cnJlbnQgc3RhdHVzIGludG8gaXQuIE5vdGUgdGhhdCBhIGZha2Ugc3RvcmUgaXMgdXNlZCBpZlxuICAgICAgICAvLyBpdCBpcyBub3QgYXZhaWxhYmxlXG4gICAgICAgIHN0b3JlLnNldChcImRlYnVnXCIsIHRoaXMuZW5hYmxlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkIG9yIG5vdCwgaWZcbiAgICAgKiB0aGVyZSBpcyBub3RoaW5nIGRlZmluZWQgd2l0aGluIHRoZSByZXF1ZXN0IGl0IHdpbGwgY2hlY2sgdGhlXG4gICAgICogbG9jYWxTdG9yYWdlIGZvciBhbnkgZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGV0ZWN0KCkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9kZWJ1Zz0oXFxkfHRydWV8ZmFsc2UpL2kpO1xuXG4gICAgICAgIC8vIFRyeSB0byBnZXQgZGVidWdnaW5nIHN0YXR1cyBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBKU09OLnBhcnNlKHN0b3JlLmdldChcImRlYnVnXCIpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSBuZXcgc3RhdHVzLCBvdmVycmlkZSBpdFxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzID09PSBcIjFcIiB8fCBzdGF0dXMgPT09IFwidHJ1ZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhIG1lc3NhZ2UgdG8gdGhlIGNsaWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZUlkXG4gICAgICovXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBzdHJpbmcsIHR5cGVJZDogbnVtYmVyID0gRGVidWdnZXJTZXJ2aWNlLkNPUkUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuXG4gICAgICAgIC8vIFByaW1pdGl2ZSB0eXBlIGdpdmVuPyBQaWNrIGNvcnJlY3QgdHlwZSBvYmplY3QgZnJvbSB0eXBlcyB0YWJsZVxuICAgICAgICBjb25zdCB0eXBlID0gRGVidWdnZXJTZXJ2aWNlLlRZUEVbdHlwZUlkXTtcblxuICAgICAgICAvLyBFbW9qaVxuICAgICAgICBvdXRwdXQucHVzaChgJWMke3R5cGUuZW1vaml9YCk7XG4gICAgICAgIHN0eWxlcy5wdXNoKFtcIm1hcmdpbjogMCAxMHB4IDAgLTEuNWVtXCJdLmpvaW4oXCI7XCIpKTtcblxuICAgICAgICAvLyAvLyBJZiB0aGVyZSBpcyBhIGxhYmVsIGdpdmVuLCBhZGQgaXRcbiAgICAgICAgLy8gaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgLy8gICAgIG91dHB1dC5wdXNoKGAlY1ske29wdGlvbnMubGFiZWx9XWApO1xuICAgICAgICAvLyAgICAgc3R5bGVzLnB1c2goW1wibWFyZ2luLXJpZ2h0OiA2cHhcIiwgXCJmb250LXdlaWdodDogYm9sZFwiLCBcInRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcIl0uam9pbihcIjtcIikpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gTWVzc2FnZVxuICAgICAgICBvdXRwdXQucHVzaChgJWMke21lc3NhZ2V9YCk7XG4gICAgICAgIHN0eWxlcy5wdXNoKFtcImZvbnQtd2VpZ2h0OiBub3JtYWxcIiwgXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZVwiXS5qb2luKFwiO1wiKSk7XG5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUubG9nKG91dHB1dC5qb2luKFwiXCIpLCAuLi5zdHlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYSB3YXJuaW5nIHRvIHRoZSBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gICAgICogQHBhcmFtIHtvYmplY3R8bnVtYmVyfSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgZm9yIGNoYW5naW5nIHRoZSB3YXkgb2YgbG9nZ2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnMgPSBEZWJ1Z2dlclNlcnZpY2UuV0FSTklORykge1xuICAgICAgICB0aGlzLmxvZyhtZXNzYWdlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGFuIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gICAgICogQHBhcmFtIHtvYmplY3R8bnVtYmVyfSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgZm9yIGNoYW5naW5nIHRoZSB3YXkgb2YgbG9nZ2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zID0gRGVidWdnZXJTZXJ2aWNlLkVSUk9SKSB7XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBlbW9qaTogXCLtoLztvY9cIixcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZW1vamk6IFwi7aC87b6yXCIsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVtb2ppOiBcIu2gve20pVwiLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBlbW9qaTogXCLimqDvuI9cIixcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZW1vamk6IFwi7aC97bGN7aC87b+7XCIsXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQ09SRSgpIHsgcmV0dXJuIDA7IH1cbiAgICAvLyBzdGF0aWMgZ2V0IENPTVBPTkVOVCgpIHsgcmV0dXJuIDE7IH1cbiAgICBzdGF0aWMgZ2V0IEVSUk9SKCkgeyByZXR1cm4gMjsgfVxuICAgIHN0YXRpYyBnZXQgV0FSTklORygpIHsgcmV0dXJuIDM7IH1cbiAgICAvLyBzdGF0aWMgZ2V0IFNVQ0NFU1MoKSB7IHJldHVybiA0OyB9XG59XG4vLyB0c2xpbnQ6ZW5hYmxlXG4iXX0=