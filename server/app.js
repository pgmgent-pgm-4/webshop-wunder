import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
//import helmet from 'helmet';
import path from 'path';
//import nunjucks from 'nunjucks';
//import swaggerUi from 'swagger-ui-express';

/*
Custom modules
*/
import { EnvironmentVariables } from './config';
//import { morganMiddleware, swaggerSpec } from './middleware';
//import apiRoutes from './api/routes';

/*
Database
*/
import database from './database';

database.connect();