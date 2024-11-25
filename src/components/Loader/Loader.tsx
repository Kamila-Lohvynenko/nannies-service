import { selectColor } from '../../redux/color/selectors';
import { useAppSelector } from '../../redux/store/hooks';
import styles from './Loader.module.scss';

const Loader = () => {
  const color = useAppSelector(selectColor);

  return (
    <div className={`${styles.loader} ${styles[`accent--${color}`]}`}></div>
  );
};

export default Loader;
