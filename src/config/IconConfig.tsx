import React from 'react'
import { Form, Input, InputNumber, Switch } from 'antd'
import { SketchPicker } from 'react-color'
import { useConfig } from '@/hooks'

const IconConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="IconName">
        <Input value={selectWidgetItem?.config?.iconName} onChange={(event) => handleChange(event.target.value, 'config.iconName')} />
      </Form.Item>

      <Form.Item label="Size">
        <InputNumber
          style={{ width: '100%' }}
          formatter={(value) => `${value}px`}
          value={selectWidgetItem?.config?.fontSize}
          onChange={(value) => handleChange(value, 'config.fontSize')}
        />
      </Form.Item>

      <Form.Item label="Color">
        <SketchPicker width="93%" color={selectWidgetItem?.config?.color} onChange={(color) => handleChange(color.hex, 'config.color')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>
    </>
  )
}

export default IconConfig
