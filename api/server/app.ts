import * as express from 'express';
import * as cors from 'cors';
import router from './routes';
import { logger } from './utils/logger';
import dbConnect from './config/dbconfig';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.mountRoutes();    
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private mountRoutes(): void {
    this.app.use('/api/v1', router);
    this.app.use('*', (req, res) => {
        res.status(404).json({ message: 'If you are lost, use the docs.' });
    });
  }

}

dbConnect.on('error', logger.error.bind(console, 'MongoDB connection error:'));

export default new App().app;
