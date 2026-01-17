import { SignoutBtn, ToggleThemeBtn } from '@/components/ui';

export function AccountHeader() {
  return (
    <>
      <h2>Account Header</h2>
      <div>
        <ToggleThemeBtn />
        <SignoutBtn />
      </div>
    </>
  );
}
