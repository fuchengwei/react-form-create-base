import React, { Dispatch } from 'react'
import { Menu } from 'antd'
import { locales } from '@/locale'

const createOptions = (option: string) => ({ label: option, value: option })

// 事件
export const eventOptions = (events: Record<string, any>, setEventName: Dispatch<string>, setFunctionEditorVisible: Dispatch<boolean>) => (
  <Menu>
    {Object.keys(events).map((option) => (
      <Menu.Item
        key={option}
        onClick={() => {
          setEventName(option)
          setFunctionEditorVisible(true)
        }}
      >
        {option}
      </Menu.Item>
    ))}
  </Menu>
)

// 生命周期
export const lifecycleOptions = (setEventName: Dispatch<string>, setFunctionEditorVisible: Dispatch<boolean>) => (
  <Menu>
    {[
      {
        label: 'Mount',
        fieldName: 'componentDidMount'
      },
      {
        label: 'Update',
        fieldName: 'componentDidUpdate'
      },
      {
        label: 'Destroy',
        fieldName: 'componentDidDestroy'
      }
    ].map((option) => (
      <Menu.Item
        key={option.label}
        onClick={() => {
          setEventName(option.fieldName)
          setFunctionEditorVisible(true)
        }}
      >
        {option.label}
      </Menu.Item>
    ))}
  </Menu>
)

// 按钮形状
export const buttonShapeOptions = ['default', 'circle', 'round'].map(createOptions)

// 按钮类型
export const buttonTypeOptions = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'].map(createOptions)

// htmlButton类型
export const htmlButtonTypeOptions = ['button', 'submit', 'reset'].map(createOptions)

// Size
export const sizeOptions = ['small', 'middle', 'large'].map(createOptions)

// SwitchSize
export const switchSizeOptions = ['default', 'small'].map(createOptions)

// TableSize
export const tableSizeOptions = ['default', 'middle', 'small'].map(createOptions)

// 文本方向
export const textDirectionOptions = ['ltr', 'rtl'].map(createOptions)

// 标题位置
export const orientationOptions = ['left', 'center', 'right'].map(createOptions)

// 方向类型
export const directionTypeOptions = ['horizontal', 'vertical'].map(createOptions)

// 文本类型
export const textTypeOptions = ['secondary', 'success', 'warning', 'danger'].map(createOptions)

// 警告提示类型
export const alertTypeOptions = ['success', 'info', 'warning', 'error'].map(createOptions)

// 垂直对齐方式
export const alignOptions = ['top', 'middle', 'bottom'].map(createOptions)

// 水平排列方式
export const justifyOptions = ['start', 'end', 'center', 'space-around', 'space-between'].map(createOptions)

// 间距对齐方式
export const spaceAlignOptions = ['start', 'end', 'center', 'baseline'].map(createOptions)

// 标签对齐方式
export const labelAlignOptions = ['left', 'right'].map(createOptions)

// 布局方式
export const layoutOptions = [
  {
    label: '水平排列',
    value: 'horizontal'
  },
  {
    label: '垂直排列',
    value: 'vertical'
  }
]

// 重要程度
export const levelOptions = [1, 2, 3, 4, 5].map((option) => ({
  label: `H${option}`,
  value: option
}))

// 上传列表样式类型
export const uploadListTypeOptions = ['text', 'picture', 'picture-card'].map(createOptions)

// 上传请求方法
export const uploadRequestMethodOptions = ['POST', 'PUT', 'GET', 'DELETE'].map(createOptions)

// 来源类型
export const sourceOptions = ['静态数据', '远端数据'].map(createOptions)

// 验证时机
export const validateTriggerOptions = ['onBlur', 'onChange'].map(createOptions)

// 验证类型
export const validateTypeOptions = [
  { label: '字符串', value: 'string' },
  { label: '数字', value: 'number' },
  { label: '布尔值', value: 'boolean' },
  { label: '方法', value: 'method' },
  { label: '正则表达式', value: 'regexp' },
  { label: '整数', value: 'integer' },
  { label: '浮点数', value: 'float' },
  { label: '数组', value: 'array' },
  { label: '对象', value: 'object' },
  { label: '枚举', value: 'enum' },
  { label: '日期', value: 'date' },
  { label: 'URL地址', value: 'url' },
  { label: '十六进制', value: 'hex' },
  { label: '邮箱地址', value: 'email' },
  { label: '任意类型', value: 'any' }
]

// 次级菜单展开类型
export const expandTriggerOptions = ['click', 'hover'].map(createOptions)

// 浮层位置
export const placementOptions = [
  { label: '左上', value: 'topLeft' },
  { label: '右上', value: 'topRight' },
  { label: '左下', value: 'bottomLeft' },
  { label: '右下', value: 'bottomRight' }
]

// 提及浮层位置
export const mentionsPlacementOptions = [
  { label: '上方', value: 'top' },
  { label: '下方', value: 'bottom' }
]

// 日期选择器类型
export const datePickerTypeOptions = [
  { label: '日期', value: 'date' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
  { label: '季度', value: 'quarter' },
  { label: '年', value: 'year' }
]

// 单选框组按钮样式
export const radioGroupButtonStyleOptions = [
  { label: '描边', value: 'outline' },
  { label: '填色', value: 'solid' }
]

// 单选框组Option类型
export const radioGroupOptionTypeOptions = [
  { label: '默认', value: 'default' },
  { label: '按钮', value: 'button' }
]

// 选择框模式
export const selectModeOptions = [
  { label: '多选', value: 'multiple' },
  { label: '标签', value: 'tags' }
]

// 树选择回填方式
export const treeSelectShowCheckedStrategyOptions = [
  { label: '只显示子节点', value: 'SHOW_CHILD' },
  { label: '只显示父节点', value: 'SHOW_PARENT' },
  { label: '显示所有选中节点', value: 'SHOW_ALL' }
]

// 响应式布局断点类型
export const breakpointOptions = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(createOptions)

// 主题
export const themeOptions = ['light', 'dark'].map(createOptions)

// 国际化
export const localeOptions = locales.map((option) => ({
  label: option.label,
  value: option.locale.locale,
  locale: option.locale
}))
