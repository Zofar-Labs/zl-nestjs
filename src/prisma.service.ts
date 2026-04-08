import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import validEnv from './config/env-validation';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaPg({
      connectionString: validEnv.DATABASE_URL as string,
    });
    super({ adapter });
  }

  async onModuleInit() {
    this.$connect();
    console.log('DB connected');
  }

  async onModuleDestroy() {
    this.$disconnect();
    console.log('DB disconnected');
  }
}
