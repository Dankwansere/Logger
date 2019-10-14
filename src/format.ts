
export interface IInfo {
    date?: string;
    level: string;
    message: string;
    location?: string;
}


export class Formatter {

    static generateSimpleMessage(info: IInfo): string {
        return info.message + '\n' + 'time: ' + Formatter.getDate();
        
    }

    /**
     * Builds an object with the passed paramaters
     * along with the date and location
     * @param message
     * @param level
     */
    static generateMessageObj(message: string, level: string): IInfo {
        return {
            message: message,
            level: level,
            date: Formatter.getDate(),
            location: 'unknown'
        };
    }

    private static getDate(): string {
        return new Date().toLocaleTimeString();
    }

}