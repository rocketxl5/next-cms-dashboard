import { SignoutBtn, ToggleThemeBtn } from '@/components/ui/button';

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
