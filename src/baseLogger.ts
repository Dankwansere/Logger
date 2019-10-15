import { Formatter, IInfo } from './format';
import { Level } from './level';

export class BaseLogger {
  protected level: Level;
  private formattedMessage: string;
  private formattedMessageObj: IInfo;

  protected logToConsole(message: string, ...data: any[]): void {
    switch (this.level) {
      case 'info': {
        this.processMessage(message, this.level, ...data);
        break;
      }
      case 'error': {
        this.processMessage(message, this.level, ...data);
        break;
      }
    }

    if (data.length > 0) {
      this.printComplexMessage(this.formattedMessageObj, ...data);
    } else {
      this.printSimpleMessage(this.formattedMessage);
    }
  }

  private processMessage(message: string, level: string, ...data: any[]): void {
    if (data.length > 0) {
      this.formattedMessageObj = Formatter.generateMessageObj(message, level);
    }
    this.formattedMessage = Formatter.generateSimpleMessage(this.createObject(this.level, message));
  }

  private createObject(level: string, message: string): IInfo {
    const infoObj: IInfo = {
      message,
      level,
    };
    return infoObj;
  }

  private printSimpleMessage(message: string): void {
    console.log(message);
  }

  private printComplexMessage(messageObj: IInfo, ...data: any[]) {
    console.log(messageObj.message);
    for (let val of data) {
      if (typeof val === 'object') {
        console.table(val);
      } else {
        console.log(val);
      }
    }
    console.log('%cLocation: ', 'background:blue; color: white');
    console.log('Level: ', messageObj.level);
    console.log('Time: ', messageObj.date);
  }
}
