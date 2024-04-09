import { NavLink, Outlet } from "react-router-dom";

import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrp}>
        <nav className={styles.headerNav}>
          <p>Here logo</p>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                end
                to="/pokemon"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
              >
                All pokemons
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default SharedLayout;
