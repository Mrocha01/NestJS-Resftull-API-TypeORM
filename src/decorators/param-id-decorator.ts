import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const id = request.params.id;
    return isNaN(Number(id)) ? id : +id;
  },
);
