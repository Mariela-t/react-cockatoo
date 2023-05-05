import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <ul className={styles.bar}>
        <li className={styles.list}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/quote" className={styles.link}>
            Quote
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
