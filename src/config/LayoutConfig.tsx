import React from 'react'
import { Form, Switch } from 'antd'
import { useConfig } from '@/hooks'

const LayoutConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <Form.Item label="是否隐藏">
      <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
    </Form.Item>
  )
}

export default LayoutConfig
