import { Level } from "../level";
import { IInfo } from "../format";

/**
 * Transports allows different ways to display the message
 * console, file
 */
interface TransportConfig {
    format: (value: any) => string;
    level?: Level;
    template?: (info: IInfo) => string;
}