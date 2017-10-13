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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdnZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2pzL3RvbmljL1NlcnZpY2UvRGVidWdnZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhCQUFnQztBQUNoQyxnREFBNkM7QUFTN0M7SUFBcUMsbUNBQVk7SUFHN0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFPRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ2pDLENBQUM7YUFPRCxVQUFXLE1BQU07WUFDYixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUcvQixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7WUFHL0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQWpCQTtJQXdCRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFHbkUsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7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