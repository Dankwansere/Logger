import { RouterEvent } from '@angular/router';
import { IStyleConfig } from './config';
import { Formatter, IInfo } from './format';
import { Level } from './level';

export class BaseLogger {
  protected level: Level;
  private formattedMessage: string;
  private formattedMessageObj: IInfo;
  private messageStyle: string;

  constructor(customStyle: IStyleConfig = {}) {
    this.messageStyle = Formatter.getStyle(customStyle);
  }

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

  /**
   * Outputs message of router current lifecyle event
   * @param routeEvent Router events that allow you to track the lifecycle of the router.
   */
  protected routeEventsHandler(routeEvent: RouterEvent): void {
    const routerEventMessage: string = Formatter.generateRouteMessage(routeEvent);
    if (routerEventMessage) {
      this.printSimpleMessage(routerEventMessage);
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
      level,
      message,
    };
    return infoObj;
  }

  private printSimpleMessage(message: string): void {
    console.log(message);
  }

  private printComplexMessage(messageObj: IInfo, ...data: any[]) {
    console.log('%c' + messageObj.message, this.messageStyle);
    for (const val of data) {
      if (typeof val === 'object') {
        console.log('is object nested: ', Formatter.isObjectNested(val));
        // console.table(val);
      } else {
        console.log('%c' + val, this.messageStyle);
      }
    }
    console.log('%cLocation: ' + messageObj.location, this.messageStyle);
    console.log('%cLevel: ' + messageObj.level, this.messageStyle);
    console.log('%cTime: ' + messageObj.date, this.messageStyle);
  }
}
