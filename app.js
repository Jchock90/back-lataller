//IMPORTS
import 'dotenv/config.js'
import './config/database.js'
import __dirname from './utils.js';
import express, { response } from 'express';
import path from 'path';
import logger from 'morgan'
import indexRouter from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors'

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
//ROUTER
app.use('/api', indexRouter);
app.use(notFoundHandler);
//ERROR HANDLER
app.use(errorHandler);

export default app
