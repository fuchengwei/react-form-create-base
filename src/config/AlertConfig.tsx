import React from 'react'
import { Form, Input, Select, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { alertTypeOptions } from '@/utils/options'

const AlertConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="警告提示内容">
        <Input value={selectWidgetItem?.config?.message} onChange={(event) => handleChange(event.target.value, 'config.message')} />
      </Form.Item>

      <Form.Item label="警告提示的辅助性文字介绍">
        <Input value={selectWidgetItem?.config?.description} onChange={(event) => handleChange(event.target.value, 'config.description')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            警告提示样式
            {selectWidgetItem?.config?.type && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.type')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Select options={alertTypeOptions} value={selectWidgetItem?.config?.type} onChange={(value) => handleChange(value, 'config.type')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否用作顶部公告">
        <Switch defaultChecked={selectWidgetItem?.config?.banner} onChange={(checked) => handleChange(checked, 'config.banner')} />
      </Form.Item>

      <Form.Item label="默认不显示关闭按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.closable} onChange={(checked) => handleChange(checked, 'config.closable')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否显示辅助图标
            {selectWidgetItem?.config?.type && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.showIcon')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.config?.showIcon} onChange={(checked) => handleChange(checked, 'config.showIcon')} />
      </Form.Item>
    </>
  )
}

export default AlertConfig
