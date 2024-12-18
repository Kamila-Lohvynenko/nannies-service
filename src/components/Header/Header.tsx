import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useAppSelector } from '../../redux/store/hooks';
import { selectColor } from '../../redux/color/selectors';
import BurgerButton from '../MobileMenu/BurgerButton/BurgerButton';

const Header = () => {
  const color = useAppSelector(selectColor);

  const location = useLocation();
  const path = location.pathname;
  const home = path === '/';

  const headerClassName = clsx(
    styles.header,
    home && styles.home,
    styles[color],
  );

  return (
    <header className={headerClassName}>
      <Logo />
      <div className={styles.navWrapper}>
        <Navigation home={home} />
      </div>
      <div className={styles.userMenuWrapper}>
        <UserMenu />
      </div>
      <BurgerButton />
    </header>
  );
};

export default Header;
