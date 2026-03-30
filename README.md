<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# ZL-NestJS

A personal, opinionated **NestJS** boilerplate designed as a robust foundation for building scalable and efficient backend services.

## 🚀 Core Tech Stack

This repository comes pre-configured with the core tools required for most modern backend projects:

### 🏗️ Framework & Runtime
- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **[TypeScript](https://www.typescriptlang.org/)**: Strong typing for better developer experience and reliability.

### 💾 Data Layer (ORM & Schema)
- **[ZenStack](https://zenstack.dev/)**: Enhances Prisma with access control and a schema-first development workflow.
- **[PostgreSQL](https://www.postgresql.org/)**: Robust, open-source relational database.
- **[Prisma](https://www.prisma.io/)**: (Underlying ZenStack) Type-safe ORM for Node.js & TypeScript.

### 📝 Documentation & API
- **[Swagger/OpenAPI](https://swagger.io/)**: Automatic API documentation and testing interface.
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation with static type inference.
- **[Class-Validator](https://github.com/typestack/class-validator) & [Class-Transformer](https://github.com/typestack/class-transformer)**: Decorator-based validation and object transformation.

### 🛡️ Security & Performance
- **[Throttler](https://docs.nestjs.com/security/rate-limiting)**: Built-in rate limiting to protect against brute-force attacks.
- **[Cache Manager](https://docs.nestjs.com/techniques/caching)**: Multi-level caching support (In-memory/Redis compatible).
- **[Pino](https://getpino.io/)**: Extremely low overhead, structured logging via `nestjs-pino`.

### 🧪 Testing & Quality
- **[Jest](https://jestjs.io/)**: Comprehensive testing framework for unit and integration tests.
- **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)**: Consistent code styling and static analysis.

---

## 🛠️ Project Setup

### Installation

```bash
$ pnpm install
```

### Environment Configuration

Create a `.env` file in the root directory and configure your database connection:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/zl-nestjs?schema=public"
```

### ZenStack Generation

Generate the ORM and access control layers:

```bash
$ npx zenstack generate
```

---

## 🏃 Running the Project

```bash
# Development mode
$ pnpm run start

# Watch mode (auto-reload)
$ pnpm run start:dev

# Production mode
$ pnpm run start:prod
```

---

## 🧪 Running Tests

```bash
# Unit tests
$ pnpm run test

# E2E tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

## 📜 License

This project is unlicensed for private use.
