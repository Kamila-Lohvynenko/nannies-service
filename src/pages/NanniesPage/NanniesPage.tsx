import { useEffect } from 'react';
import styles from './NanniesPage.module.scss';
import { fetchNannies } from '../../redux/nannies/operations';
import { useAppDispatch } from '../../redux/store/hooks';

const NanniesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNannies());
  }, []);

  return <div className={styles.page}>NanniesPage</div>;
};

export default NanniesPage;
