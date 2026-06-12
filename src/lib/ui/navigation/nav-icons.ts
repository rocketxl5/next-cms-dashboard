import {
  LayoutDashboard,
  Users,
  FileText,
} from 'lucide-react';

export const navIconMap = {
  dashboard: LayoutDashboard,
  users: Users,
  content: FileText,
} as const;

export type NavIcon = keyof typeof navIconMap;