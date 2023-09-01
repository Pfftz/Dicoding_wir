import pkg from 'lodash';
const { chunk } = pkg;
import pino from 'pino';
const logger = pino();

const chuckedArray = chunk(['a', 'b', 'c', 'd', 'e'],2);

logger.info('chuckedArray', chuckedArray);

console.log(chuckedArray);
