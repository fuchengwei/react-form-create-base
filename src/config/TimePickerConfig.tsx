import React from 'react'
import { Form, Input, InputNumber, Radio, Space, Switch, TimePicker } from 'antd'
import moment from 'moment'
import { useConfig } from '@/hooks'
import { sizeOptions } from '@/utils/options'

const TimePickerConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input placeholder="输入框提示文字" value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="默认时间">
        <TimePicker
          placeholder="请选择默认时间"
          value={selectWidgetItem?.formItemConfig?.initialValue && moment(selectWidgetItem.formItemConfig.initialValue, selectWidgetItem?.config?.format)}
          onChange={(_, timeString) => handleChange(timeString, 'formItemConfig.initialValue')}
        />
      </Form.Item>

      <Form.Item label="日期格式">
        <Input placeholder="设置日期格式" value={selectWidgetItem?.config?.format} onChange={(event) => handleChange(event.target.value || undefined, 'config.format')} />
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

      <Form.Item label="选择器 className">
        <Input placeholder="选择器类名" value={selectWidgetItem?.config?.className} onChange={(event) => handleChange(event.target.value, 'config.className')} />
      </Form.Item>

      <Form.Item label="弹出层 className">
        <Input placeholder="弹出层类名" value={selectWidgetItem?.config?.popupClassName} onChange={(event) => handleChange(event.target.value, 'config.popupClassName')} />
      </Form.Item>

      <Form.Item label="清除按钮的提示文案">
        <Input value={selectWidgetItem?.config?.clearText} onChange={(event) => handleChange(event.target.value, 'config.clearText')} />
      </Form.Item>

      <Form.Item label="自定义的选择框后缀图标">
        <Input value={selectWidgetItem?.config?.suffixIcon} onChange={(event) => handleChange(event.target.value, 'config.suffixIcon')} />
      </Form.Item>

      <Form.Item label="小时选项间隔">
        <InputNumber min={0} value={selectWidgetItem?.config?.hourStep} onChange={(value) => handleChange(value, 'config.hourStep')} />
      </Form.Item>

      <Form.Item label="分钟选项间隔">
        <InputNumber min={0} value={selectWidgetItem?.config?.minuteStep} onChange={(value) => handleChange(value, 'config.minuteStep')} />
      </Form.Item>

      <Form.Item label="秒选项间隔">
        <InputNumber min={0} value={selectWidgetItem?.config?.secondStep} onChange={(value) => handleChange(value, 'config.secondStep')} />
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

      <Form.Item label="隐藏禁止选择的选项">
        <Switch defaultChecked={selectWidgetItem?.config?.hideDisabledOptions} onChange={(checked) => handleChange(checked, 'config.hideDisabledOptions')} />
      </Form.Item>

      <Form.Item label="是否显示“此刻”按钮">
        <Switch defaultChecked={selectWidgetItem?.config?.showNow} onChange={(checked) => handleChange(checked, 'config.showNow')} />
      </Form.Item>

      <Form.Item label="使用 12 小时制">
        <Switch
          defaultChecked={selectWidgetItem?.config?.use12Hours}
          onChange={(checked) => {
            handleChange(checked ? 'h:mm:ss a' : 'HH:mm:ss', 'config.format')
            handleChange(checked, 'config.use12Hours')
          }}
        />
      </Form.Item>
    </>
  )
}

export default TimePickerConfig
