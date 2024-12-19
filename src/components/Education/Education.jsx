import React from "react";
import styles from "./Education.module.css";
export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/10.png"
          alt="me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* <li className={styles.aboutItems} >
            <img src="/assets/about/ec.png" alt="+2" />
            <div className={styles.aboutItemText}>
              <h3>Higher secondary education</h3>
              <p> EMEA HSS kondotty.2019-21</p>
            </div>

          </li> */}
          <li className={styles.aboutItem}>
            <img src="/assets/about/1.png" alt="+2" />
            <div>
              <h3>Higher secondary education</h3>
              <p>EMEA HSS kondotty.2019-21</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/2.png" alt="+2" />
            <div>
              <h3>Bachelor of Science in Electronics</h3>
              <p>University of Calicut, 2021-24</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/3.png" alt="+2" />
            <div className={styles.aboutItemText}>
              <h3>Master of Science in Electronics</h3>
              <p>Cochin University of Science and Technology 2024-</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
