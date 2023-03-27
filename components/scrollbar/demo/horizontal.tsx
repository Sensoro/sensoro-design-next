import React from 'react';
import { css } from '@emotion/react'
import { Scrollbar, theme } from 'sensoro-design';

const { useToken } = theme;

const useStyle = () => {
  const { token } = useToken();

  return {
    content: css({
      display: 'flex',
    }),
    item: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 100,
      height: 50,
      margin: 10,
      textAlign: 'center',
      borderRadius: 4,
      background: token.colorErrorBg,
    })
  }
}

const Demo: React.FC = () => {
  const styles = useStyle();

  return (
    <Scrollbar>
      {/* @ts-ignore */}
      <div css={styles.content}>
        {(Array.from({ length: 50 }, () => ({}))).map((_, index) => {
          return (
            // @ts-ignore
            <p key={index} css={styles.item}>{index + 1}</p>
          )
        })}
      </div>
    </Scrollbar>
  )
}

export default Demo;
