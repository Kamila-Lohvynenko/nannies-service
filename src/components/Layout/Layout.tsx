import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
