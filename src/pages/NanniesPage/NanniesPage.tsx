import { useEffect } from 'react';
import styles from './NanniesPage.module.scss';
import { fetchNannies } from '../../redux/nannies/operations';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectNannies } from '../../redux/nannies/selectors';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';

const NanniesPage = () => {
  const dispatch = useAppDispatch();
  const nannies = useAppSelector(selectNannies);

  useEffect(() => {
    dispatch(fetchNannies());
  }, []);

  return (
    <div className={styles.page}>
      NanniesPage
      <NanniesList nannies={nannies} />
    </div>
  );
};

export default NanniesPage;
