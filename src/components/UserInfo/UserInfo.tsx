import styles from './UserInfo.module.scss';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';

const UserInfo = () => {
  const iconClassName = clsx(styles.icon, styles.accentRed);
  const userName = 'Ilona';

  return (
    <div className={styles.info}>
      <div className={styles.iconWrapper}>
        <svg className={iconClassName}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      {userName}
    </div>
  );
};

export default UserInfo;
