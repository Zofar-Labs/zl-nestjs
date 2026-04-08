import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().min(3000).max(3999),
  ENV: z.enum(['development', 'production']).default('production'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  VALID_ORIGIN: z.string().default('http://localhost:4200'),
});

const validEnv = envSchema.parse(process.env);

export default validEnv;
