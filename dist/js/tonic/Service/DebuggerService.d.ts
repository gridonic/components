import { TonicService } from "../TonicService";
export declare class DebuggerService extends TonicService {
    private enabled;
    constructor();
    status: boolean;
    detect(): void;
    log(message: string, options?: any): void;
    warn(message: string, options?: number): void;
    error(message: string, options?: number): void;
    static readonly TYPE: {
        emoji: string;
    }[];
    static readonly CORE: number;
    static readonly ERROR: number;
    static readonly WARNING: number;
}
