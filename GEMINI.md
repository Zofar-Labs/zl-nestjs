# ZL-NestJS Project Context

This is a professional NestJS boilerplate designed for building scalable backend services. It integrates modern tools like Prisma, CASL, Zod, and Pino for a robust developer experience.

## 🏗️ Architecture & Technology Stack

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **ORM:** [Prisma](https://www.prisma.io/) with PostgreSQL.
- **Authorization:** [CASL](https://casl.js.org/) for fine-grained, attribute-based access control (ABAC).
- **Validation:** [Zod](https://zod.dev/) for environment variables and [Class-Validator](https://github.com/typestack/class-validator) for DTOs.
- **Logging:** [Pino](https://getpino.io/) via `nestjs-pino`.
- **Database:** PostgreSQL.

## 📁 Project Structure

- `src/main.ts`: Application entry point.
- `src/app.module.ts`: Root module.
- `src/config/env-validation.ts`: Zod schema for environment variable validation.
- `src/features/`: Contains domain-specific features (e.g., `iam` for Identity and Access Management).
- `src/core/`: Shared infrastructure, filters, and interceptors.
- `prisma/`: Database schema and migrations.
- `test/`: End-to-end tests.

## 🛠️ Key Commands

- **Install Dependencies:** `pnpm install`
- **Development Mode:** `pnpm run start:dev` (Uses `--env-file=.env` for native Node.js environment support)
- **Prisma Generation:** `npx prisma generate`
- **Run Migrations:** `npx prisma migrate dev`
- **Linting:** `pnpm run lint`
- **Formatting:** `pnpm run format`
- **Unit Tests:** `pnpm run test`
- **E2E Tests:** `pnpm run test:e2e`

## 🔐 Authorization (IAM)

The project uses a custom IAM implementation leveraging CASL:
- **`CaslAbilityFactory`**: Located in `src/features/iam/`, it builds user abilities based on database-stored permissions.
- **`PoliciesGuard`**: Enforces security policies at the controller/handler level using the `@CheckPolicies()` decorator.
- **`CaslForbiddenFilter`**: Gracefully handles `ForbiddenError` from CASL, returning a standardized JSON response.

## 📜 Development Conventions

- **Environment Variables:** Strictly validated via Zod in `src/config/env-validation.ts`. Always update the schema when adding new variables.
- **Surgical Updates:** When modifying features, maintain the established patterns in `src/features/`.
- **Testing:** New features should include unit tests (`*.spec.ts`) and, where applicable, E2E tests.
- **Code Style:** Adhere to the provided `.eslintrc.js` and `.prettierrc` configurations. Use `pnpm run lint` before committing.
- **Prisma:** Always run `npx prisma generate` after modifying `prisma/schema.prisma`.

## 📌 Maintenance Notes

- The project uses Node's native `--env-file` flag (Node 20+).
- Prisma client is generated into `./prisma/generated/prisma`.
