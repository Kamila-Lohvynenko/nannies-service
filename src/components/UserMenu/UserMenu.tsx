import clsx from 'clsx';
import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';
import styles from './UserMenu.module.scss';
import Modal from '../Modals/Modal/Modal';
import LoginModal from '../Modals/LoginModal/LoginModal';
import { useState } from 'react';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';
import { useAppSelector } from '../../redux/store/hooks';
import { selectLogin } from '../../redux/auth/selectors';
import LogoutModal from '../Modals/LogoutModal/LogoutModal';

interface UserMenuProps {
  closeMenu?: () => void;
}

const UserMenu = ({ closeMenu }: UserMenuProps) => {
  const isLoggedIn = useAppSelector(selectLogin);

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);

  const menuClassName = clsx(styles.menu, isLoggedIn && styles.loggedIn);

  const handleClick = (callback: (v: boolean) => void) => {
    callback(true);
    if (closeMenu !== undefined) closeMenu();
  };

  return (
    <div className={menuClassName}>
      {isLoggedIn ? (
        <>
          <UserInfo />
          <Button
            onClick={() => handleClick(setIsLogoutOpen)}
            accent={!!closeMenu}
          >
            Log out
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              handleClick(setIsLoginOpen);
            }}
            accent={!!closeMenu}
          >
            Log in
          </Button>
          <Button onClick={() => handleClick(setIsRegisterOpen)} accent={true}>
            Registration
          </Button>
        </>
      )}
      <Modal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}>
        <LoginModal setIsOpen={setIsLoginOpen} />
      </Modal>
      <Modal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen}>
        <RegisterModal setIsOpen={setIsRegisterOpen} />
      </Modal>
      <Modal isOpen={isLogoutOpen} setIsOpen={setIsLogoutOpen}>
        <LogoutModal setIsOpen={setIsLogoutOpen} />
      </Modal>
    </div>
  );
};

export default UserMenu;
