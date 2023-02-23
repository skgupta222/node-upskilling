import express from 'express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';
import { Routes } from './interfaces/routes.interface';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`App listening on the port ${this.port}`);
        })
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }
    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
      }
}

export default App;