import type { ComponentType } from 'react';
import { LoginModalContent } from '@/components/modals/LoginModal';
import { RegisterModalContent } from '@/components/modals/RegisterModal';
import type { ModalId, ModalPayloadMap } from './types';

export type ModalContentProps<id extends ModalId> = {
  payload: ModalPayloadMap[id];
  onClose: () => void;
};

export const MODAL_REGISTRY: {
  [id in ModalId]: ComponentType<ModalContentProps<id>>;
} = {
  login: LoginModalContent,
  register: RegisterModalContent,
};
