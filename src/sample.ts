import { Logger } from "./logger";

let log: Logger = new Logger();


const dog = {
    bark: 'true',
    name: 'Johnny'
};

const test = ['Bob', 'Jack', 'Sally', 'Zero']

log.info('Thanksgiving warning', dog, test);
