---
category: Components
title: Button
subtitle: 按钮
group:
  title: 通用
  order: 1
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Sensoro Design 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">按钮类型</code>
<code src="./demo/disabled.tsx">不可用状态</code>
<code src="./demo/shape.tsx">按钮形状</code>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 额外的样式类 | string        | --     | --  |
| autoFocus | 自动获取焦点 | boolean         | false     | --    |
| loading   | 设置按钮载入状态 | boolean \| { delay: number } | false     | --    |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType  | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |  |
