import React from 'react'
import { Form, Input, InputNumber, Switch } from 'antd'
import { useConfig } from '@/hooks'

const RateConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="默认值">
        <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.initialValue} onChange={(value) => handleChange(value, 'formItemConfig.initialValue')} />
      </Form.Item>

      <Form.Item label="Star总数">
        <InputNumber min={0} value={selectWidgetItem?.config?.count} onChange={(value) => handleChange(value, 'config.count')} />
      </Form.Item>

      <Form.Item label="自定义字符">
        <Input value={selectWidgetItem?.config?.character} onChange={(event) => handleChange(event.target.value || undefined, 'config.character')} />
      </Form.Item>

      <Form.Item label="自定义样式类名">
        <Input value={selectWidgetItem?.config?.className} onChange={(event) => handleChange(event.target.value, 'config.className')} />
      </Form.Item>

      <Form.Item label="自定义每项提示信息（用“,”分割）">
        <Input value={selectWidgetItem?.config?.tooltips?.join(',')} onChange={(event) => handleChange(event.target.value.split(','), 'config.tooltips')} />
      </Form.Item>

      <Form.Item label="是否允许再次点击后清除">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="是否允许半选">
        <Switch defaultChecked={selectWidgetItem?.config?.allowHalf} onChange={(checked) => handleChange(checked, 'config.allowHalf')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default RateConfig
