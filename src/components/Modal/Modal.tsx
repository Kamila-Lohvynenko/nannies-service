import styles from './Modal.module.scss';
import ReactModal from 'react-modal';

import sprite from '../../images/sprite.svg';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styles.overlay}
      className={styles.modal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
