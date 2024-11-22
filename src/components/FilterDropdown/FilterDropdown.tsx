import React, { useState } from 'react';
import styles from './FilterDropdown.module.scss';
import sprite from '../../images/sprite.svg';

type FilterOption =
  | 'A to Z'
  | 'Z to A'
  | 'Less than 10$'
  | 'Greater than 10$'
  | 'Popular'
  | 'Not popular'
  | 'Show all';

const FilterDropdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('A to Z');
  const [isOpen, setIsOpen] = useState(false);

  const filters: FilterOption[] = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];

  const handleFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p>Filters</p>
      {/* Dropdown Button */}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.select}>
        {selectedFilter}
        <svg className={styles.icon} style={{ pointerEvents: 'none' }}>
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className={styles.list}>
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`${styles.option} ${
                selectedFilter === filter && styles.selected
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
