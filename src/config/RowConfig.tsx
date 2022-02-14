import React from 'react'
import { Form, InputNumber, Radio, Select, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { alignOptions, justifyOptions } from '@/utils/options'

const RowConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="垂直对齐方式">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={alignOptions}
          value={selectWidgetItem?.config?.align}
          onChange={(event) => handleChange(event.target.value, 'config.align')}
        />
      </Form.Item>

      <Form.Item label="水平排列方式">
        <Select options={justifyOptions} value={selectWidgetItem?.config?.justify} onChange={(value) => handleChange(value, 'config.justify')} />
      </Form.Item>

      <Form.Item label="栅格间隔">
        <InputNumber style={{ width: '100%' }} min={0} value={selectWidgetItem?.config?.gutter} onChange={(value) => handleChange(value ?? 0, 'config.gutter')} />
      </Form.Item>

      <Form.Item label="是否自动换行">
        <Switch defaultChecked={selectWidgetItem?.config?.wrap} onChange={(checked) => handleChange(checked, 'config.wrap')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>
    </>
  )
}

export default RowConfig
