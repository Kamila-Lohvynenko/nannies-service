import { useState } from 'react';
import { INanny } from '../../../types/NannyInterface';
import NannyInfoList from '../NannyInfoList/NannyInfoList';
import ShortNannyInfo from '../ShortNannyInfo/ShortNannyInfo';
import styles from './NannyItem.module.scss';
import ReviewsList from '../ReviewsList/ReviewsList';

interface NannyItemProps {
  nanny: INanny;
}

const NannyItem = ({ nanny }: NannyItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className={styles.avatarWrapper}>
        <img
          src={nanny.avatar_url}
          alt="nanny photo"
          className={styles.avatar}
        />
      </div>
      <div>
        <ShortNannyInfo nanny={nanny} />
        <h2 className={styles.name}>{nanny.name}</h2>
        <NannyInfoList nanny={nanny} />
        <p>{nanny.about}</p>
        {isExpanded && <ReviewsList reviews={nanny.reviews} />}
        <button className={styles.button} onClick={toggleExpand}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </>
  );
};

export default NannyItem;
