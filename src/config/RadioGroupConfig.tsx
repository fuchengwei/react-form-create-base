import React from 'react'
import { Form, Input, Radio, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import OptionSourceTypeConfig from '@/config/OptionSourceTypeConfig'
import { radioGroupButtonStyleOptions, radioGroupOptionTypeOptions, sizeOptions } from '@/utils/options'

const RadioGroupConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="RadioOptions类型">
        <Radio.Group
          buttonStyle="solid"
          optionType="button"
          options={radioGroupOptionTypeOptions}
          value={selectWidgetItem?.config?.optionType}
          onChange={(event) => handleChange(event.target.value, 'config.optionType')}
        />
      </Form.Item>

      <Form.Item label="RadioButton样式">
        <Radio.Group
          buttonStyle="solid"
          optionType="button"
          options={radioGroupButtonStyleOptions}
          value={selectWidgetItem?.config?.buttonStyle}
          onChange={(event) => handleChange(event.target.value, 'config.buttonStyle')}
        />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            大小
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

      <OptionSourceTypeConfig />

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default RadioGroupConfig
