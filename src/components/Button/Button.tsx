import styles from './Button.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  accent?: boolean;
  formButton?: boolean;
}

const Button = ({ children, onClick, accent, formButton }: ButtonProps) => {
  const buttonClassName = clsx(styles.button, {
    [styles.accent]: accent,
    [styles.formButton]: formButton,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
