import styles from './Button.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/store/hooks';
import { selectColor } from '../../redux/color/selectors';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  accent?: boolean;
  border?: boolean;
  formButton?: boolean;
}

const Button = ({
  children,
  onClick,
  accent,
  formButton,
  border,
}: ButtonProps) => {
  const color = useAppSelector(selectColor);

  const buttonClassName = clsx(styles.button, {
    [styles.accent]: accent,
    [styles[`accent--${color}`]]: accent,
    [styles.formButton]: formButton,
    [styles.border]: border,
    [styles[`border--${color}`]]: border,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
