import { Prisma } from '@prisma/client';

import { ParsedSearchUsersParams } from '@/types/shared/search';

export function buildUserWhere(
  filters?: ParsedSearchUsersParams,
): Prisma.UserWhereInput {
  if (!filters) return {};

  const {
    search,
    type = 'email',
    role,
    status,
    createdFrom,
    createdTo,
  } = filters;

  const where: Prisma.UserWhereInput = {};

  // Text search
  if (search) {
    if (type === 'name') {
      where.name = { contains: search, mode: 'insensitive' };
    }

    if (type === 'email') {
      where.email = { contains: search, mode: 'insensitive' };
    }
  }

  // Select filters
  if (role) where.role = role;
  if (status) where.status = status;

  // Date pickers
  if (createdFrom && createdTo) {
    where.createdAt = {
      gte: createdFrom,
      lte: createdTo,
    };
  }

  return where;
}
