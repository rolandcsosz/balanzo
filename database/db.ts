import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionString: string = process.env.MONGODB_URI || '';

mongoose.connect(connectionString, { dbName: 'data' });

export default mongoose;
