import AppService from "../AppService";

/**
 * The Debugger component is a simple debugging helper. Use it for example to
 * log messages to the client which will only be printed when in debug mode.
 *
 * TODO: taken from es6, transform to pure typescript
 */
// tslint:disable
export default class DebuggerService extends AppService {
    private _enabled: boolean;

    constructor(enabled: boolean) {
        super();

        this._enabled = enabled;
    }

    /**
     * Returns true if debugging is enabled, false otherwise.
     *
     * @return {boolean}
     */
    get enabled(): boolean {
        return this._enabled || false;
    }

    /**
     * Enables or disables debugging output.
     *
     * @param {boolean} status
     */
    set enabled(status) {
        const $root = window.document.documentElement;

        this.enabled = Boolean(status);

        // Delegate status to CSS as well
        $root.classList[this.enabled ? "add" : "remove"]("debug-mode");
    }

    /**
     * Logs a message to the client.
     *
     * @param {string} message The message to log.
     * @param {number} typeId
     */
    public log(message: string, typeId: number = DebuggerService.CORE) {
        if (this.enabled === false) {
            return;
        }

        const output = [];
        const styles = [];

        // Primitive type given? Pick correct type object from types table
        const type = DebuggerService.TYPE[typeId];

        // Emoji
        output.push(`%c${type.emoji}`);
        styles.push(["margin: 0 10px 0 -1.5em"].join(";"));

        // // If there is a label given, add it
        // if (options.label) {
        //     output.push(`%c[${options.label}]`);
        //     styles.push(["margin-right: 6px", "font-weight: bold", "text-transform: uppercase"].join(";"));
        // }

        // Message
        output.push(`%c${message}`);
        styles.push(["font-weight: normal", "text-transform: none"].join(";"));

        // tslint:disable-next-line
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
// tslint:enable
