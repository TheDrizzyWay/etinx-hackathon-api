import * as mongoose from 'mongoose';
import { databaseUrl } from './variables';

type mongooseType = typeof mongoose;

const opts = { useNewUrlParser: true, connectTimeoutMS: 10000, useFindAndModify: false, useUnifiedTopology: true };
mongoose.set('useCreateIndex', true);
mongoose.connect(databaseUrl, opts);
(<mongooseType>mongoose).Promise = global.Promise;
const dbConnect = mongoose.connection;

export default dbConnect;
