import React from 'react'
import { Form, InputNumber, Switch } from 'antd'
import { useConfig } from '@/hooks'

const ColConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="Flex布局属性">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.flex} onChange={(value) => handleChange(value, 'config.flex')} />
      </Form.Item>

      <Form.Item label="栅格左侧间隔数">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.offset} onChange={(value) => handleChange(value, 'config.offset')} />
      </Form.Item>

      <Form.Item label="栅格顺序">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.order} onChange={(value) => handleChange(value, 'config.order')} />
      </Form.Item>

      <Form.Item label="栅格向左移动格数">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.pull} onChange={(value) => handleChange(value, 'config.pull')} />
      </Form.Item>

      <Form.Item label="栅格向右移动格数">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.push} onChange={(value) => handleChange(value, 'config.push')} />
      </Form.Item>

      <Form.Item label="栅格占位格数">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.span} onChange={(value) => handleChange(value, 'config.span')} />
      </Form.Item>

      <Form.Item label="屏幕 < 576px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.xs} onChange={(value) => handleChange(value, 'config.xs')} />
      </Form.Item>

      <Form.Item label="屏幕 ≥ 576px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.sm} onChange={(value) => handleChange(value, 'config.sm')} />
      </Form.Item>

      <Form.Item label="屏幕 ≥ 768px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.md} onChange={(value) => handleChange(value, 'config.md')} />
      </Form.Item>

      <Form.Item label="屏幕 ≥ 992px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.lg} onChange={(value) => handleChange(value, 'config.lg')} />
      </Form.Item>

      <Form.Item label="屏幕 ≥ 1200px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.xl} onChange={(value) => handleChange(value, 'config.xl')} />
      </Form.Item>

      <Form.Item label="屏幕 ≥ 1600px 响应式栅格">
        <InputNumber style={{ width: '100%' }} value={selectWidgetItem?.config?.xxl} onChange={(value) => handleChange(value, 'config.xxl')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>
    </>
  )
}

export default ColConfig
