import React, { createContext } from 'react';

import type { CheckboxChangeEvent } from './Checkbox';

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxGroupContext {
  name?: string;
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export interface AbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 指定可选项
   * @default []
   */
  options?: Array<CheckboxOptionType | string | number>;
  /**
   * 整组失效
   * @default false
   */
  disabled?: boolean;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  /**
   * CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性
   */
  name?: string;
  /**
   * 默认选中的选项
   * @default []
   */
  defaultValue?: Array<CheckboxValueType>;
  /**
   * 指定选中的选项
   * @default []
   */
  value?: Array<CheckboxValueType>;
  children?: React.ReactNode;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

export const GroupContext = createContext<CheckboxGroupContext | null>(null);
