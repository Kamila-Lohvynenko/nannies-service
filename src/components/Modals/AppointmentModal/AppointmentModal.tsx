import { INanny } from '../../../types/NannyInterface';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import styles from './AppointmentModal.module.scss';

interface AppointmentModalProps {
  nanny: INanny;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppointmentModal = ({ nanny, setIsOpen }: AppointmentModalProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Make an appointment with a babysitter</h2>
      <p className={styles.text}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={styles.nannyInfo}>
        <img
          src={nanny.avatar_url}
          alt="nanny photo"
          className={styles.avatar}
        />
        <div>
          <p>Your nanny</p>
          <p className={styles.name}>{nanny.name}</p>
        </div>
      </div>
      <AppointmentForm setIsOpen={setIsOpen} />
    </div>
  );
};

export default AppointmentModal;
