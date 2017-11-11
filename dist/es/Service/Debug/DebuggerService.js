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
import * as store from "store2";
import TonicService from "../TonicService";
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
}(TonicService));
export { DebuggerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdnZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2pzL3NyYy9TZXJ2aWNlL0RlYnVnL0RlYnVnZ2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUM7QUFTM0M7SUFBcUMsbUNBQVk7SUFHN0M7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFPRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ2pDLENBQUM7YUFPRCxVQUFXLE1BQU07WUFDYixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUcvQixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7WUFJL0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQWxCQTtJQXlCTSxnQ0FBTSxHQUFiO1FBQ0ksSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFHbkUsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBTSxRQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFNLEtBQUssTUFBTSxDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBUU0sNkJBQUcsR0FBVixVQUFXLE9BQWUsRUFBRSxNQUFxQztRQUFyQyx1QkFBQSxFQUFBLFNBQWlCLGVBQWUsQ0FBQyxJQUFJO1FBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdsQixJQUFNLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBSyxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFTbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLE9BQVMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBR3ZFLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxHQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQUssTUFBTSxHQUFFO0lBQzVDLENBQUM7SUFRTSw4QkFBSSxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQWlDO1FBQWpDLHdCQUFBLEVBQUEsVUFBVSxlQUFlLENBQUMsT0FBTztRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBUU0sK0JBQUssR0FBWixVQUFhLE9BQWUsRUFBRSxPQUErQjtRQUEvQix3QkFBQSxFQUFBLFVBQVUsZUFBZSxDQUFDLEtBQUs7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsQ0FBQztvQkFDSixLQUFLLEVBQUUsSUFBSTtpQkFDZCxFQUFFO29CQUNDLEtBQUssRUFBRSxJQUFJO2lCQUNkLEVBQUU7b0JBQ0MsS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsSUFBSTtpQkFDZCxFQUFFO29CQUNDLEtBQUssRUFBRSxNQUFNO2lCQUNoQixDQUFDLENBQUM7UUFDUCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVCQUFJO2FBQWYsY0FBb0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRS9CLHNCQUFXLHdCQUFLO2FBQWhCLGNBQXFCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNoQyxzQkFBVywwQkFBTzthQUFsQixjQUF1QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFdEMsc0JBQUM7QUFBRCxDQUFDLEFBcklELENBQXFDLFlBQVksR0FxSWhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcInN0b3JlMlwiO1xuaW1wb3J0IFRvbmljU2VydmljZSBmcm9tIFwiLi4vVG9uaWNTZXJ2aWNlXCI7XG5cbi8qKlxuICogVGhlIERlYnVnZ2VyIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBkZWJ1Z2dpbmcgaGVscGVyLiBVc2UgaXQgZm9yIGV4YW1wbGUgdG9cbiAqIGxvZyBtZXNzYWdlcyB0byB0aGUgY2xpZW50IHdoaWNoIHdpbGwgb25seSBiZSBwcmludGVkIHdoZW4gaW4gZGVidWcgbW9kZS5cbiAqXG4gKiBUT0RPOiB0YWtlbiBmcm9tIGVzNiwgdHJhbnNmb3JtIHRvIHB1cmUgdHlwZXNjcmlwdFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuZXhwb3J0IGNsYXNzIERlYnVnZ2VyU2VydmljZSBleHRlbmRzIFRvbmljU2VydmljZSB7XG4gICAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgZGVidWdnaW5nIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IHN0YXR1cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlZCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIGRlYnVnZ2luZyBvdXRwdXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICAgICAqL1xuICAgIHNldCBzdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0ICRyb290ID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBCb29sZWFuKHN0YXR1cyk7XG5cbiAgICAgICAgLy8gRGVsZWdhdGUgc3RhdHVzIHRvIENTUyBhcyB3ZWxsXG4gICAgICAgICRyb290LmNsYXNzTGlzdFt0aGlzLmVuYWJsZWQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0oXCJkZWJ1Zy1tb2RlXCIpO1xuXG4gICAgICAgIC8vIElmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGUsIHdyaXRlIHRoZSBjdXJyZW50IHN0YXR1cyBpbnRvIGl0LiBOb3RlIHRoYXQgYSBmYWtlIHN0b3JlIGlzIHVzZWQgaWZcbiAgICAgICAgLy8gaXQgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICBzdG9yZS5zZXQoXCJkZWJ1Z1wiLCB0aGlzLmVuYWJsZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVjdHMgZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IHVybCBpZiBkZWJ1Z2dpbmcgaXMgZW5hYmxlZCBvciBub3QsIGlmXG4gICAgICogdGhlcmUgaXMgbm90aGluZyBkZWZpbmVkIHdpdGhpbiB0aGUgcmVxdWVzdCBpdCB3aWxsIGNoZWNrIHRoZVxuICAgICAqIGxvY2FsU3RvcmFnZSBmb3IgYW55IGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIGRldGVjdCgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvZGVidWc9KFxcZHx0cnVlfGZhbHNlKS9pKTtcblxuICAgICAgICAvLyBUcnkgdG8gZ2V0IGRlYnVnZ2luZyBzdGF0dXMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSlNPTi5wYXJzZShzdG9yZS5nZXQoXCJkZWJ1Z1wiKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBoYXZlIGEgbmV3IHN0YXR1cywgb3ZlcnJpZGUgaXRcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cyA9PT0gXCIxXCIgfHwgc3RhdHVzID09PSBcInRydWVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYSBtZXNzYWdlIHRvIHRoZSBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGVJZFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlSWQ6IG51bWJlciA9IERlYnVnZ2VyU2VydmljZS5DT1JFKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcblxuICAgICAgICAvLyBQcmltaXRpdmUgdHlwZSBnaXZlbj8gUGljayBjb3JyZWN0IHR5cGUgb2JqZWN0IGZyb20gdHlwZXMgdGFibGVcbiAgICAgICAgY29uc3QgdHlwZSA9IERlYnVnZ2VyU2VydmljZS5UWVBFW3R5cGVJZF07XG5cbiAgICAgICAgLy8gRW1vamlcbiAgICAgICAgb3V0cHV0LnB1c2goYCVjJHt0eXBlLmVtb2ppfWApO1xuICAgICAgICBzdHlsZXMucHVzaChbXCJtYXJnaW46IDAgMTBweCAwIC0xLjVlbVwiXS5qb2luKFwiO1wiKSk7XG5cbiAgICAgICAgLy8gLy8gSWYgdGhlcmUgaXMgYSBsYWJlbCBnaXZlbiwgYWRkIGl0XG4gICAgICAgIC8vIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICAgIC8vICAgICBvdXRwdXQucHVzaChgJWNbJHtvcHRpb25zLmxhYmVsfV1gKTtcbiAgICAgICAgLy8gICAgIHN0eWxlcy5wdXNoKFtcIm1hcmdpbi1yaWdodDogNnB4XCIsIFwiZm9udC13ZWlnaHQ6IGJvbGRcIiwgXCJ0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXCJdLmpvaW4oXCI7XCIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIE1lc3NhZ2VcbiAgICAgICAgb3V0cHV0LnB1c2goYCVjJHttZXNzYWdlfWApO1xuICAgICAgICBzdHlsZXMucHVzaChbXCJmb250LXdlaWdodDogbm9ybWFsXCIsIFwidGV4dC10cmFuc2Zvcm06IG5vbmVcIl0uam9pbihcIjtcIikpO1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQuam9pbihcIlwiKSwgLi4uc3R5bGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGEgd2FybmluZyB0byB0aGUgY2xpZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fG51bWJlcn0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciBjaGFuZ2luZyB0aGUgd2F5IG9mIGxvZ2dpbmcuXG4gICAgICovXG4gICAgcHVibGljIHdhcm4obWVzc2FnZTogc3RyaW5nLCBvcHRpb25zID0gRGVidWdnZXJTZXJ2aWNlLldBUk5JTkcpIHtcbiAgICAgICAgdGhpcy5sb2cobWVzc2FnZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhbiBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fG51bWJlcn0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciBjaGFuZ2luZyB0aGUgd2F5IG9mIGxvZ2dpbmcuXG4gICAgICovXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucyA9IERlYnVnZ2VyU2VydmljZS5FUlJPUikge1xuICAgICAgICB0aGlzLmxvZyhtZXNzYWdlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgZW1vamk6IFwi7aC87b2PXCIsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVtb2ppOiBcIu2gvO2+slwiLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBlbW9qaTogXCLtoL3ttKVcIixcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZW1vamk6IFwi4pqg77iPXCIsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVtb2ppOiBcIu2gve2xje2gvO2/u1wiLFxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IENPUkUoKSB7IHJldHVybiAwOyB9XG4gICAgLy8gc3RhdGljIGdldCBDT01QT05FTlQoKSB7IHJldHVybiAxOyB9XG4gICAgc3RhdGljIGdldCBFUlJPUigpIHsgcmV0dXJuIDI7IH1cbiAgICBzdGF0aWMgZ2V0IFdBUk5JTkcoKSB7IHJldHVybiAzOyB9XG4gICAgLy8gc3RhdGljIGdldCBTVUNDRVNTKCkgeyByZXR1cm4gNDsgfVxufVxuLy8gdHNsaW50OmVuYWJsZVxuIl19