import { Logger } from './logger';

const log: Logger = new Logger();

const dog = {
  bark: 'true',
  name: 'Johnny',
};

const test = ['Bob', 'Jack', 'Sally', 'Zero'];

log.info('Thanksgiving warning', dog, test);
