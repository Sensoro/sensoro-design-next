import { PinCode } from '@sensoro-design/react';
import { useRef, useState } from 'react';

function Basic() {
  const [code, setCode] = useState('28');
  const ref = useRef();

  return (
    <div style={{ marginTop: 500, paddingLeft: 500 }}>
      {/* 受控
      <PinCode
        value={code}
        onChange={setCode}
        onComplete={(v) => console.log('onComplete', v)}
      /> */}
      <div style={{ marginTop: 100 }}>非受控</div>
      <PinCode
        ref={ref}
        size="lg"
        autoFocus
        onComplete={(v) => console.log('onComplete', v)}
      />
      <button style={{ marginRight: 24 }} onClick={() => ref.current.clear()}>
        清除
      </button>
      <button onClick={() => ref.current.focus(2)}>聚焦第三个</button>
    </div>
  );
}

export default Basic;
