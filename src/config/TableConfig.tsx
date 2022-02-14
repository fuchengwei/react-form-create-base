import React from 'react'
import { Form, Input, Radio, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { tableSizeOptions } from '@/utils/options'

const TableConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="表格Key值">
        <Input value={selectWidgetItem?.config?.rowKey} onChange={(event) => handleChange(event.target.value, 'config.rowKey')} />
      </Form.Item>

      <Form.Item label="表格大小">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={tableSizeOptions}
          value={selectWidgetItem?.config?.size}
          onChange={(event) => handleChange(event.target.value, 'config.size')}
        />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否展示外边框和列边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否显示表头">
        <Switch defaultChecked={selectWidgetItem?.config?.showHeader} onChange={(checked) => handleChange(checked, 'config.showHeader')} />
      </Form.Item>

      <Form.Item label="表头是否显示下一次排序的 tooltip 提示">
        <Switch defaultChecked={selectWidgetItem?.config?.showSorterTooltip} onChange={(checked) => handleChange(checked, 'config.showSorterTooltip')} />
      </Form.Item>
    </>
  )
}

export default TableConfig
