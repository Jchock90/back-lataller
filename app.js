// app.js

import 'dotenv/config.js';
import './config/database.js';
import __dirname from './utils.js';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors';
/* import { createPreference } from './controllers/payment.js'; // Importa la función del controlador
 */
let app = express();


import { MercadoPagoConfig, Preference } from 'mercadopago';


const client = new MercadoPagoConfig({ 
  accessToken: 'TEST-2796942292569927-120110-eee04a94ae08c915542624ba7fc7930c-1574144320'
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
app.use('/api', indexRouter);

// RUTA PARA CREAR PREFERENCIA
app.post('/api/create-preference', async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://www.youtube.com",
                failure: "https://www.youtube.com",
                pending: "https://www.youtube.com",
            },
            auto_return: "approved",
        };
        
        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});


app.use(notFoundHandler);
// ERROR HANDLER
app.use(errorHandler);



export default app;
