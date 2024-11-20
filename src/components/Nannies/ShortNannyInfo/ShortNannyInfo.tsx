import { INanny } from '../../../types/NannyInterface';
import styles from './ShortNannyInfo.module.scss';
import sprite from '../../../images/sprite.svg';

interface ShortNannyInfoProps {
  nanny: INanny;
}

const ShortNannyInfo = ({ nanny }: ShortNannyInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <p>Nanny</p>
      <div className={styles.info}>
        <div className={styles.item}>
          <svg className={styles.iconMap}>
            <use href={`${sprite}#icon-map`} />
          </svg>
          <p>{nanny.location}</p>
        </div>
        <div className={styles.item}>
          <svg className={styles.iconStar}>
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p>{nanny.rating}</p>
        </div>
        <div className={styles.item}>
          <p>
            Price / 1 hour:
            <span className={styles.price}> {nanny.price_per_hour}$</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortNannyInfo;
