import styles from './UserInfo.module.scss';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/store/hooks';
import { selectUserInfo } from '../../redux/auth/selectors';

const UserInfo = () => {
  const iconClassName = clsx(styles.icon, styles.accentRed);

  const userInfo = useAppSelector(selectUserInfo);
  const userName = userInfo.displayName;
  console.log(userName);

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
