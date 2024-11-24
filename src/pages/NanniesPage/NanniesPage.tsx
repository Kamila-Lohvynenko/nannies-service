import { useEffect } from 'react';
import styles from './NanniesPage.module.scss';
import { fetchNannies } from '../../redux/nannies/operations';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  selectHasMore,
  selectLastDocId,
  selectLoading,
  selectNannies,
} from '../../redux/nannies/selectors';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import Button from '../../components/Button/Button';
import { selectFilters } from '../../redux/filters/selectors';
import { resetItems } from '../../redux/nannies/slice';
import { fetchCurrentUser } from '../../redux/auth/operations';

const NanniesPage = () => {
  const dispatch = useAppDispatch();
  const nannies = useAppSelector(selectNannies);
  const hasMore = useAppSelector(selectHasMore);
  const lastDocId = useAppSelector(selectLastDocId);
  const filters = useAppSelector(selectFilters);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchCurrentUser());
    dispatch(fetchNannies(filters));
  }, [filters]);

  return (
    <div className={styles.page}>
      <FilterDropdown />
      <NanniesList nannies={nannies} />
      <div className={styles.wrapper}>
        {hasMore && !loading && (
          <Button
            accent={true}
            onClick={() => dispatch(fetchNannies({ lastDocId, ...filters }))}
          >
            Load more
          </Button>
        )}
        {!hasMore && !loading && <p>No more items to load.</p>}
      </div>
    </div>
  );
};

export default NanniesPage;
