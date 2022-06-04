import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

interface JwtPayload {
  id: number;
}

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies['PLAYER_ACCESS_TOKEN'];

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'hello') as JwtPayload;
        user = await prisma.user.findUnique({
          where: { id }
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (err) {
        res.status(401).json({
          error: 'Not Authorized'
        });
      }

      return handler(req, res, user);
    }
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, 'hello');
  return user;
};
