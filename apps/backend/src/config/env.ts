import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend directory or project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface Config {
  nodeEnv: string;
  port: number;
  corsOrigins: string[];
  mongoUri: string;
  isProduction: boolean;
  isDevelopment: boolean;
}

const nodeEnv = process.env.NODE_ENV || 'development';

export const config: Config = {
  nodeEnv,
  port: parseInt(process.env.PORT || '5000', 10),
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:3000,http://127.0.0.1:3000')
    .split(',')
    .map((origin) => origin.trim()),
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/leavecode_dev',
  isProduction: nodeEnv === 'production',
  isDevelopment: nodeEnv === 'development'
};
