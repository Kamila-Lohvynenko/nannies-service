import { useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import { resetItems } from '../../redux/nannies/slice';
import { useDispatch } from 'react-redux';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  return <div className={styles.page}>FavoritesPage</div>;
};

export default FavoritesPage;
