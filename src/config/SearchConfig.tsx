import React from 'react'
import { Form, Input, InputNumber, Radio, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { sizeOptions } from '@/utils/options'

const SearchConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input placeholder="输入框提示文字" value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="默认值">
        <Input
          placeholder="输入框默认值"
          value={selectWidgetItem?.formItemConfig?.initialValue}
          onChange={(event) => handleChange(event.target.value, 'formItemConfig.initialValue')}
        />
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

      <Form.Item label="后缀图标">
        <Input placeholder="输入框后缀图标" value={selectWidgetItem?.config?.suffix} onChange={(event) => handleChange(event.target.value, 'config.suffix')} />
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

      <Form.Item label="最大长度">
        <InputNumber value={selectWidgetItem?.config?.maxLength} onChange={(value) => handleChange(value, 'config.maxLength')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否有确认按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.enterButton} onChange={(checked) => handleChange(checked, 'config.enterButton')} />
      </Form.Item>

      <Form.Item label="是否显示清除按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="是否有边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="是否展示数字">
        <Switch defaultChecked={selectWidgetItem?.config?.showCount} onChange={(checked) => handleChange(checked, 'config.showCount')} />
      </Form.Item>
    </>
  )
}

export default SearchConfig
