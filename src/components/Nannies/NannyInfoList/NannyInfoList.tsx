import { INanny } from '../../../types/NannyInterface';
import { arrayToCapitalizedString } from '../../../utils/arrayToCapitalizedString';
import { calculateAge } from '../../../utils/calculateAge';
import styles from './NannyInfoList.module.scss';

interface NannyInfoListProps {
  nanny: INanny;
}

const NannyInfoList = ({ nanny }: NannyInfoListProps) => {
  return (
    <dl className={styles.list}>
      <div className={styles.wrapper}>
        <dt className={styles.title}>Age:</dt>
        <dd className={styles.description}>{calculateAge(nanny.birthday)}</dd>
      </div>

      <div className={styles.wrapper}>
        <dt className={styles.title}>Experience:</dt>
        <dd className={styles.description}>{nanny.experience}</dd>
      </div>

      <div className={styles.wrapper}>
        <dt className={styles.title}>Kids Age:</dt>
        <dd className={styles.description}>{nanny.kids_age}</dd>
      </div>

      <div className={styles.wrapper}>
        <dt className={styles.title}>Characters:</dt>
        <dd className={styles.description}>
          {arrayToCapitalizedString(nanny.characters)}
        </dd>
      </div>

      <div className={styles.wrapper}>
        <dt className={styles.title}>Education:</dt>
        <dd className={styles.description}>{nanny.education}</dd>
      </div>
    </dl>
  );
};

export default NannyInfoList;
