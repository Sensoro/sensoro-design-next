import React, { useEffect, useRef } from 'react';
import XGPlayer from 'xgplayer';
import 'xgplayer/dist/index.min.css';

export function Player() {
  const rootRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<XGPlayer>();

  useEffect(() => {
    if (rootRef.current) {
      playerRef.current = new XGPlayer({
        el: rootRef.current,
        url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
        poster: '//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg',
        height: '100%',
        width: '100%',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootRef.current]);

  return (
    <div ref={rootRef} style={{ width: '100%', height: '100%' }} />
  );
}
