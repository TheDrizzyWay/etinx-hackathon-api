import mongoose from 'mongoose';
import { databaseUrl } from './variables';

const opts = { useNewUrlParser: true, connectTimeoutMS: 10000, useFindAndModify: false, useUnifiedTopology: true };
mongoose.set('useCreateIndex', true);
mongoose.connect(databaseUrl, opts);
mongoose.Promise = global.Promise;
const dbConnect = mongoose.connection;

export default dbConnect;
