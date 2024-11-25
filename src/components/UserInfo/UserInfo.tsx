import styles from './UserInfo.module.scss';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/store/hooks';
import { selectUserInfo } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { selectColor } from '../../redux/color/selectors';

const UserInfo = () => {
  const color = useSelector(selectColor);
  const iconClassName = clsx(styles.icon, styles[`icon--${color}`]);

  const userInfo = useAppSelector(selectUserInfo);
  const userName = userInfo.displayName;

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
