import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import LoginForm from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

const LoginModal = ({ setIsOpen }: ModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <LoginForm setIsOpen={setIsOpen} />
    </div>
  );
};

export default LoginModal;
