import express from 'express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
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

}

export default App;