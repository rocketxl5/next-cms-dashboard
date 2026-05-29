import { LucideIcon } from 'lucide-react';

export type ToneKey = 'default' | 'success' | 'warning' | 'destructive';

export type ActionStrategy = {
  tone: ToneKey;

  confirmation: 'none' | 'warning' | 'danger';

  requiresSelection?: boolean;

  icon?: LucideIcon;

  canBulk?: boolean;
};
