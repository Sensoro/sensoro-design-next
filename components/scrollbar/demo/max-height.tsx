import React, { useState } from 'react';
import { css } from '@emotion/react'
import { Scrollbar, Button, Space, theme, } from 'sensoro-design';

const { useToken } = theme;

const useStyle = () => {
  const { token } = useToken();

  return {
    item: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      margin: 10,
      textAlign: 'center',
      borderRadius: 4,
      background: token.colorPrimaryBg,
    })
  }
}

const Demo: React.FC = () => {
  const styles = useStyle();
  const [count, setCount] = useState(3)

  const handleAdd = () => {
    setCount(count => count + 1);
  }
  const handleDelete = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  }

  return (
    <>
      <Space>
        <Button onClick={handleAdd}>Add Item</Button>
        <Button onClick={handleDelete}>Delete Item</Button>
      </Space>
      <Scrollbar maxHeight={400}>
      {(Array.from({ length: count }, () => ({}))).map((_, index) => {
        return (
          // @ts-ignore
          <p key={index} css={styles.item}>{index + 1}</p>
        )
      })}
    </Scrollbar>
    </>
  )
}

export default Demo;
