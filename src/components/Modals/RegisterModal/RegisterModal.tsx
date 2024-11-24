import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from './RegisterModal.module.scss';

const RegisterModal = ({ setIsOpen }: ModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <RegisterForm setIsOpen={setIsOpen} />
    </div>
  );
};

export default RegisterModal;
