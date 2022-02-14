import React from 'react'
import { Form, Input, Radio, Switch } from 'antd'
import { useConfig } from '@/hooks'
import OptionSourceTypeConfig from '@/config/OptionSourceTypeConfig'
import { mentionsPlacementOptions } from '@/utils/options'

const MentionsConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="下拉列表为空时显示的内容">
        <Input value={selectWidgetItem?.config?.notFoundContent} onChange={(event) => handleChange(event.target.value, 'config.notFoundContent')} />
      </Form.Item>

      <Form.Item label="设置触发关键词">
        <Input value={selectWidgetItem?.config?.prefix} onChange={(event) => handleChange(event.target.value, 'config.prefix')} />
      </Form.Item>

      <Form.Item label="设置选中项前后分隔符">
        <Input value={selectWidgetItem?.config?.split} onChange={(event) => handleChange(event.target.value, 'config.split')} />
      </Form.Item>

      <Form.Item label="弹出层展示位置">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={mentionsPlacementOptions}
          value={selectWidgetItem?.config?.placement}
          onChange={(event) => handleChange(event.target.value, 'config.placement')}
        />
      </Form.Item>

      <OptionSourceTypeConfig />

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="自适应内容高度">
        <Switch defaultChecked={selectWidgetItem?.config?.autoSize} onChange={(checked) => handleChange(checked, 'config.autoSize')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="是否只读">
        <Switch defaultChecked={selectWidgetItem?.config?.readOnly} onChange={(checked) => handleChange(checked, 'config.readOnly')} />
      </Form.Item>
    </>
  )
}

export default MentionsConfig
