import React from 'react'
import { Form, Input, InputNumber, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'

const SliderConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="默认值">
        {selectWidgetItem?.config?.range ? (
          <>
            <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.initialValue?.[0]} onChange={(value) => handleChange(value || 0, 'formItemConfig.initialValue[0]')} />
            <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.initialValue?.[1]} onChange={(value) => handleChange(value || 0, 'formItemConfig.initialValue[1]')} />
          </>
        ) : (
          <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.initialValue} onChange={(value) => handleChange(value || 0, 'formItemConfig.initialValue')} />
        )}
      </Form.Item>

      <Form.Item label="最大值">
        <InputNumber value={selectWidgetItem?.config?.max} onChange={(value) => handleChange(value, 'config.max')} />
      </Form.Item>

      <Form.Item label="最小值">
        <InputNumber value={selectWidgetItem?.config?.min} onChange={(value) => handleChange(value, 'config.min')} />
      </Form.Item>

      <Form.Item label="步长">
        <InputNumber value={selectWidgetItem?.config?.step} onChange={(value) => handleChange(value, 'config.step')} />
      </Form.Item>

      <Form.Item label="是否支持清除(单选模式有效)">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="是否只能拖拽到刻度上">
        <Switch defaultChecked={selectWidgetItem?.config?.dots} onChange={(checked) => handleChange(checked, 'config.dots')} />
      </Form.Item>

      <Form.Item label="双滑块模式">
        <Switch
          defaultChecked={selectWidgetItem?.config?.range}
          onChange={(checked) => {
            handleChange(checked ? [0, 0] : 0, 'formItemConfig.initialValue')
            handleChange(checked ? 'array' : 'number', 'formItemConfig.rules[0].type')
            setTimeout(() => handleChange(checked, 'config.range'), 100)
          }}
        />
      </Form.Item>

      <Form.Item label="反向坐标轴">
        <Switch defaultChecked={selectWidgetItem?.config?.reverse} onChange={(checked) => handleChange(checked, 'config.reverse')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否始终显示Tooltip
            {selectWidgetItem?.config?.tooltipVisible !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.tooltipVisible')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.config?.tooltipVisible} onChange={(checked) => handleChange(checked, 'config.tooltipVisible')} />
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

export default SliderConfig
