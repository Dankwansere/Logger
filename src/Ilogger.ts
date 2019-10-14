export interface ILogger {
    info(message: string, ...data: any[]): void;
    warning(message: string, ...data: any[]): void;
    error(message: string, ...data: any[]): void;
}