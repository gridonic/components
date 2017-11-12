import AppService from "../AppService";
export default class DebuggerService extends AppService {
    private _enabled;
    constructor(enabled: boolean);
    enabled: boolean;
    log(message: string, typeId?: number): void;
    warn(message: string, options?: number): void;
    error(message: string, options?: number): void;
    static readonly TYPE: {
        emoji: string;
    }[];
    static readonly CORE: number;
    static readonly ERROR: number;
    static readonly WARNING: number;
}
