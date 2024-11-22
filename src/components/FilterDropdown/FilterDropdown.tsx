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

  const filters: FilterOption[] = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as FilterOption; // Type assertion for safety
    setSelectedFilter(selectedValue);
    console.log(`Selected filter: ${selectedValue}`);
    // Add your filtering/sorting logic here
  };

  return (
    <div>
      <label htmlFor="filter-select">Filter:</label>
      <div className={styles.wrapper}>
        <select
          className={styles.select}
          id="filter-select"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          {filters.map((filter) => (
            <option className={styles.option} key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <svg className={styles.icon} style={{ pointerEvents: 'none' }}>
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </div>
    </div>
  );
};

export default FilterDropdown;
