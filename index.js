import express from 'express';
import cors from 'cors';
import router from './server/routes';
import dbConnect from './server/config/dbconfig';
import { appPort } from './server/config/variables';
import { logger } from './server/utils/logger';

const app = express();
const port = appPort || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', router);

dbConnect.on('error', logger.error.bind(console, 'MongoDB connection error:'));

app.use('*', (req, res) => {
  res.status(404).json({ message: 'If you are lost, use the docs.' });
});

app.listen(port, () => logger.info(`server running on port ${port}`));
