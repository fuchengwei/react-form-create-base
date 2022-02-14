import React, { FC } from 'react'
import { Form, Radio, Switch, InputNumber, Space } from 'antd'
import { useConfig } from '@/hooks'
import { labelAlignOptions } from '@/utils/options'

const FormItemLayoutConfig: FC = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <h4>布局配置</h4>
      <Form.Item
        label={
          <Space>
            标签对齐方式
            {selectWidgetItem?.formItemConfig?.labelAlign && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.labelAlign')
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
          options={labelAlignOptions}
          value={selectWidgetItem?.formItemConfig?.labelAlign}
          onChange={(event) => handleChange(event.target.value, 'formItemConfig.labelAlign')}
        />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否显示label后面的冒号
            {selectWidgetItem?.formItemConfig?.colon !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.colon')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.colon} onChange={(checked) => handleChange(checked, 'formItemConfig.colon')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            标签文本换行方式
            {selectWidgetItem?.formItemConfig?.labelWrap !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.labelWrap')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.labelWrap} onChange={(checked) => handleChange(checked, 'formItemConfig.labelWrap')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            标签布局
            {selectWidgetItem?.formItemConfig?.labelCol && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.labelCol')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <span className="label">span</span>
        <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.labelCol?.span} onChange={(value) => handleChange(value, 'formItemConfig.labelCol.span')} />
        <span className="label">offset</span>
        <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.labelCol?.offset} onChange={(value) => handleChange(value, 'formItemConfig.labelCol.offset')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            输入控件布局
            {selectWidgetItem?.formItemConfig?.wrapperCol && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.wrapperCol')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <span className="label">span</span>
        <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.wrapperCol?.span} onChange={(value) => handleChange(value, 'formItemConfig.wrapperCol.span')} />
        <span className="label">offset</span>
        <InputNumber min={0} value={selectWidgetItem?.formItemConfig?.wrapperCol?.offset} onChange={(value) => handleChange(value, 'formItemConfig.wrapperCol.offset')} />
      </Form.Item>
    </>
  )
}

export default FormItemLayoutConfig
