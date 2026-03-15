import { getCookie, getSession } from '.';
import { Theme } from '@/types/enums';

export async function getTheme(): Promise<Theme> {
  const session = await getSession();
  const cookieTheme = await getCookie('theme');

  const normalize = (theme?: string): Theme => {
    return theme === 'dark' ? 'dark' : 'light';
  };

  if (cookieTheme) {
    return normalize(cookieTheme);
  }

  if (session?.user?.theme) {
    return normalize(session.user.theme);
  }

  return 'light';
}
