import styles from './NotFoundPage.module.scss';
import sprite from '../../images/sprite.svg';

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <svg className={styles.icon}>
        <use href={`${sprite}#icon-error`} />
      </svg>
      <p className={styles.text}>Page is not found</p>
    </div>
  );
};

export default NotFoundPage;
