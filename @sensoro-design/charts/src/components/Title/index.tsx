import React from 'react';

interface TitleProps {
  text?: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return text ? (
    <h3 style={{ fontSize: 16, lineHeight: '24px', marginBottom: 0 }}>
      {text}
    </h3>
  ) : null;
};

export default Title;
