import styles from './Button.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

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
  const buttonClassName = clsx(styles.button, {
    [styles.accent]: accent,
    [styles.formButton]: formButton,
    [styles.border]: border,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
