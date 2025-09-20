import type { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  code?: number;
}

interface AsyncFunction {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

interface ExpressMiddleware {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncHandler =
  (fn: AsyncFunction): ExpressMiddleware =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (err: unknown) {
      const error = err as CustomError;
      res.status(error.code || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  };

export default asyncHandler;
