import styles from './BurgerButton.module.scss';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import MobileMenu from '../MobileMenu';

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="open mobile menu"
      >
        <svg className={styles.icon} aria-hidden="true">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      {/* <MobileMenu /> */}
    </>
  );
};

export default BurgerButton;
