import { forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalContainer = useRef();

  // Ensure that the modal container exists in the HTML
  if (!modalContainer.current) {
    modalContainer.current = document.createElement('div');
    document.body.appendChild(modalContainer.current);
  }

  const dialog = useRef();

  // No need for useImperativeHandle, directly use the dialog element

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    modalContainer.current
  );
});

export default Modal;
