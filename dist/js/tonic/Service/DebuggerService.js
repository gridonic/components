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
        return _super.call(this) || this;
    }
    Object.defineProperty(DebuggerService.prototype, "status", {
        get: function () {
            return this.enabled || false;
        },
        set: function (status) {
            var $root = window.document.documentElement;
            this.enabled = Boolean(status);
            $root.classList[this.enabled ? 'add' : 'remove']('debug-mode');
            store.set('debug', this.enabled);
        },
        enumerable: true,
        configurable: true
    });
    DebuggerService.prototype.detect = function () {
        var match = window.location.href.match(/debug=(\d|true|false)/i);
        try {
            this.status = JSON.parse(store.get('debug'));
        }
        catch (e) {
            this.status = false;
        }
        if (match) {
            var status_1 = match[1].toLowerCase();
            this.status = status_1 === '1' || status_1 === 'true';
        }
    };
    DebuggerService.prototype.log = function (message, options) {
        if (options === void 0) { options = DebuggerService.CORE; }
        if (this.status === false) {
            return;
        }
        var output = [];
        var styles = [];
        var type = (typeof options === 'number' ? DebuggerService.TYPE[options] : options.type) || {};
        output.push("%c" + type.emoji);
        styles.push(['margin: 0 10px 0 -1.5em'].join(';'));
        if (options.label) {
            output.push("%c[" + options.label + "]");
            styles.push(['margin-right: 6px', 'font-weight: bold', 'text-transform: uppercase'].join(';'));
        }
        output.push("%c" + message);
        styles.push(['font-weight: normal', 'text-transform: none'].join(';'));
        console.log.apply(console, [output.join('')].concat(styles));
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
                    emoji: '🍏'
                }, {
                    emoji: '🎲'
                }, {
                    emoji: '🔥'
                }, {
                    emoji: '⚠️'
                }, {
                    emoji: '👍🏻'
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
}(TonicService_1.TonicService));
exports.DebuggerService = DebuggerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdnZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2pzL3RvbmljL1NlcnZpY2UvRGVidWdnZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhCQUFnQztBQUNoQyxnREFBNkM7QUFTN0M7SUFBcUMsbUNBQVk7SUFHN0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFPRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ2pDLENBQUM7YUFPRCxVQUFXLE1BQU07WUFDYixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUcvQixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7WUFHL0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQWpCQTtJQXdCRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFHbkUsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUV0QyxzQkFBQztBQUFELENBQUMsQUFqSUQsQ0FBcUMsMkJBQVksR0FpSWhEO0FBaklZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcInN0b3JlMlwiO1xuaW1wb3J0IHtUb25pY1NlcnZpY2V9IGZyb20gXCIuLi9Ub25pY1NlcnZpY2VcIjtcblxuXG4vKipcbiAqIFRoZSBEZWJ1Z2dlciBjb21wb25lbnQgaXMgYSBzaW1wbGUgZGVidWdnaW5nIGhlbHBlci4gVXNlIGl0IGZvciBleGFtcGxlIHRvXG4gKiBsb2cgbWVzc2FnZXMgdG8gdGhlIGNsaWVudCB3aGljaCB3aWxsIG9ubHkgYmUgcHJpbnRlZCB3aGVuIGluIGRlYnVnIG1vZGUuXG4gKlxuICogVE9ETzogdGFrZW4gZnJvbSBlczYsIHRyYW5zZm9ybSB0byBwdXJlIHR5cGVzY3JpcHRcbiAqL1xuZXhwb3J0IGNsYXNzIERlYnVnZ2VyU2VydmljZSBleHRlbmRzIFRvbmljU2VydmljZSB7XG4gICAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzdGF0dXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuYWJsZWQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvciBkaXNhYmxlcyBkZWJ1Z2dpbmcgb3V0cHV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAgICAgKi9cbiAgICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgICAgICBjb25zdCAkcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5lbmFibGVkID0gQm9vbGVhbihzdGF0dXMpO1xuXG4gICAgICAgIC8vIERlbGVnYXRlIHN0YXR1cyB0byBDU1MgYXMgd2VsbFxuICAgICAgICAkcm9vdC5jbGFzc0xpc3RbdGhpcy5lbmFibGVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2RlYnVnLW1vZGUnKTtcblxuICAgICAgICAvLyBJZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlLCB3cml0ZSB0aGUgY3VycmVudCBzdGF0dXMgaW50byBpdC4gTm90ZSB0aGF0IGEgZmFrZSBzdG9yZSBpcyB1c2VkIGlmIGl0IGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgc3RvcmUuc2V0KCdkZWJ1ZycsIHRoaXMuZW5hYmxlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkIG9yIG5vdCwgaWZcbiAgICAgKiB0aGVyZSBpcyBub3RoaW5nIGRlZmluZWQgd2l0aGluIHRoZSByZXF1ZXN0IGl0IHdpbGwgY2hlY2sgdGhlXG4gICAgICogbG9jYWxTdG9yYWdlIGZvciBhbnkgZGF0YS5cbiAgICAgKi9cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL2RlYnVnPShcXGR8dHJ1ZXxmYWxzZSkvaSk7XG5cbiAgICAgICAgLy8gVHJ5IHRvIGdldCBkZWJ1Z2dpbmcgc3RhdHVzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEpTT04ucGFyc2Uoc3RvcmUuZ2V0KCdkZWJ1ZycpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSBuZXcgc3RhdHVzLCBvdmVycmlkZSBpdFxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzID09PSAnMScgfHwgc3RhdHVzID09PSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGEgbWVzc2FnZSB0byB0aGUgY2xpZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fG51bWJlcn0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciBjaGFuZ2luZyB0aGUgd2F5IG9mIGxvZ2dpbmcuXG4gICAgICovXG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczphbnkgPSBEZWJ1Z2dlclNlcnZpY2UuQ09SRSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG5cbiAgICAgICAgLy8gUHJpbWl0aXZlIHR5cGUgZ2l2ZW4/IFBpY2sgY29ycmVjdCB0eXBlIG9iamVjdCBmcm9tIHR5cGVzIHRhYmxlXG4gICAgICAgIGNvbnN0IHR5cGUgPSAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInID8gRGVidWdnZXJTZXJ2aWNlLlRZUEVbb3B0aW9uc10gOiBvcHRpb25zLnR5cGUpIHx8IHt9O1xuXG4gICAgICAgIC8vIEVtb2ppXG4gICAgICAgIG91dHB1dC5wdXNoKGAlYyR7dHlwZS5lbW9qaX1gKTtcbiAgICAgICAgc3R5bGVzLnB1c2goWydtYXJnaW46IDAgMTBweCAwIC0xLjVlbSddLmpvaW4oJzsnKSk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBsYWJlbCBnaXZlbiwgYWRkIGl0XG4gICAgICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChgJWNbJHtvcHRpb25zLmxhYmVsfV1gKTtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKFsnbWFyZ2luLXJpZ2h0OiA2cHgnLCAnZm9udC13ZWlnaHQ6IGJvbGQnLCAndGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSddLmpvaW4oJzsnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZXNzYWdlXG4gICAgICAgIG91dHB1dC5wdXNoKGAlYyR7bWVzc2FnZX1gKTtcbiAgICAgICAgc3R5bGVzLnB1c2goWydmb250LXdlaWdodDogbm9ybWFsJywgJ3RleHQtdHJhbnNmb3JtOiBub25lJ10uam9pbignOycpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQuam9pbignJyksIC4uLnN0eWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhIHdhcm5pbmcgdG8gdGhlIGNsaWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAgICAgKiBAcGFyYW0ge29iamVjdHxudW1iZXJ9IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBmb3IgY2hhbmdpbmcgdGhlIHdheSBvZiBsb2dnaW5nLlxuICAgICAqL1xuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nLCBvcHRpb25zID0gRGVidWdnZXJTZXJ2aWNlLldBUk5JTkcpIHtcbiAgICAgICAgdGhpcy5sb2cobWVzc2FnZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhbiBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fG51bWJlcn0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciBjaGFuZ2luZyB0aGUgd2F5IG9mIGxvZ2dpbmcuXG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zID0gRGVidWdnZXJTZXJ2aWNlLkVSUk9SKSB7XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBlbW9qaTogJ+2gvO29jydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZW1vamk6ICftoLztvrInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVtb2ppOiAn7aC97bSlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBlbW9qaTogJ+KaoO+4jydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZW1vamk6ICftoL3tsY3toLztv7snXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQ09SRSgpIHsgcmV0dXJuIDA7IH1cbiAgICAvLyBzdGF0aWMgZ2V0IENPTVBPTkVOVCgpIHsgcmV0dXJuIDE7IH1cbiAgICBzdGF0aWMgZ2V0IEVSUk9SKCkgeyByZXR1cm4gMjsgfVxuICAgIHN0YXRpYyBnZXQgV0FSTklORygpIHsgcmV0dXJuIDM7IH1cbiAgICAvLyBzdGF0aWMgZ2V0IFNVQ0NFU1MoKSB7IHJldHVybiA0OyB9XG59Il19