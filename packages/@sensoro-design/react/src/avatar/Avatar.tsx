import React, { forwardRef, useEffect, useState } from 'react';
import * as AvatarPrimitive from '@lotus-design/react-primitives/es/avatar';
import type { AvatarProps } from './interface';

const Avatar = forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  (props: AvatarProps, forwardedRef) => {
    const { src } = props;
    const [, setScale] = useState(1);
    const [isImgExist, setIsImgExist] = useState(true);

    useEffect(
      () => {
        setIsImgExist(true);
        setScale(1);
      },
      [src],
    );

    let childrenToRender: React.ReactNode;
    if (typeof src === 'string' && isImgExist) {
      childrenToRender = (
        <AvatarPrimitive.Image src={src} />
      );
    }

    return (
      <AvatarPrimitive.Root ref={forwardedRef}>
        {childrenToRender}
      </AvatarPrimitive.Root>
    );
  },
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
