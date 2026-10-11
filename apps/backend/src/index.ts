import { createApp } from './app.js';
import { config } from './config/env.js';
import { connectDatabase } from './config/database.js';

async function bootstrap() {
  const app = createApp();

  // Attempt DB connection in background without blocking server startup
  connectDatabase();

  const server = app.listen(config.port, () => {
    console.log(`[LeaveCode Backend] Running in ${config.nodeEnv} mode on http://localhost:${config.port}`);
    console.log(`[LeaveCode Backend] Health check available at: http://localhost:${config.port}/api/v1/health`);
  });

  // Graceful shutdown handlers
  const handleShutdown = (signal: string) => {
    console.log(`Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
}

bootstrap().catch((err) => {
  console.error('Fatal initialization error:', err);
  process.exit(1);
});
