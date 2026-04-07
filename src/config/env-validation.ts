import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().min(3000).max(3999),
  ENV: z.enum(['development', 'production']).default('production'),
});

const validEnv = envSchema.parse(process.env);

export default validEnv;
