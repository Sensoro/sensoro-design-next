import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { useConfigContext } from '../config-provider';

export interface PinCodeProps {
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  /** 输入框数量 */
  count?: number;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export interface PinCodeRefs {
  /** 获取当前 code */
  getCode: () => string;
  /** 聚焦 */
  focus: (index: number) => void;
  /** 清空输入框 */
  clear: () => void;
}

const PinCode = forwardRef<PinCodeRefs, PinCodeProps>(
  (
    {
      count = 6,
      size = 'md',
      className,
      value,
      style,
      defaultValue,
      autoFocus = false,
      onChange,
      onComplete,
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext('PinCode');
    const prefixCls = getPrefixCls!('pc');

    const [valueList, setValueList] = useState<string[]>(() => {
      if (value || defaultValue) {
        return Array.from({ length: count }).map(
          (_, i) => (value ?? defaultValue)![i] ?? '',
        );
      }
      return Array.from({ length: count }).fill('') as string[];
    });
    const wrapperRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      focus: (index: number) => {
        const inputs = wrapperRef.current!.querySelectorAll('input');
        if (index < count) {
          inputs[index].focus();
        }
      },
      clear: () => {
        setValueList(Array.from({ length: count }).fill('') as string[]);
      },
      getCode: () => {
        return valueList.join('');
      },
    }));

    useEffect(() => {
      if (value && value !== valueList.join('')) {
        setValueList(
          Array.from({ length: count }).map((_, i) => value[i] ?? ''),
        );
      }
    }, [value]);

    useEffect(() => {
      const onKeyDown = (evt: KeyboardEvent) => {
        const inputs = wrapperRef.current?.querySelectorAll('input');

        if (!inputs) {
          return;
        }

        const code = evt.keyCode || evt.which;
        const { tagName, id } = document.activeElement ?? {};
        if ([37, 39].includes(code)) {
          const operate = code === 37 ? -1 : 1;
          const index = tagName === 'INPUT' ? Number(id) + operate : 0;
          if (index >= 0 && index < count) {
            inputs[index].focus();
          }
        }
      };

      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }, []);

    const inputElements = useMemo(
      () =>
        Array.from({ length: count })
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={`input-${index}`}
                className={clsx(`${prefixCls}-input-wrapper`, {
                  [`${prefixCls}-sm`]: size === 'sm',
                  [`${prefixCls}-lg`]: size === 'lg',
                })}
              >
                <input
                  id={`${index}`}
                  type="number"
                  autoFocus={autoFocus && index === 0}
                  value={valueList[index]}
                  // 手动限制 maxLength
                  onInput={(e: any) => {
                    const len = e.target.value.length;
                    const prev = valueList[index];

                    if (len > 1) {
                      const str = e.target.value.split('');
                      const same = str.every((v: string) => v === prev);

                      if (same) {
                        e.target.value = prev;
                        return;
                      }
                      e.target.value = str.find((v: string) => v !== prev);
                    }
                  }}
                  onKeyDown={(e) => {
                    if ([38, 40].includes(e.keyCode)) {
                      // 禁用上下键监听
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    const v = [...valueList];
                    v.splice(index, 1, e.target.value);

                    setValueList(v);
                    onChange?.(v.join(''));

                    const inputs =
                      wrapperRef.current!.querySelectorAll('input');

                    // 输入的过程
                    if (e.target.value) {
                      // 最后一个 代表完成
                      if (index === count - 1) {
                        inputs[index].blur();
                        onComplete?.(v.join(''));
                        return;
                      }
                      // 自动聚焦下一个
                      inputs[index + 1].focus();
                      return;
                    }

                    // 删除的过程
                    if (index !== 0) {
                      // 自动聚焦上一个
                      inputs[index - 1].focus();
                    }
                  }}
                />
              </div>
            );
          }),
      [count, valueList],
    );

    return (
      <div
        className={clsx(`${prefixCls}-wrapper`, className)}
        style={style}
        ref={wrapperRef}
      >
        {inputElements}
      </div>
    );
  },
);

export default PinCode;
