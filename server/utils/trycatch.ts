import { Request, Response } from 'express';

const tryCatch = (controller: any) => async (req: Request, res: Response) => {
  try {
    await controller(req, res);
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
  return true;
};

export default tryCatch;
