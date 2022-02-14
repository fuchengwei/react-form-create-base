import React from 'react'
import { Form, Input, Radio, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { directionTypeOptions, orientationOptions } from '@/utils/options'

const DividerConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="内容">
        <Input value={selectWidgetItem?.config?.children} onChange={(event) => handleChange(event.target.value, 'config.children')} />
      </Form.Item>

      <Form.Item label="标题位置">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={orientationOptions}
          value={selectWidgetItem?.config?.orientation}
          onChange={(event) => handleChange(event.target.value, 'config.orientation')}
        />
      </Form.Item>

      <Form.Item label="分割线类型">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={directionTypeOptions}
          value={selectWidgetItem?.config?.type}
          onChange={(event) => handleChange(event.target.value, 'config.type')}
        />
      </Form.Item>

      <Form.Item label="是否虚线">
        <Switch defaultChecked={selectWidgetItem?.config?.dashed} onChange={(checked) => handleChange(checked, 'config.dashed')} />
      </Form.Item>

      <Form.Item label="是否普通正文样式">
        <Switch defaultChecked={selectWidgetItem?.config?.plain} onChange={(checked) => handleChange(checked, 'config.plain')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>
    </>
  )
}

export default DividerConfig
