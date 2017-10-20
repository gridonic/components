import * as store from "store2";
import {TonicService} from "./TonicService";

/**
 * The Debugger component is a simple debugging helper. Use it for example to
 * log messages to the client which will only be printed when in debug mode.
 *
 * TODO: taken from es6, transform to pure typescript
 */
export class DebuggerService extends TonicService {
    private enabled: boolean;

    constructor() {
        super();
    }

    /**
     * Returns true if debugging is enabled, false otherwise.
     *
     * @return {boolean}
     */
    get status(): boolean {
        return this.enabled || false;
    }

    /**
     * Enables or disables debugging output.
     *
     * @param {boolean} status
     */
    set status(status) {
        const $root = window.document.documentElement;

        this.enabled = Boolean(status);

        // Delegate status to CSS as well
        $root.classList[this.enabled ? "add" : "remove"]("debug-mode");

        // If localStorage is available, write the current status into it. Note that a fake store is used if
        // it is not available
        store.set("debug", this.enabled);
    }

    /**
     * Detects from the current request url if debugging is enabled or not, if
     * there is nothing defined within the request it will check the
     * localStorage for any data.
     */
    public detect() {
        const match = window.location.href.match(/debug=(\d|true|false)/i);

        // Try to get debugging status from localStorage
        try {
            this.status = JSON.parse(store.get("debug"));
        } catch (e) {
            this.status = false;
        }

        // We have a new status, override it
        if (match) {
            const status = match[1].toLowerCase();

            this.status = status === "1" || status === "true";
        }
    }

    /**
     * Logs a message to the client.
     *
     * @param {string} message The message to log.
     * @param {object|number} options Optional options for changing the way of logging.
     */
    public log(message: string, options: any = DebuggerService.CORE) {
        if (this.status === false) {
            return;
        }

        const output = [];
        const styles = [];

        // Primitive type given? Pick correct type object from types table
        const type = (typeof options === "number" ? DebuggerService.TYPE[options] : options.type) || {};

        // Emoji
        output.push(`%c${type.emoji}`);
        styles.push(["margin: 0 10px 0 -1.5em"].join(";"));

        // If there is a label given, add it
        if (options.label) {
            output.push(`%c[${options.label}]`);
            styles.push(["margin-right: 6px", "font-weight: bold", "text-transform: uppercase"].join(";"));
        }

        // Message
        output.push(`%c${message}`);
        styles.push(["font-weight: normal", "text-transform: none"].join(";"));

        // noinspection TsLint
        console.log(output.join(""), ...styles);
    }

    /**
     * Logs a warning to the client.
     *
     * @param {string} message The message to log.
     * @param {object|number} options Optional options for changing the way of logging.
     */
    public warn(message: string, options = DebuggerService.WARNING) {
        this.log(message, options);
    }

    /**
     * Logs an error to the client.
     *
     * @param {string} message The message to log.
     * @param {object|number} options Optional options for changing the way of logging.
     */
    public error(message: string, options = DebuggerService.ERROR) {
        this.log(message, options);
    }

    static get TYPE() {
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
    }

    static get CORE() { return 0; }
    // static get COMPONENT() { return 1; }
    static get ERROR() { return 2; }
    static get WARNING() { return 3; }
    // static get SUCCESS() { return 4; }
}
