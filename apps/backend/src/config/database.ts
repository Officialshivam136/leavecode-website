import mongoose from 'mongoose';
import { config } from './env.js';

let isConnected = false;

export async function connectDatabase(): Promise<typeof mongoose | null> {
  if (isConnected) {
    return mongoose;
  }

  // Gracefully handle local dev when MongoDB server is not running
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 3000,
      autoIndex: !config.isProduction
    });

    isConnected = conn.connection.readyState === 1;
    console.log(`[Database] MongoDB connected successfully to: ${conn.connection.name}`);

    mongoose.connection.on('error', (err) => {
      console.error('[Database] MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[Database] MongoDB disconnected');
      isConnected = false;
    });

    return conn;
  } catch (error) {
    console.warn(`[Database] Warning: Could not connect to MongoDB at ${config.mongoUri}. Application will run in decoupled/degraded mode.`);
    return null;
  }
}

export function getDatabaseStatus(): 'connected' | 'disconnected' | 'connecting' {
  const state = mongoose.connection.readyState;
  switch (state) {
    case 1:
      return 'connected';
    case 2:
      return 'connecting';
    default:
      return 'disconnected';
  }
}
