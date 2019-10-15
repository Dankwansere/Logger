import { IInfo } from '../format';
import { Level } from '../level';

/**
 * Transports allows different ways to display the message
 * console, file
 */
interface ITransportConfig {
  format: (value: any) => string;
  level?: Level;
  template?: (info: IInfo) => string;
}
