import React, { useRef, useState } from 'react';
import styles from './FilterDropdown.module.scss';
import sprite from '../../images/sprite.svg';
import { setFilter } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store/hooks';
import { useSelector } from 'react-redux';
import { selectColor } from '../../redux/color/selectors';
import { useClickOutside } from '../../hooks/useClickOutside';

enum FILTERS {
  ASC = 'A to Z',
  DESC = 'Z to A',
  CHEAP = 'Less than 10$',
  EXPENSIVE = 'Greater than 10$',
  POPULAR = 'Popular',
  NOT_POPULAR = 'Not popular',
  ALL = 'Show all',
}

const FilterDropdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FILTERS>(FILTERS.ASC);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const color = useSelector(selectColor);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filters = Object.values(FILTERS);

  const filterActions = {
    [FILTERS.ASC]: () => dispatch(setFilter({ direction: 'asc' })),
    [FILTERS.DESC]: () => dispatch(setFilter({ direction: 'desc' })),
    [FILTERS.CHEAP]: () => dispatch(setFilter({ priceLessThan: 10 })),
    [FILTERS.EXPENSIVE]: () => dispatch(setFilter({ priceGreaterThan: 10 })),
    [FILTERS.POPULAR]: () =>
      dispatch(setFilter({ sortBy: 'rating', direction: 'desc' })),
    [FILTERS.NOT_POPULAR]: () =>
      dispatch(setFilter({ sortBy: 'rating', direction: 'asc' })),
    [FILTERS.ALL]: () => dispatch(setFilter({})),
  };

  const handleFilterChange = (filter: FILTERS) => {
    filterActions[filter]?.();
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <p>Filters</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.select} ${styles[`select--${color}`]}`}
      >
        {selectedFilter}
        <svg className={styles.icon} aria-hidden="true">
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`${styles.option} ${
                selectedFilter === filter ? styles.selected : ''
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
