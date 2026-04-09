import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Action, AppAbility } from './types/ability.types';
import { AbilityBuilder } from '@casl/ability';
import { createPrismaAbility } from '@casl/prisma';
import { User } from 'prisma/generated/prisma/client';

export type UserWithPermissions = any;

@Injectable()
export class CaslAbilityFactory {
  private ruleHandler = {
    IS_OWNER: (user: User) => ({ ownerId: user.id }),
  };

  createForUser(user: UserWithPermissions): AppAbility {
    const { can, build } = new AbilityBuilder<AppAbility>(createPrismaAbility);

    if (!user) {
      return build();
    }

    user.role?.permissions?.forEach((permissionRole) => {
      const { action, subject } = permissionRole.permission;
      const ruleKey = permissionRole.rule;

      if (ruleKey) {
        const handler = this.ruleHandler[ruleKey];

        if (!handler) {
          throw new InternalServerErrorException(
            `Unknown security rule: ${ruleKey}`,
          );
        }
        can(action as Action, subject as any, handler(user));
      } else {
        can(action as Action, subject as any);
      }
    });

    return build();
  }
}
