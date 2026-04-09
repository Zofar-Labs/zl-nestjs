import { ForbiddenError } from '@casl/ability';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

@Catch(ForbiddenError)
export class CaslForbiddenFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(HttpStatus.FORBIDDEN).json({
      statusCode: HttpStatus.FORBIDDEN,
      message:
        'Security Policy Violation: You do not have sufficient privileges',
      error: 'Forbidden',
    });
  }
}
