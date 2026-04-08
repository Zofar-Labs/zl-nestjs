import { Injectable } from '@nestjs/common';
import { Action, AppAbility } from './types/ability.types';
import { AbilityBuilder } from '@casl/ability';
import { createPrismaAbility } from '@casl/prisma';

export type UserWithPermissions = any;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserWithPermissions): AppAbility {
    const { can, build } = new AbilityBuilder<AppAbility>(createPrismaAbility);

    if (!user) {
      return build();
    }

    user.role?.permissions?.forEach((permissionRole) => {
      const { action, subject } = permissionRole.permission;
      can(action as Action, subject as any);
    });

    return build();
  }
}
