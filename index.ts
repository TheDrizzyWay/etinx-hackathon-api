import app from "./server/app";
import { appPort } from './server/config/variables';
import { logger } from './server/utils/logger';

const port = appPort || 8080;

app.listen(port, () => logger.info(`server running on port ${port}`));
