'use client';

import { Button } from '@/components/ui/button';
import { useModal } from '@/components/shared/modals/ModalContext';

export function LoginButton() {
  const { openModal } = useModal();

  return (
    <Button type="button" variant="outline" onClick={() => openModal('login')}>
      Увійти
    </Button>
  );
}
