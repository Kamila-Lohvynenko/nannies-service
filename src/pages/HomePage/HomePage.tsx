import clsx from 'clsx';
import styles from './HomePage.module.scss';
import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetItems } from '../../redux/nannies/slice';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';
import { selectColor } from '../../redux/color/selectors';
import ColorDropdown from '../../components/ColorDropdown/ColorDropdown';

const HomePage = () => {
  const color = useAppSelector(selectColor);

  const pageClassName = clsx(styles.page, styles[color]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  return (
    <div className={pageClassName}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Make Life Easier for the Family:</h1>
        <p className={styles.text}>Find Babysitters Online for All Occasions</p>
        <Link to="/nannies" className={styles.link}>
          Get started
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-arrow`} />
          </svg>
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.dropdown}>
          <ColorDropdown home={true} />
        </div>
        <div className={styles.info}>
          <div className={`${styles.checkBox} ${styles[`checkBox--${color}`]}`}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-check`} />
            </svg>
          </div>
          <div className={styles.infoText}>
            <p>Experienced nannies</p>
            <p className={styles.price}>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
