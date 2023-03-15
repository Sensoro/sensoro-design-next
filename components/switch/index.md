---
category: Components
title: Switch
subtitle: 开关
demo:
  cols: 2
group:
  title: 数据录入
  order: 60
---

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/disabled.tsx">禁用</code>
<code src="./demo/type.tsx">不同类型</code>
<code src="./demo/loading.tsx">加载中</code>
<code src="./demo/text.tsx">文字和图标</code>
<code src="./demo/size.tsx">不同尺寸</code>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 额外的样式类 | string        | --     | --  |
| autoFocus | 自动获取焦点 | boolean         | false     | --    |
| defaultChecked | 初始是否选中 | boolean | false   | --   |
| checked     | 指定当前是否选中   | boolean  | false  | --   |
| loading     | 加载中的开关   | boolean  | false  | --   |
| disabled     | 是否禁用   | boolean  | false  | --   |
| checkedText     | 选中时的内容   | ReactNode  | --  | --   |
| unCheckedText   | 非选中时的内容   | ReactNode  | --  | --   |
| size   | 开关大小，可选值：default small   | string  | default  | --   |
| onChange   | 变化时的回调函数   | function(checked: boolean, event: Event)  | --  | --   |
| onClick   | 点击时的回调函数   | function(checked: boolean, event: Event)  | --  | --   |
