import styles from './MobileMenu.module.scss';
import sprite from '../../images/sprite.svg';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

interface MobileMenuProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const MobileMenu = ({ setIsOpen, isOpen }: MobileMenuProps) => {
  const menuContentRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuContentRef, () => setIsOpen(false));

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles.menu} ${isOpen && styles.isOpen}`}>
      <div className={styles.content} ref={menuContentRef}>
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="close mobile menu"
        >
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <Navigation home={false} closeMenu={closeMenu} />
        <UserMenu closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
