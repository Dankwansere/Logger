import { IStyleConfig } from './config';

export interface IInfo {
  date?: string;
  level: string;
  message: string;
  location?: string;
}

export class Formatter {
  public static generateSimpleMessage(info: IInfo): string {
    return info.message + '\n' + 'time: ' + Formatter.getDate();
  }

  /**
   * Builds an object with the passed paramaters
   * along with the date and location
   * @param message
   * @param level
   */
  public static generateMessageObj(message: string, level: string): IInfo {
    return {
      date: Formatter.getDate(),
      level,
      location: 'unknown',
      message,
    };
  }

  public static getStyle(styleObj: IStyleConfig): string {
    let customizedStyle: string = '';
    for (const style in styleObj) {
      if (style) {
        customizedStyle += style + ': ' + styleObj[style] + '; ';
      }
    }

    return customizedStyle;
  }

  private static getDate(): string {
    return new Date().toLocaleTimeString();
  }
}
