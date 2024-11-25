import toast from 'react-hot-toast';
import sprite from '../../images/sprite.svg';
import {
  addFavoriteNanny,
  removeFavoriteNanny,
} from '../../redux/auth/operations';
import { selectLogin, selectUserInfo } from '../../redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { INanny } from '../../types/NannyInterface';
import styles from './FavoriteButton.module.scss';
import { selectColor } from '../../redux/color/selectors';

interface FavoriteButtonProps {
  nanny: INanny;
}

const FavoriteButton = ({ nanny }: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();

  const color = useAppSelector(selectColor);
  const login = useAppSelector(selectLogin);
  const userinfo = useAppSelector(selectUserInfo);
  const userId = userinfo?.uid;
  const favorites: INanny[] = userinfo?.favorites || [];

  const isFavorite = favorites.find((item) => item.id === nanny.id);

  const handleToggleFavorite = () => {
    if (!login) {
      toast.error('Please log in to add favorite nannies ');
      return;
    }
    if (isFavorite) {
      dispatch(removeFavoriteNanny({ userId, nanny }))
        .unwrap()
        .then(() => toast.success('Nanny removed from favorites'))
        .catch(() => toast.error('Error removing nanny'));
    } else {
      dispatch(addFavoriteNanny({ userId, nanny }))
        .unwrap()
        .then(() => toast.success('Nanny added to favorites'))
        .catch(() => toast.error('Error adding nanny, please try again'));
    }
  };
  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      className={styles.button}
    >
      {isFavorite ? (
        <svg className={`${styles.favorite} ${styles[`favorite--${color}`]}`}>
          <use href={`${sprite}#icon-heart-hover`} />
        </svg>
      ) : (
        <svg className={styles.notFavorite}>
          <use href={`${sprite}#icon-heart`} />
        </svg>
      )}
    </button>
  );
};

export default FavoriteButton;
