import { PureAbility } from '@casl/ability';
import { PrismaQuery, Subjects } from '@casl/prisma';
import { Permission, Role, User } from 'prisma/generated/prisma/client';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Send = 'send',
}

export type AppSubjects =
  | 'all'
  | Subjects<{
      User: User;
      Role: Role;
      Permission: Permission;
      all;
    }>;

export type AppAbility = PureAbility<[Action, AppSubjects], PrismaQuery>;
