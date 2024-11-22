import { useEffect } from 'react';
import styles from './NanniesPage.module.scss';
import { fetchNannies } from '../../redux/nannies/operations';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectNannies } from '../../redux/nannies/selectors';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';

const NanniesPage = () => {
  const dispatch = useAppDispatch();
  const nannies = useAppSelector(selectNannies);

  useEffect(() => {
    dispatch(fetchNannies());
  }, []);

  return (
    <div className={styles.page}>
      <FilterDropdown />
      <NanniesList nannies={nannies} />
    </div>
  );
};

export default NanniesPage;
