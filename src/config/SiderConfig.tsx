import React from 'react'
import { Form, Input, InputNumber, Radio, Select, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { breakpointOptions, themeOptions } from '@/utils/options'

const SiderConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="宽度">
        <Input value={selectWidgetItem?.config?.width} onChange={(event) => handleChange(event.target.value, 'config.width')} />
      </Form.Item>

      <Form.Item label="收缩宽度">
        <InputNumber value={selectWidgetItem?.config?.collapsedWidth} onChange={(event) => handleChange(event.target.value, 'config.collapsedWidth')} />
      </Form.Item>

      <Form.Item label="触发响应式布局的断点">
        <Select options={breakpointOptions} value={selectWidgetItem?.config?.breakpoint} onChange={(value) => handleChange(value, 'config.breakpoint')} />
      </Form.Item>

      <Form.Item label="主题颜色">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={themeOptions}
          value={selectWidgetItem?.config?.theme}
          onChange={(event) => handleChange(event.target.value, 'config.theme')}
        />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否可收起">
        <Switch defaultChecked={selectWidgetItem?.config?.collapsible} onChange={(checked) => handleChange(checked, 'config.collapsible')} />
      </Form.Item>

      <Form.Item label="是否默认收起">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultCollapsed} onChange={(checked) => handleChange(checked, 'config.defaultCollapsed')} />
      </Form.Item>

      <Form.Item label="翻转折叠提示箭头的方向">
        <Switch defaultChecked={selectWidgetItem?.config?.reverseArrow} onChange={(checked) => handleChange(checked, 'config.reverseArrow')} />
      </Form.Item>
    </>
  )
}

export default SiderConfig
