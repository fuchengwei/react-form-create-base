import React from 'react'
import { Form, Input, InputNumber, Switch } from 'antd'
import { useConfig } from '@/hooks'

const ImageConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="图片地址">
        <Input value={selectWidgetItem?.config?.src} onChange={(event) => handleChange(event.target.value, 'config.src')} />
      </Form.Item>

      <Form.Item label="加载失败容错地址">
        <Input value={selectWidgetItem?.config?.fallback} onChange={(event) => handleChange(event.target.value, 'config.fallback')} />
      </Form.Item>

      <Form.Item label="图像描述">
        <Input value={selectWidgetItem?.config?.alt} onChange={(event) => handleChange(event.target.value, 'config.alt')} />
      </Form.Item>

      <Form.Item label="图像宽度">
        <InputNumber value={selectWidgetItem?.config?.width} onChange={(value) => handleChange(value, 'config.width')} />
      </Form.Item>

      <Form.Item label="图像高度">
        <InputNumber value={selectWidgetItem?.config?.height} onChange={(value) => handleChange(value, 'config.height')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>
    </>
  )
}

export default ImageConfig
