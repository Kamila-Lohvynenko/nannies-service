import toast from 'react-hot-toast';
import { logoutUser } from '../../../redux/auth/operations';
import { useAppDispatch } from '../../../redux/store/hooks';
import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import Button from '../../Button/Button';
import styles from './LogoutModal.module.scss';

const LogoutModal = ({ setIsOpen }: ModalPropsInterface) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toast.success('Successfully logged out', {
          duration: 2500,
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 2500);
      })
      .catch(() => {
        toast.error('Please, try again', {
          duration: 2500,
        });
      });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log out?</h2>
      <div className={styles.buttons}>
        <Button accent={true} onClick={handleLogout}>
          Yes
        </Button>
        <Button onClick={() => setIsOpen(false)} border={true}>
          No
        </Button>
      </div>
    </div>
  );
};

export default LogoutModal;
