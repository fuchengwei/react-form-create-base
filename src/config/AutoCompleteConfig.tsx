import React from 'react'
import { Form, Input, Switch } from 'antd'
import { useConfig } from '@/hooks'
import OptionSourceTypeConfig from '@/config/OptionSourceTypeConfig'

const AutoCompleteConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="ClassName">
        <Input
          value={selectWidgetItem?.config?.dropdownClassName}
          placeholder="下拉菜单的 className 属性"
          onChange={(event) => handleChange(event.target.value, 'config.dropdownClassName')}
        />
      </Form.Item>

      <Form.Item label="下拉列表为空时显示的内容">
        <Input
          placeholder="当下拉列表为空时显示的内容"
          value={selectWidgetItem?.config?.notFoundContent}
          onChange={(event) => handleChange(event.target.value, 'config.notFoundContent')}
        />
      </Form.Item>

      <OptionSourceTypeConfig />

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="支持清除">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="使用键盘选择选项的时候把选中项回填到输入框中">
        <Switch defaultChecked={selectWidgetItem?.config?.backfill} onChange={(checked) => handleChange(checked, 'config.backfill')} />
      </Form.Item>

      <Form.Item label="是否默认高亮第一个选项">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultActiveFirstOption} onChange={(checked) => handleChange(checked, 'config.defaultActiveFirstOption')} />
      </Form.Item>

      <Form.Item label="是否默认展开下拉菜单">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultOpen} onChange={(checked) => handleChange(checked, 'config.defaultOpen')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default AutoCompleteConfig
