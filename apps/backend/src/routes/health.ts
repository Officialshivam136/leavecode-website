import { Router, Request, Response } from 'express';
import { getDatabaseStatus } from '../config/database.js';
import { config } from '../config/env.js';

export const healthRouter = Router();

healthRouter.get('/health', (req: Request, res: Response) => {
  const dbStatus = getDatabaseStatus();

  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'LeaveCode API Server',
    environment: config.nodeEnv,
    database: dbStatus
  });
});
