import clsx from 'clsx';
import styles from './HomePage.module.scss';
import sprite from '../../images/sprite.svg';
import Button from '../../components/Button/Button';

const HomePage = () => {
  const pageClassName = clsx(styles.page, styles.accentRed);

  return (
    <div className={pageClassName}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Make Life Easier for the Family:</h1>
        <p className={styles.text}>Find Babysitters Online for All Occasions</p>
        <Button onClick={() => {}}>
          Get started
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-arrow`} />
          </svg>
        </Button>
      </div>
      <div className={styles.imageWrapper}></div>
    </div>
  );
};

export default HomePage;
