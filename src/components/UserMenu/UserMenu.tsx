import clsx from 'clsx';
import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const isLoggedIn = true;

  const menuClassName = clsx(styles.menu, isLoggedIn && styles.loggedIn);

  return (
    <div className={menuClassName}>
      {isLoggedIn ? (
        <>
          <UserInfo />
          <Button onClick={() => {}}>Log out</Button>
        </>
      ) : (
        <>
          <Button onClick={() => {}}>Log in</Button>
          <Button onClick={() => {}} accent={true}>
            Registration
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
