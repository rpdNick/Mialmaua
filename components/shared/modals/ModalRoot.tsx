'use client';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { MODAL_REGISTRY } from './ModalsRegistry';
import { useModal } from './ModalContext';

export function ModalRoot() {
  const { modal, closeModal } = useModal();

  if (!modal) return null;

  const Content = MODAL_REGISTRY[modal.id] as React.ComponentType<{
    payload: (typeof modal)['payload'];
    onClose: () => void;
  }>;

  return (
    <Dialog open onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-md">
        <Content payload={modal.payload} onClose={closeModal} />
      </DialogContent>
    </Dialog>
  );
}