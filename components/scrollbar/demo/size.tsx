import React from 'react';
import { Row, Col } from 'antd';
import { css } from '@emotion/react'
import { Scrollbar, theme } from 'sensoro-design';

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

  return (
    <Row>
      <Col span={12}>
        <Scrollbar height={400}>
          {(Array.from({ length: 20 }, () => ({}))).map((_, index) => {
            return (
              // @ts-ignore
              <p key={index} css={styles.item}>{index + 1}</p>
            )
          })}
        </Scrollbar>
      </Col>
      <Col span={12}>
        <Scrollbar height={400} size="small">
          {(Array.from({ length: 20 }, () => ({}))).map((_, index) => {
            return (
              // @ts-ignore
              <p key={index} css={styles.item}>{index + 1}</p>
            )
          })}
        </Scrollbar>
      </Col>
    </Row>
  )
}

export default Demo;
