import morganMiddleware from './morgan.middleware';
import { jwtStrategy } from './passport.middleware';
import { swaggerSpec } from './swagger.middleware';
import  getData   from './getData.middleware';

export { jwtStrategy, morganMiddleware, swaggerSpec, getData };
