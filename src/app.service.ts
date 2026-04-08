import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getHello(): Promise<string> {
    return `${await this.prismaService.user.count()}`;
  }
}
