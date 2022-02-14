import React from 'react'
import { Form, Switch } from 'antd'
import { useConfig } from '@/hooks'

const TreeConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否自动展开父节点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoExpandParent} onChange={(checked) => handleChange(checked, 'config.autoExpandParent')} />
      </Form.Item>

      <Form.Item label="是否节点占据一行">
        <Switch defaultChecked={selectWidgetItem?.config?.blockNode} onChange={(checked) => handleChange(checked, 'config.blockNode')} />
      </Form.Item>

      <Form.Item label="节点前添加 Checkbox 复选框">
        <Switch defaultChecked={selectWidgetItem?.config?.checkable} onChange={(checked) => handleChange(checked, 'config.checkable')} />
      </Form.Item>

      <Form.Item label="checkable 状态下节点选择完全受控">
        <Switch defaultChecked={selectWidgetItem?.config?.checkStrictly} onChange={(checked) => handleChange(checked, 'config.checkStrictly')} />
      </Form.Item>

      <Form.Item label="默认展开所有树节点">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultExpandAll} onChange={(checked) => handleChange(checked, 'config.defaultExpandAll')} />
      </Form.Item>

      <Form.Item label="默认展开父节点">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultExpandParent} onChange={(checked) => handleChange(checked, 'config.defaultExpandParent')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="是否可拖拽">
        <Switch defaultChecked={selectWidgetItem?.config?.draggable} onChange={(checked) => handleChange(checked, 'config.draggable')} />
      </Form.Item>

      <Form.Item label="是否多选">
        <Switch defaultChecked={selectWidgetItem?.config?.multiple} onChange={(checked) => handleChange(checked, 'config.multiple')} />
      </Form.Item>

      <Form.Item label="是否可选中">
        <Switch defaultChecked={selectWidgetItem?.config?.selectable} onChange={(checked) => handleChange(checked, 'config.selectable')} />
      </Form.Item>

      <Form.Item label="是否展示连接线">
        <Switch defaultChecked={selectWidgetItem?.config?.showLine} onChange={(checked) => handleChange(checked, 'config.showLine')} />
      </Form.Item>

      <Form.Item label="是否启用虚拟滚动">
        <Switch defaultChecked={selectWidgetItem?.config?.virtual} onChange={(checked) => handleChange(checked, 'config.virtual')} />
      </Form.Item>
    </>
  )
}

export default TreeConfig
