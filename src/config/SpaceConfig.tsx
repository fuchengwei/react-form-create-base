import React from 'react'
import { Form, Radio, Select, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { directionTypeOptions, sizeOptions, spaceAlignOptions } from '@/utils/options'

const SpaceConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="间距方向">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={directionTypeOptions}
          value={selectWidgetItem?.config?.direction}
          onChange={(event) => handleChange(event.target.value, 'config.direction')}
        />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            间距大小
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

      <Form.Item label="对齐方式">
        <Select allowClear options={spaceAlignOptions} value={selectWidgetItem?.config?.align} onChange={(value) => handleChange(value, 'config.align')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否自动换行">
        <Switch defaultChecked={selectWidgetItem?.config?.wrap} onChange={(checked) => handleChange(checked, 'config.wrap')} />
      </Form.Item>
    </>
  )
}

export default SpaceConfig
