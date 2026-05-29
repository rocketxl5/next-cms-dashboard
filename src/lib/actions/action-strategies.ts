import { ActionKey, ActionStrategy } from "@/types/actions";

export const ACTION_STRATEGIES: Record<
  ActionKey,
  ActionStrategy
> = {
  create: {
    confirmation: 'none',
    tone: 'success',
  },

  update: {
    confirmation: 'none',
    tone: 'default',
  },

  activate: {
    confirmation: 'none',
    tone: 'success',
  },

  suspend: {
    confirmation: 'warning',
    tone: 'warning',
  },

  delete: {
    confirmation: 'danger',
    tone: 'destructive',
  },
};