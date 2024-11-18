import styles from './Button.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  accent?: boolean;
}

const Button = ({ children, onClick, accent }: ButtonProps) => {
  const buttonClassName = clsx(styles.button, accent && styles.accent);

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
