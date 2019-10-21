import {
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  RouterEvent,
  RoutesRecognized,
} from '@angular/router';
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

  /**
   * Generates a message for routing events based on the Route event type
   * @param routeEvent RouterEvent object, executed one time for any given navigation.
   */
  public static generateRouteMessage(routeEvent: RouterEvent | any): string {
    let message: string = '';
    switch (true) {
      case routeEvent instanceof NavigationStart: {
        message = `Route navigation started
        Navigating to: ${routeEvent.url}
        Navigation Trigger: ${routeEvent.navigationTrigger}
        Route ID: ${routeEvent.id} `;
        break;
      }
      case routeEvent instanceof RoutesRecognized: {
        message = 'Route recognized';
        break;
      }
      case routeEvent instanceof GuardsCheckStart: {
        message = 'Guard check start';
        break;
      }
      case routeEvent instanceof GuardsCheckEnd: {
        message = 'Guard check successful';
        break;
      }
      case routeEvent instanceof ResolveStart: {
        message = 'Resolver execution start';
        break;
      }
      case routeEvent instanceof ResolveEnd: {
        message = 'Resolver execution successful';
        break;
      }
      case routeEvent instanceof NavigationCancel: {
        message = `Navigation to ${routeEvent.url} cancelled.
        Route ID: ${routeEvent.id}
        Possible cause: This can happen when Route Guard returns a false or a redirect has been initiated.
        `;
        break;
      }
      case routeEvent instanceof NavigationEnd: {
        message = `Route navigation complete
        Navigating to: ${routeEvent.url}
        Navigation Trigger: ${routeEvent.navigationTrigger}
        Route ID: ${routeEvent.id} `;
        break;
      }
    }
    return message;
  }

  public static getStyle(styleObj: IStyleConfig): string {
    let customStyle: string = '';
    for (const style in styleObj) {
      if (style) {
        customStyle += style + ': ' + styleObj[style] + '; ';
      }
    }
    return customStyle;
  }

  /**
   * check if object has nested object properties
   * @param obj takes argument of object type
   */
  public static isObjectNested(obj: object): boolean {
    for (const val in obj) {
      if (typeof obj[val] === 'object') {
        return true;
      }
    }
    return false;
  }

  private static getDate(): string {
    return new Date().toLocaleTimeString();
  }
}
