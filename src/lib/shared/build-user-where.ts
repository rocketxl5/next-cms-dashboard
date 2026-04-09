import { Prisma } from '@prisma/client';

import { ParsedSearchUsersParams } from '@/types/shared';

export function buildUserWhere(
  filters?: ParsedSearchUsersParams,
): Prisma.UserWhereInput {
  if (!filters) return {};

  const { search, type = 'email', role, status } = filters;

  const where: Prisma.UserWhereInput = {};

  // Text search
  if (search) {
    if (type === 'name') {
      where.name = { contains: search, mode: 'insensitive' };
    }

    if (type === 'email') {
      where.name = { contains: search, mode: 'insensitive' };
    }
  }

  // Select filters
  if (role) where.role = role;
  if (status) where.status = status;

  return where;
}
