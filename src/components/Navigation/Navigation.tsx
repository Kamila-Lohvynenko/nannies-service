import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import clsx from 'clsx';

interface NavigationProps {
  home: boolean;
}

const Navigation = ({ home }: NavigationProps) => {
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
      {!home && (
        <NavLink to="/favorites" className={linkClassName}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
