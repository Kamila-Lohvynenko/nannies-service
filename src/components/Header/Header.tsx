import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const headerClassName = clsx(
    styles.header,
    path === '/' && styles.home,
    styles.accentRed,
  );

  return (
    <header className={headerClassName}>
      <Logo />
      <Navigation />
      <UserMenu />
    </header>
  );
};

export default Header;
