import { useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import { resetItems } from '../../redux/nannies/slice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store/hooks';
import { selectUserInfo } from '../../redux/auth/selectors';
import { INanny } from '../../types/NannyInterface';
import NanniesList from '../../components/Nannies/NanniesList/NanniesList';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  const userInfo = useAppSelector(selectUserInfo);
  const favorites: INanny[] = userInfo?.favorites || [];
  console.log(userInfo);

  return (
    <div className={styles.page}>
      {favorites.length > 0 ? (
        <NanniesList nannies={favorites} />
      ) : (
        <div>You have no favorites nannies yet</div>
      )}
    </div>
  );
};

export default FavoritesPage;
