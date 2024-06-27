import { useState } from 'react';
import styles from './index.module.css';
import { List } from './List';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.player}>播放器占位</div>
          <div className={styles.info}>
            <p>信息占位1</p>
            <p>信息占位2</p>
            <p>信息占位3</p>
            <p>信息占位4</p>
            <p>信息占位5</p>
            <button
              onClick={() => {
                setOpen(prev => !prev);
              }}
            >
              {open ? '隐藏' : '展开'}
            </button>
            {open && (
              <>
                <p>信息占位6</p>
                <p>信息占位7</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.tabs}>Tabs 占位</div>
          <div className={styles.list}>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
