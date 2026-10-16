'use client';

import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/auth/LoginForm';
import { useModal } from '@/components/shared/modals/ModalContext';
import type { ModalPayloadMap } from '@/components/shared/modals/types';
import { DialogTitle } from '@/components/ui/dialog';

type LoginModalContentProps = {
  payload: ModalPayloadMap['login'];
  onClose: () => void;
};

export function LoginModalContent({ onClose }: LoginModalContentProps) {
  const router = useRouter();
  const { openModal } = useModal();

  function handleSuccess() {
    onClose();
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-semibold">Вхід</DialogTitle>
      <LoginForm onSuccess={handleSuccess} />
      <button
        type="button"
        className="text-sm text-brown-100 underline text-left"
        onClick={() => openModal('register')}
      >
        Зареєструватися
      </button>
    </div>
  );
}