import React from "react";
import styles from "../../styles/Home.module.css";
import bannerImg from "../../images/convers.jpg";

const Banner = () => (
  <section className={styles.banner}> 
    <div className={styles.left}>
      <p className={styles.content}>
        NEW 1C
        <span>SALE</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
    </div>
  </section>
);

export default Banner;
