import { NavigationEnd, NavigationStart } from '@angular/router';
import { BaseLogger } from './baseLogger';
import { IStyleConfig } from './config';
import { ILogger } from './Ilogger';

export class Logger extends BaseLogger implements ILogger {

  constructor(styleConfig?: IStyleConfig) {
    super(styleConfig);
  }

  public info(message: string, ...data: any[]): void {
    this.level = 'info';
    this.logToConsole(message, ...data);
  }

  public warning(message: string, ...data: any[]): void {
    this.level = 'warning';
    this.logToConsole(message);
  }

  public error(message: string, ...data: any[]): void {
    this.logToConsole(message);
  }

  public routeEvents(router: import("@angular/router").Router): void {
    router.events.subscribe( (event) => {
      if(event instanceof NavigationStart) {
        console.log('Navigation has started');
      }
      if(event instanceof NavigationEnd) {
        console.log('Navigation has end');
      }
    })
  }


}
