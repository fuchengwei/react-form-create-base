import React from 'react'
import { Space, Form, Input, Switch, Radio, InputNumber, Select } from 'antd'
import { useConfig } from '@/hooks'
import { sizeOptions, treeSelectShowCheckedStrategyOptions } from '@/utils/options'

const TreeSelectConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="DropdownClassName">
        <Input
          placeholder="下拉菜单的 className 属性"
          value={selectWidgetItem?.config?.dropdownClassName}
          onChange={(event) => handleChange(event.target.value, 'config.dropdownClassName')}
        />
      </Form.Item>

      <Form.Item label="自定义的选择框后缀图标">
        <Input value={selectWidgetItem?.config?.suffixIcon} onChange={(event) => handleChange(event.target.value || undefined, 'config.suffixIcon')} />
      </Form.Item>

      <Form.Item label="MaxTagPlaceholder">
        <Input
          value={selectWidgetItem?.config?.maxTagPlaceholder}
          placeholder="隐藏 tag 时显示的内容"
          onChange={(event) => handleChange(event.target.value || undefined, 'config.maxTagPlaceholder')}
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

      <Form.Item label="设置弹窗滚动高度">
        <InputNumber value={selectWidgetItem?.config?.listHeight} onChange={(value) => handleChange(value, 'config.listHeight')} />
      </Form.Item>

      <Form.Item label="最多显示多少个tag">
        <InputNumber min={0} value={selectWidgetItem?.config?.maxTagCount} onChange={(value) => handleChange(value || undefined, 'config.maxTagCount')} />
      </Form.Item>

      <Form.Item label="TreeNodeFilterProp">
        <Input
          value={selectWidgetItem?.config?.treeNodeFilterProp}
          placeholder="输入项过滤对应的 treeNode 属性"
          onChange={(event) => handleChange(event.target.value, 'config.treeNodeFilterProp')}
        />
      </Form.Item>

      <Form.Item label="TreeNodeLabelProp">
        <Input
          value={selectWidgetItem?.config?.treeNodeLabelProp}
          placeholder="作为显示的 prop 设置"
          onChange={(event) => handleChange(event.target.value, 'config.treeNodeLabelProp')}
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

      <Form.Item label="ShowCheckedStrategy">
        <Select
          options={treeSelectShowCheckedStrategyOptions}
          value={selectWidgetItem?.config?.showCheckedStrategy}
          onChange={(value) => handleChange(value, 'config.showCheckedStrategy')}
        />
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

      <Form.Item label="显示 Checkbox">
        <Switch
          defaultChecked={selectWidgetItem?.config?.treeCheckable}
          onChange={(checked) => {
            if (checked) {
              handleChange('array', 'formItemConfig.rules[0].type')
            }
            handleChange(undefined, 'formItemConfig.initialValue')
            handleChange(checked, 'config.multiple')
            handleChange(checked, 'config.treeCheckable')
          }}
        />
      </Form.Item>

      <Form.Item label="TreeCheckStrictly">
        <Switch
          defaultChecked={selectWidgetItem?.config?.treeCheckStrictly}
          onChange={(checked) => {
            handleChange(checked, 'config.treeCheckStrictly')
            handleChange(checked, 'config.labelInValue')
          }}
        />
      </Form.Item>

      <Form.Item label="默认展开所有树节点">
        <Switch defaultChecked={selectWidgetItem?.config?.treeDefaultExpandAll} onChange={(checked) => handleChange(checked, 'config.treeDefaultExpandAll')} />
      </Form.Item>

      <Form.Item label="是否展示线条样式">
        <Switch defaultChecked={selectWidgetItem?.config?.treeLine} onChange={(checked) => handleChange(checked, 'config.treeLine')} />
      </Form.Item>

      <Form.Item label="是否开启虚拟滚动">
        <Switch defaultChecked={selectWidgetItem?.config?.virtual} onChange={(checked) => handleChange(checked, 'config.virtual')} />
      </Form.Item>

      <Form.Item label="是否把每个选项的 label 包装到 value 中">
        <Switch defaultChecked={selectWidgetItem?.config?.labelInValue} onChange={(checked) => handleChange(checked, 'config.labelInValue')} />
      </Form.Item>

      <Form.Item label="是否支持多选节点">
        <Switch defaultChecked={selectWidgetItem?.config?.multiple} onChange={(checked) => handleChange(checked, 'config.multiple')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否显示 suffixIcon
            {selectWidgetItem?.config?.showArrow !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.showArrow')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.config?.showArrow} onChange={(checked) => handleChange(checked, 'config.showArrow')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否支持搜索框
            {selectWidgetItem?.config?.showSearch !== undefined && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange(undefined, 'config.showSearch')
                }}
              >
                还原
              </a>
            )}
          </Space>
        }
      >
        <Switch defaultChecked={selectWidgetItem?.config?.showSearch} onChange={(checked) => handleChange(checked, 'config.showSearch')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default TreeSelectConfig
