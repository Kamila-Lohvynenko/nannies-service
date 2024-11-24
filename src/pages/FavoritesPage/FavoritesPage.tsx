import { useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import { resetItems } from '../../redux/nannies/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectUserInfo, selectUserLoading } from '../../redux/auth/selectors';
import { INanny } from '../../types/NannyInterface';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';
import { fetchCurrentUser } from '../../redux/auth/operations';
import Loader from '../../components/Loader/Loader';

const FavoritesPage = () => {
  const loading = useAppSelector(selectUserLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const userInfo = useAppSelector(selectUserInfo);
  const favorites: INanny[] = userInfo?.favorites || [];
  console.log(userInfo);

  return (
    <div className={styles.page}>
      {favorites.length > 0 && !loading && <NanniesList nannies={favorites} />}
      {favorites.length === 0 && !loading && (
        <div>You have no favorites nannies yet</div>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default FavoritesPage;
