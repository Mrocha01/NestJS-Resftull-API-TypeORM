import { NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request } from 'express';

export class UserIdCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Request, next: NextFunction) {
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new NotFoundException(`Numero ID inválido!`);
    }
    next();
  }
}
