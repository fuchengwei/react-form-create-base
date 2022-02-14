import React from 'react'
import { Form, Input, Radio, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { switchSizeOptions } from '@/utils/options'

const SwitchConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="默认值">
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.initialValue} onChange={(checked) => handleChange(checked, 'formItemConfig.initialValue')} />
      </Form.Item>

      <Form.Item label="ClassName">
        <Input placeholder="Switch 器类名" value={selectWidgetItem?.config?.className} onChange={(event) => handleChange(event.target.value, 'config.className')} />
      </Form.Item>

      <Form.Item label="选中时的内容">
        <Input value={selectWidgetItem?.config?.checkedChildren} onChange={(event) => handleChange(event.target.value, 'config.checkedChildren')} />
      </Form.Item>

      <Form.Item label="非选中时的内容">
        <Input value={selectWidgetItem?.config?.unCheckedChildren} onChange={(event) => handleChange(event.target.value, 'config.unCheckedChildren')} />
      </Form.Item>

      <Form.Item label="按钮大小">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={switchSizeOptions}
          value={selectWidgetItem?.config?.size}
          onChange={(event) => handleChange(event.target.value, 'config.size')}
        />
      </Form.Item>

      <Form.Item label="组件自动获取焦点">
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

export default SwitchConfig
