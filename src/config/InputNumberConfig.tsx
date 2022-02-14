import React from 'react'
import { Form, Input, InputNumber, Radio, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { sizeOptions } from '@/utils/options'

const InputNumberConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="默认值">
        <InputNumber value={selectWidgetItem?.formItemConfig?.initialValue} onChange={(value) => handleChange(value, 'formItemConfig.initialValue')} />
      </Form.Item>

      <Form.Item label="前置标签">
        <Input placeholder="输入框前置标签" value={selectWidgetItem?.config?.addonBefore} onChange={(event) => handleChange(event.target.value, 'config.addonBefore')} />
      </Form.Item>

      <Form.Item label="后置标签">
        <Input placeholder="输入框后置标签" value={selectWidgetItem?.config?.addonAfter} onChange={(event) => handleChange(event.target.value, 'config.addonAfter')} />
      </Form.Item>

      <Form.Item label="前缀图标">
        <Input placeholder="输入框前缀图标" value={selectWidgetItem?.config?.prefix} onChange={(event) => handleChange(event.target.value, 'config.prefix')} />
      </Form.Item>

      <Form.Item label="步长">
        <InputNumber value={selectWidgetItem?.config?.step} onChange={(value) => handleChange(value, 'config.step')} />
      </Form.Item>

      <Form.Item label="数值精度">
        <InputNumber value={selectWidgetItem?.config?.precision} onChange={(value) => handleChange(value, 'config.precision')} />
      </Form.Item>

      <Form.Item label="小数点分割符号">
        <Input value={selectWidgetItem?.config?.decimalSeparator} onChange={(event) => handleChange(event.target.value, 'config.decimalSeparator')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            控件大小
            {selectWidgetItem?.config?.size && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.size')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={sizeOptions}
          value={selectWidgetItem?.config?.size}
          onChange={(event) => handleChange(event.target.value, 'config.size')}
        />
      </Form.Item>

      <Form.Item label="最大值">
        <InputNumber value={selectWidgetItem?.config?.max} onChange={(value) => handleChange(value, 'config.max')} />
      </Form.Item>

      <Form.Item label="最小值">
        <InputNumber value={selectWidgetItem?.config?.min} onChange={(value) => handleChange(value, 'config.min')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="是否有边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否显示增减按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.controls} onChange={(checked) => handleChange(checked, 'config.controls')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="是否启用键盘快捷行为">
        <Switch defaultChecked={selectWidgetItem?.config?.keyboard} onChange={(checked) => handleChange(checked, 'config.keyboard')} />
      </Form.Item>

      <Form.Item label="是否只读">
        <Switch defaultChecked={selectWidgetItem?.config?.readOnly} onChange={(checked) => handleChange(checked, 'config.readOnly')} />
      </Form.Item>

      <Form.Item label="是否开启字符值模式（支持高精度小数）">
        <Switch defaultChecked={selectWidgetItem?.config?.stringMode} onChange={(checked) => handleChange(checked, 'config.stringMode')} />
      </Form.Item>
    </>
  )
}

export default InputNumberConfig
