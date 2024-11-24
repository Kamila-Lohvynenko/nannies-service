import { selectLoading } from '../../../redux/nannies/selectors';
import { useAppSelector } from '../../../redux/store/hooks';
import { INanny } from '../../../types/NannyInterface';
import Loader from '../../Loader/Loader';
import NannyItem from '../NannyItem/NannyItem';
import styles from './NanniesList.module.scss';

interface NanniesListProps {
  nannies: INanny[];
}

const NanniesList = ({ nannies }: NanniesListProps) => {
  const loading = useAppSelector(selectLoading);

  console.log(nannies);

  return (
    <>
      <ul className={styles.list}>
        {nannies.map((nanny) => {
          return (
            <li key={nanny.id} className={styles.item}>
              <NannyItem nanny={nanny} />
            </li>
          );
        })}
      </ul>
      {loading && <Loader />}
    </>
  );
};

export default NanniesList;
