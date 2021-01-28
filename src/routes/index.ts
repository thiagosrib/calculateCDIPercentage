import { Router, Request, Response, NextFunction } from 'express';
import getSchema from '../schemas';

import CDIAcumulado from '../services/acumulado';

const routes = Router();

interface CalculateOutput {
  date: Date;
  unitPrice: number;
}

routes.get('/', (req, res) => res.json({ message: 'entrou' }).status(200));

routes.post('/calculate', async (req: Request, res: Response) => {
  if (!(await getSchema.isValid(req.body))) {
    const err = new Error('Invalid payload');
    return res.json(err).status(400);
  }

  const { investmentDate, cdbRate, currentDate } = req.body;

  const initDate = new Date(investmentDate);
  const endDate = new Date(currentDate);

  const value = CDIAcumulado(initDate, endDate, cdbRate);

  return res.json(value).status(200);
});

export default routes;
