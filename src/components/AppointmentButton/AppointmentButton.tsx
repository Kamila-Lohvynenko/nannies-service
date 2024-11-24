import { useState } from 'react';
import { INanny } from '../../types/NannyInterface';
import Button from '../Button/Button';
import styles from './AppointmentButton.module.scss';
import Modal from '../Modals/Modal/Modal';
import AppointmentModal from '../Modals/AppointmentModal/AppointmentModal';

interface AppointmentButtonProps {
  nanny: INanny;
}

const AppointmentButton = ({ nanny }: AppointmentButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Button accent={true} onClick={() => setIsModalOpen(true)}>
        Make an appointment
      </Button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <AppointmentModal nanny={nanny} setIsOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default AppointmentButton;
