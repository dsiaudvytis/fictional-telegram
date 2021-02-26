import React from 'react';
import styles from './001.module.css';

// Perfect Pixel: -1059, -129, 1.0

const GridSvg = () => (
  <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m1 11h9c.552 0 1-.448 1-1v-9c0-.552-.448-1-1-1h-9c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1z"/>
    <path d="m23 0h-9c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-9c0-.552-.448-1-1-1z"/>
    <path d="m1 24h9c.552 0 1-.448 1-1v-9c0-.552-.448-1-1-1h-9c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1z"/>
    <path d="m23 13h-9c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-9c0-.552-.448-1-1-1z"/>
  </svg>
);

const BookmarkSvg = () => (
  <svg viewBox="-58 0 404 404.54135" xmlns="http://www.w3.org/2000/svg">
    <path d="m277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0" />
  </svg>
);

const Dot = ({ selected = false }) =>
  selected ? (
    <div className={styles.greenBorder}>
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
        <div className={styles.rating}>
          ★ 4.9
          <div className={styles.outOf}>/5</div>
        </div>
        <div className={styles.discover}>Discover</div>
        <div className={styles.title}>Arches National Park</div>
        <div className={styles.dots}>
          {Array.from({ length: 9 }, (_, n) => (
            <Dot selected={n === 3} />
          ))}
        </div>
      </div>
      <div className={`${styles.card} ${styles.leftCard}`} />
      <div className={`${styles.card} ${styles.rightCard}`} />
    </div>
    <div className={styles.footer}>
      <div className={styles.gridButton}>
        <GridSvg />
      </div>
      <div className={styles.goContainer}>
        <div className={styles.goButton}>
          <div className={styles.arrowContainer}>→</div>
        </div>
      </div>
      <div className={styles.bookmarkButton}>
        <BookmarkSvg />
      </div>
    </div>
  </div>
);
