import { useEffect } from 'react';
import styles from './NanniesPage.module.scss';
import { fetchNannies } from '../../redux/nannies/operations';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  selectHasMore,
  selectLastDocId,
  selectNannies,
} from '../../redux/nannies/selectors';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import Button from '../../components/Button/Button';

const NanniesPage = () => {
  const dispatch = useAppDispatch();
  const nannies = useAppSelector(selectNannies);
  const hasMore = useAppSelector(selectHasMore);
  const lastDocId = useAppSelector(selectLastDocId);

  useEffect(() => {
    dispatch(fetchNannies({ ratingGreaterThan: 4.2 }));
  }, []);

  return (
    <div className={styles.page}>
      <FilterDropdown />
      <NanniesList nannies={nannies} />
      {hasMore && (
        <Button
          accent={true}
          onClick={() => dispatch(fetchNannies({ lastDocId }))}
        >
          Load more
        </Button>
      )}
      {!hasMore && <p>No more items to load.</p>}
    </div>
  );
};

export default NanniesPage;
