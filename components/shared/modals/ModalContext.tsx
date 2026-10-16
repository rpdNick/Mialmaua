'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { ModalId, ModalPayloadMap, ModalState } from './types';

type ModalContextValue = {
  modal: ModalState | null;
  openModal: <id extends ModalId>(id: id, payload?: ModalPayloadMap[id]) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = useCallback(<id extends ModalId>(id: id, payload?: ModalPayloadMap[id]) => {
    setModal({ id, payload: payload ?? ({} as ModalPayloadMap[id]) });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const value = useMemo(() => ({ modal, openModal, closeModal }), [modal, openModal, closeModal]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return ctx;
}
