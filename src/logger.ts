import { BaseLogger } from './baseLogger';
import { ILogger } from './Ilogger';
import { IStyleConfig } from './config';

export class Logger extends BaseLogger implements ILogger {
  constructor(styleConfig?: IStyleConfig) {
    super();
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
}
