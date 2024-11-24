import { IReview } from '../../../types/NannyInterface';
import styles from './ReviewsList.module.scss';
import sprite from '../../../images/sprite.svg';

interface ReviewsListProps {
  reviews: IReview[];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  const accent = 'red';

  return (
    <ul className={styles.list}>
      {reviews.map((review, i) => {
        return (
          <li key={i} className={styles.item}>
            <div className={styles.wrapper}>
              <div className={`${styles.letter} ${styles[accent]}`}>
                {review.reviewer[0]}
              </div>
              <div className={styles.nameWrapper}>
                <p className={styles.name}>{review.reviewer}</p>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  <p>{review.rating}</p>
                </div>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
