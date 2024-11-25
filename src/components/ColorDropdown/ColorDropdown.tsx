import React, { useState } from 'react';
import styles from './ColorDropdown.module.scss';
import sprite from '../../images/sprite.svg';
import { setColor } from '../../redux/color/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectColor } from '../../redux/color/selectors';

enum COLORS {
  RED = 'Red',
  BLUE = 'Blue',
  GREEN = 'Green',
}

interface ColorDropdownProps {
  home?: boolean;
}

const ColorDropdown = ({ home }: ColorDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const color = useAppSelector(selectColor);

  const colors = Object.values(COLORS);

  const handleColorChange = (color: COLORS) => {
    const colorMapping = {
      [COLORS.RED]: 'red',
      [COLORS.BLUE]: 'blue',
      [COLORS.GREEN]: 'green',
    };

    dispatch(setColor(colorMapping[color]));
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.select} ${styles[`select--${color}`]} ${
          home && styles.home
        }`}
      >
        Color
        <svg
          className={`${styles.icon} ${styles[`icon--${color}`]}`}
          aria-hidden="true"
        >
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {colors.map((colorOption) => (
            <li
              key={colorOption}
              onClick={() => handleColorChange(colorOption)}
              className={`${styles.option} ${styles[`--${color}`]}`}
            >
              {colorOption}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorDropdown;
