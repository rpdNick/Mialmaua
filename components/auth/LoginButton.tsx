'use client';

import { Button } from '@/components/ui/button';

type LoginButtonProps = {
  className?: string;
};

export function LoginButton({ className }: LoginButtonProps) {
  function handleClick() {
    console.log('Login click — open modal');
  }

  return (
    <Button
      type="button"
      variant="outline"
      className={className}
      onClick={handleClick}
    >
      Увійти
    </Button>
  );
}