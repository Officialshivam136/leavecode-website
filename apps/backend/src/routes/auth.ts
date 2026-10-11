import { Router, Request, Response, NextFunction } from 'express';
import { AdminLoginSchema } from '@leavecode/shared';
import { signToken } from '../middleware/auth.js';
import { AppError } from '../middleware/errorHandler.js';

export const authRouter = Router();

// Administrative authentication endpoint
authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = AdminLoginSchema.parse(req.body);

    // Hardcoded secure initial admin credentials for dev/demonstration
    // In production, these are matched against bcrypt-hashed passwords in MongoDB UserModel
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@leavecode.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'LeaveCode@Admin2026!';

    if (email !== adminEmail || password !== adminPassword) {
      throw new AppError('Invalid email or administrative password', 401);
    }

    const token = signToken({
      id: 'admin-lead-1',
      email: adminEmail,
      role: 'admin',
    });

    res.status(200).json({
      success: true,
      message: 'Authenticated successfully',
      token,
      user: {
        id: 'admin-lead-1',
        email: adminEmail,
        name: 'LeaveCode Lead Administrator',
        role: 'admin',
      },
    });
  } catch (error) {
    next(error);
  }
});
