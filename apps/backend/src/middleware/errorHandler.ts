import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { config } from '../config/env.js';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export function errorHandler(
  err: Error | AppError | ZodError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  // Handle Zod validation errors (check instance and name for monorepo robustness)
  if (err instanceof ZodError || err.name === 'ZodError' || 'issues' in err) {
    const zodIssues = (err as ZodError).issues || (err as ZodError).errors || [];
    res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: zodIssues.map((e) => ({
        field: e.path.join('.'),
        message: e.message
      }))
    });
    return;
  }

  // Handle known operational AppErrors
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.message
    });
    return;
  }

  // Log unhandled unexpected errors
  console.error('[Unhandled Error]', err);

  const statusCode = (err as any).statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: config.isProduction ? 'Internal server error' : err.message || 'Internal server error',
    ...(config.isDevelopment && { stack: err.stack })
  });
}
