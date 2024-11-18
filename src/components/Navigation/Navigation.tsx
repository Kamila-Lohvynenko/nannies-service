import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import clsx from 'clsx';

const Navigation = () => {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <nav className={styles.nav}>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      <NavLink to="/nannies" className={linkClassName}>
        Nannies
      </NavLink>
      <NavLink to="/favorites" className={linkClassName}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
