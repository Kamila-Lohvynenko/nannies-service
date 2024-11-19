import clsx from 'clsx';
import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';
import styles from './UserMenu.module.scss';
import Modal from '../Modals/Modal/Modal';
import LoginModal from '../Modals/LoginModal/LoginModal';
import { useState } from 'react';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';

const UserMenu = () => {
  const isLoggedIn = false;

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

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
          <Button
            onClick={() => {
              setIsLoginOpen(true);
            }}
          >
            Log in
          </Button>
          <Button
            onClick={() => {
              setIsRegisterOpen(true);
            }}
            accent={true}
          >
            Registration
          </Button>
        </>
      )}
      <Modal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}>
        <LoginModal />
      </Modal>
      <Modal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen}>
        <RegisterModal />
      </Modal>
    </div>
  );
};

export default UserMenu;
