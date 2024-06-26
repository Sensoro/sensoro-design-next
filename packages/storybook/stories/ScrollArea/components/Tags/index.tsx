import React from 'react';
import styles from './index.module.less';

const list = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function Tags() {
  return (
    <div className={styles.content}>
      <div className={styles.text}>Tags</div>
      {list.map(tag => (
        <div className={styles.tag} key={tag}>
          {tag}
          <div className={styles.separator}></div>
        </div>
      ))}
    </div>
  );
}
