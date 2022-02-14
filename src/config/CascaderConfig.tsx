import React from 'react'
import { Space, Form, Input, Switch, Radio } from 'antd'
import { useConfig } from '@/hooks'
import { expandTriggerOptions, placementOptions, sizeOptions } from '@/utils/options'

const CascaderConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="自定义类名">
        <Input value={selectWidgetItem?.config?.className} placeholder="下拉菜单的 className 属性" onChange={(event) => handleChange(event.target.value, 'config.className')} />
      </Form.Item>

      <Form.Item label="自定义浮层类名">
        <Input
          value={selectWidgetItem?.config?.dropdownClassName}
          placeholder="自定义浮层类名"
          onChange={(event) => handleChange(event.target.value, 'config.dropdownClassName')}
        />
      </Form.Item>

      <Form.Item label="NotFoundContent">
        <Input
          value={selectWidgetItem?.config?.notFoundContent}
          placeholder="当下拉列表为空时显示的内容"
          onChange={(event) => handleChange(event.target.value, 'config.notFoundContent')}
        />
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

      <Form.Item label="次级菜单的展开方式">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={expandTriggerOptions}
          value={selectWidgetItem?.config?.expandTrigger}
          onChange={(event) => handleChange(event.target.value, 'config.expandTrigger')}
        />
      </Form.Item>

      <Form.Item label="浮层位置">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={placementOptions}
          value={selectWidgetItem?.config?.placement}
          onChange={(event) => handleChange(event.target.value, 'config.placement')}
        />
      </Form.Item>

      <Form.Item label="远端数据">
        <Space direction="vertical" style={{ marginTop: '10px' }}>
          <Input
            value={selectWidgetItem?.remoteConfig?.remoteFunc}
            onChange={(event) => handleChange(event.target.value, 'remoteConfig.remoteFunc')}
            size="small"
            addonBefore="远端方法"
          />
          <Input
            value={selectWidgetItem?.remoteConfig?.remoteProps?.label}
            onChange={(event) => handleChange(event.target.value, 'remoteConfig.remoteProps.label')}
            size="small"
            addonBefore="标签"
          />
          <Input
            value={selectWidgetItem?.remoteConfig?.remoteProps?.value}
            onChange={(event) => handleChange(event.target.value, 'remoteConfig.remoteProps.value')}
            size="small"
            addonBefore="值"
          />
          <Input
            value={selectWidgetItem?.remoteConfig?.remoteProps?.children}
            onChange={(event) => handleChange(event.target.value, 'remoteConfig.remoteProps.children')}
            size="small"
            addonBefore="子选项"
          />
        </Space>
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="支持清除">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="是否有边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否点选每级菜单选项值都会发生变化">
        <Switch defaultChecked={selectWidgetItem?.config?.changeOnSelect} onChange={(checked) => handleChange(checked, 'config.changeOnSelect')} />
      </Form.Item>

      <Form.Item label="是否在选择框中显示搜索框">
        <Switch defaultChecked={selectWidgetItem?.config?.showSearch} onChange={(checked) => handleChange(checked, 'config.showSearch')} />
      </Form.Item>

      <Form.Item label="是否支持多选节点">
        <Switch defaultChecked={selectWidgetItem?.config?.multiple} onChange={(checked) => handleChange(checked, 'config.multiple')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default CascaderConfig
