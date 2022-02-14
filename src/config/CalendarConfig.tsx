import React from 'react'
import { DatePicker, Form, Switch } from 'antd'
import moment from 'moment'
import { useConfig } from '@/hooks'

const CalendarConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="默认日期">
        <DatePicker
          value={selectWidgetItem?.config?.defaultValue && moment(selectWidgetItem.config.defaultValue)}
          onChange={(_, dateString) => handleChange(dateString, 'config.defaultValue')}
        />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否全屏显示">
        <Switch defaultChecked={selectWidgetItem?.config?.fullscreen} onChange={(checked) => handleChange(checked, 'config.fullscreen')} />
      </Form.Item>
    </>
  )
}

export default CalendarConfig
