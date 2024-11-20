import { INanny } from '../../../types/NannyInterface';
import NannyItem from '../NannyItem/NannyItem';
import styles from './NanniesList.module.scss';

interface NanniesListProps {
  nannies: INanny[];
}

const NanniesList = ({ nannies }: NanniesListProps) => {
  console.log(nannies);

  return (
    <ul className={styles.list}>
      {nannies.map((nanny) => {
        return (
          <li key={nanny.id} className={styles.item}>
            <NannyItem nanny={nanny} />
          </li>
        );
      })}
    </ul>
  );
};

export default NanniesList;
