import React from 'react'
import { Button, DatePicker, Dropdown, Form, Input, Radio, Space, Switch } from 'antd'
import moment from 'moment'
import { useConfig } from '@/hooks'
import { datePickerTypeOptions, sizeOptions } from '@/utils/options'

const RangePickerConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder (使用“-”分割)">
        <Input
          placeholder="输入框提示文字"
          value={selectWidgetItem?.config?.placeholder && selectWidgetItem?.config?.placeholder.join('-')}
          onChange={(event) => handleChange(event.target.value ? event.target.value.split('-') : undefined, 'config.placeholder')}
        />
      </Form.Item>

      <Form.Item label="默认日期">
        <DatePicker.RangePicker
          value={
            selectWidgetItem?.formItemConfig?.initialValue?.length === 2
              ? [moment(selectWidgetItem.formItemConfig.initialValue[0]), moment(selectWidgetItem.formItemConfig.initialValue[1])]
              : undefined
          }
          onChange={(_, dateStrings) =>
            handleChange(
              dateStrings.filter((dateString) => dateString),
              'formItemConfig.initialValue'
            )
          }
        />
      </Form.Item>

      <Form.Item label="日期格式">
        <Input placeholder="设置日期格式" value={selectWidgetItem?.config?.format} onChange={(event) => handleChange(event.target.value, 'config.format')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            输入框大小
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

      <Form.Item label="选择器类型">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={datePickerTypeOptions}
          value={selectWidgetItem?.config?.picker}
          onChange={(event) => {
            let format: string
            switch (event.target.value) {
              case 'date':
                format = 'YYYY-MM-DD HH:mm:ss'
                break
              case 'week':
                format = 'YYYY-ww'
                break
              case 'month':
                format = 'YYYY-MM'
                break
              case 'quarter':
                format = 'YYYY-Qo'
                break
              case 'year':
                format = 'YYYY'
                break
              default:
                format = ''
            }
            handleChange(format, 'config.format')
            handleChange(event.target.value, 'config.picker')
          }}
        />
      </Form.Item>

      <Form.Item label="选择器 className">
        <Input placeholder="className" value={selectWidgetItem?.config?.className} onChange={(event) => handleChange(event.target.value, 'config.className')} />
      </Form.Item>

      <Form.Item label="额外的弹出日历 className">
        <Input placeholder="className" value={selectWidgetItem?.config?.dropdownClassName} onChange={(event) => handleChange(event.target.value, 'config.dropdownClassName')} />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否显示清除按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="是否有边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="设置输入框为只读">
        <Switch defaultChecked={selectWidgetItem?.config?.inputReadOnly} onChange={(checked) => handleChange(checked, 'config.inputReadOnly')} />
      </Form.Item>

      <Form.Item label="是否增加时间选择功能">
        <Switch defaultChecked={selectWidgetItem?.config?.showTime} onChange={(checked) => handleChange(checked, 'config.showTime')} />
      </Form.Item>

      <Form.Item label="当设定了增加时间选择的时候是否显示“此刻”按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.showNow} onChange={(checked) => handleChange(checked, 'config.showNow')} />
      </Form.Item>

      <Form.Item label="是否显示“今天”按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.showToday} onChange={(checked) => handleChange(checked, 'config.showToday')} />
      </Form.Item>
    </>
  )
}

export default RangePickerConfig
