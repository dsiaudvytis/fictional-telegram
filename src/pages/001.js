import React from 'react';
import styles from './001.module.css';

const Dot = ({ selected = false }) => selected ? (
  <div className={styles.greenBorder} >
    <div className={styles.greenDot} />
  </div>
) : (
  <div className={styles.dot} />
);

export default () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.backButton}>&lt;</div>
      <div className={styles.settingsButton}>O</div>
    </div>
    <div className={styles.mid}>
      <div className={styles.card}>
        <div className={styles.rating}>★ 4.9
          <div className={styles.outOf}>/5</div>
        </div>
        <div className={styles.discover}>
          Discover
        </div>
        <div className={styles.title}>
          Arches National Park
        </div>
        <div className={styles.dots}>
          {Array.from({ length: 9 }, (_, n) => (<Dot selected={n === 3} />))}
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.button}></div>
      <div className={styles.button}></div>
      <div className={styles.button}></div>
    </div>
  </div>
);
