import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckPolicies } from './features/iam/decorators/check-policies.decorator';
import { Action } from './features/iam/types/ability.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CheckPolicies((ability) => ability.can(Action.Read, 'User'))
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
