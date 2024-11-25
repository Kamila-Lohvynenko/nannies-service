import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/store/hooks';
import { selectLogin } from '../../redux/auth/selectors';

interface NavigationProps {
  home: boolean;
}

const Navigation = ({ home }: NavigationProps) => {
  const login = useAppSelector(selectLogin);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <nav className={`${styles.nav} ${home && styles.home}`}>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      <NavLink to="/nannies" className={linkClassName}>
        Nannies
      </NavLink>
      {!home && login && (
        <NavLink to="/favorites" className={linkClassName}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
