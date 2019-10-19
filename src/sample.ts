import { Logger } from './logger';
import { Formatter } from './format';
import { IStyleConfig } from './config';

const log: Logger = new Logger();

const dog = {
  bark: 'true',
  name: 'Johnny',
  // food: {
  //   type: 'dog food'
  // }
};

const test = ['Bob', 'Jack', 'Sally', 'Zero'];

log.info('Thanksgiving warning', dog);

const style: IStyleConfig = {
  background: 'blue',
  color: 'red',
  font_family: 'arial',
  font_size: '30px',
};

const style2: IStyleConfig = {};


