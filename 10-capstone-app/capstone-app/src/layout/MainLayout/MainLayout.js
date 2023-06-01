// import { Footer } from '../Footer/Footer';
import { NavBar } from 'layout/NavBar/NavBar';

import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }) => (
  <div className={styles.container}>
    <NavBar />
    <main>{children}</main>
    {/* <Footer /> */}
  </div>
);
