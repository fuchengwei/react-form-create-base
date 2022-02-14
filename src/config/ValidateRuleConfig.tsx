import React, { FC } from 'react'
import { Form, Radio, Switch, Select, Space, Input, InputNumber } from 'antd'
import { useConfig } from '@/hooks'
import { validateTriggerOptions, validateTypeOptions } from '@/utils/options'

const ValidateRuleConfig: FC = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <h4>验证规则</h4>
      <Form.Item label="触发时机">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={selectWidgetItem?.formItemConfig?.rules[0].validateTrigger}
          options={validateTriggerOptions}
          onChange={(event) => handleChange(event.target.value, 'formItemConfig.rules[0].validateTrigger')}
        />
      </Form.Item>
      <Form.Item label="是否为必选字段">
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.rules[0].required} onChange={(checked) => handleChange(checked, 'formItemConfig.rules[0].required')} />
      </Form.Item>
      <Form.Item label="仅警告，不阻塞表单提交">
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.rules[0].warningOnly} onChange={(checked) => handleChange(checked, 'formItemConfig.rules[0].warningOnly')} />
      </Form.Item>
      <Form.Item label="是否校验空格（只在类型为 string 时生效）">
        <Switch defaultChecked={selectWidgetItem?.formItemConfig?.rules[0].whitespace} onChange={(checked) => handleChange(checked, 'formItemConfig.rules[0].whitespace')} />
      </Form.Item>
      <Form.Item label="校验类型">
        <Select value={selectWidgetItem?.formItemConfig?.rules[0].type} options={validateTypeOptions} onChange={(value) => handleChange(value, 'formItemConfig.rules[0].type')} />
      </Form.Item>
      <Form.Item label="校验文案">
        <Input
          placeholder="错误信息，不设置时会通过模板自动生成"
          value={selectWidgetItem?.formItemConfig?.rules[0].message}
          onChange={(event) => handleChange(event.target.value, 'formItemConfig.rules[0].message')}
        />
      </Form.Item>
      <Form.Item
        label={
          <Space>
            字段长度
            {selectWidgetItem?.formItemConfig?.rules[0].len !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.rules[0].len')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
          value={selectWidgetItem?.formItemConfig?.rules[0].len}
          onChange={(value) => handleChange(value, 'formItemConfig.rules[0].len')}
        />
      </Form.Item>
      <Form.Item
        label={
          <Space>
            最大长度
            {selectWidgetItem?.formItemConfig?.rules[0].max !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.rules[0].max')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
          value={selectWidgetItem?.formItemConfig?.rules[0].max}
          onChange={(value) => handleChange(value, 'formItemConfig.rules[0].max')}
        />
      </Form.Item>
      <Form.Item
        label={
          <Space>
            最小长度
            {selectWidgetItem?.formItemConfig?.rules[0].min !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'formItemConfig.rules[0].min')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
          value={selectWidgetItem?.formItemConfig?.rules[0].min}
          onChange={(value) => handleChange(value, 'formItemConfig.rules[0].min')}
        />
      </Form.Item>
      <Form.Item label="正则表达式">
        <Input value={selectWidgetItem?.formItemConfig?.rules[0].pattern} onChange={(event) => handleChange(event.target.value, 'formItemConfig.rules[0].pattern')} />
      </Form.Item>
    </>
  )
}

export default ValidateRuleConfig
