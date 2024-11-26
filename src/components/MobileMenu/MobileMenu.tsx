import styles from './MobileMenu.module.scss';
import sprite from '../../images/sprite.svg';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

interface MobileMenuProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const MobileMenu = ({ setIsOpen, isOpen }: MobileMenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen && styles.isOpen}`}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <Navigation home={false} />
        <UserMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
