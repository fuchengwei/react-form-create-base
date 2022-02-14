import React from 'react'
import { Form, Input, Select, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { levelOptions, textTypeOptions } from '@/utils/options'

const TitleConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="内容">
        <Input value={selectWidgetItem?.config?.children} onChange={(event) => handleChange(event.target.value, 'config.children')} />
      </Form.Item>

      <Form.Item label="文本类型">
        <Select options={textTypeOptions} allowClear value={selectWidgetItem?.config?.type} onChange={(value) => handleChange(value, 'config.type')} />
      </Form.Item>

      <Form.Item label="重要程度">
        <Select options={levelOptions} value={selectWidgetItem?.config?.level} onChange={(value) => handleChange(value, 'config.level')} />
      </Form.Item>

      <Form.Item label="添加Code样式">
        <Switch defaultChecked={selectWidgetItem?.config?.code} onChange={(checked) => handleChange(checked, 'config.code')} />
      </Form.Item>

      <Form.Item label="是否可拷贝">
        <Switch defaultChecked={selectWidgetItem?.config?.copyable} onChange={(checked) => handleChange(checked, 'config.copyable')} />
      </Form.Item>

      <Form.Item label="添加删除线样式">
        <Switch defaultChecked={selectWidgetItem?.config?.delete} onChange={(checked) => handleChange(checked, 'config.delete')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="是否可编辑">
        <Switch defaultChecked={selectWidgetItem?.config?.editable} onChange={(checked) => handleChange(checked, 'config.editable')} />
      </Form.Item>

      <Form.Item label="自动溢出省略">
        <Switch defaultChecked={selectWidgetItem?.config?.ellipsis} onChange={(checked) => handleChange(checked, 'config.ellipsis')} />
      </Form.Item>

      <Form.Item label="添加标记样式">
        <Switch defaultChecked={selectWidgetItem?.config?.mark} onChange={(checked) => handleChange(checked, 'config.mark')} />
      </Form.Item>

      <Form.Item label="是否加粗">
        <Switch defaultChecked={selectWidgetItem?.config?.strong} onChange={(checked) => handleChange(checked, 'config.strong')} />
      </Form.Item>

      <Form.Item label="是否斜体">
        <Switch defaultChecked={selectWidgetItem?.config?.italic} onChange={(checked) => handleChange(checked, 'config.italic')} />
      </Form.Item>

      <Form.Item label="添加下划线样式">
        <Switch defaultChecked={selectWidgetItem?.config?.underline} onChange={(checked) => handleChange(checked, 'config.underline')} />
      </Form.Item>
    </>
  )
}

export default TitleConfig
