import React from "react";

import styles from "../../styles/Home.module.css";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 40%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the best website without 1c</div>
        <h1 className={styles.head}>The best Shop<br></br>
                                    About Clothes
        </h1>
        <button className={styles.button}><a target='_blank'> купить</a></button>
      </div>

    </div>
  </section>    
);

export default Poster;
