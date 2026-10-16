export type ModalPayloadMap = {
  login: Record<string, never>;
  register: Record<string, never>;
};

export type ModalId = keyof ModalPayloadMap;

export type ModalState = {
  [id in ModalId]: { id: id; payload: ModalPayloadMap[id] };
}[ModalId];