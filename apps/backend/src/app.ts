import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env.js';
import { healthRouter } from './routes/health.js';
import { leadsRouter } from './routes/leads.js';
import { authRouter } from './routes/auth.js';
import { blogRouter } from './routes/blog.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  // Security headers
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (e.g. mobile apps or curl) or if in allowed origins
        if (!origin || config.corsOrigins.includes(origin) || config.isDevelopment) {
          callback(null, true);
        } else {
          callback(new Error('Blocked by CORS policy'));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
  );

  // Request logger
  if (config.isDevelopment) {
    app.use(morgan('dev'));
  }

  // Body parsing
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  // Root welcome ping
  app.get('/', (req, res) => {
    res.json({
      name: 'LeaveCode API',
      version: '1.0.0',
      docs: '/api/v1/health'
    });
  });

  // API Routes
  app.use('/api/v1', healthRouter);
  app.use('/api/v1/inquiries', leadsRouter);
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1', blogRouter);

  // Fallback 404 handler
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      error: `Cannot ${req.method} ${req.originalUrl}`
    });
  });

  // Global centralized error handler
  app.use(errorHandler);

  return app;
}
