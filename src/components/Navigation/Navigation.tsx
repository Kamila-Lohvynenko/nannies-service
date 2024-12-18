import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/store/hooks';
import { selectLogin } from '../../redux/auth/selectors';

interface NavigationProps {
  home: boolean;
  closeMenu?: () => void;
}

const Navigation = ({ home, closeMenu }: NavigationProps) => {
  const login = useAppSelector(selectLogin);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <nav className={`${styles.nav} ${home && styles.home}`}>
      <NavLink className={linkClassName} to="/" onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/nannies" className={linkClassName} onClick={closeMenu}>
        Nannies
      </NavLink>
      {!home && login && (
        <NavLink to="/favorites" className={linkClassName} onClick={closeMenu}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
