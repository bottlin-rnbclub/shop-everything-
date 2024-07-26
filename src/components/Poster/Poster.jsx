import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 1c%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the best website without 1c</div>
        <h1 className={styles.head}>If (React == false) return алкоголизм + 1с</h1>
        <button className={styles.button}><a target='_blank' href={'https://1c.ru/'}>совершить самоубийство</a></button>
      </div>
      <div className={styles.image}>
        <img width={350} height={600}  src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
