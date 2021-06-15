import { AppError } from './errors/AppError';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import 'dotenv/config';
import './db';

import routes from "./routes";
import verifyEnvironment from './utils/verifyEnviorement';

const { PORT } = process.env;

const port = PORT || 3000;
const enviroment = verifyEnvironment();

const app = express();

app.use(express.json());
app.use(routes);

/**
 * Handler Error -
 */
app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
            details: error.details
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Server internal error - ${error.message}`
    });
});

app.listen(port, () => console.log(`Rodando server na porta ${port} Ambiente ${enviroment} `));