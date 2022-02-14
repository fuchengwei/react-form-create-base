import React from 'react'
import { Form, Input, InputNumber, Radio, Space, Switch } from 'antd'
import { useConfig } from '@/hooks'
import OptionSourceTypeConfig from '@/config/OptionSourceTypeConfig'
import { selectModeOptions, sizeOptions } from '@/utils/options'

const SelectConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="Placeholder">
        <Input value={selectWidgetItem?.config?.placeholder} onChange={(event) => handleChange(event.target.value, 'config.placeholder')} />
      </Form.Item>

      <Form.Item label="ClassName">
        <Input
          value={selectWidgetItem?.config?.dropdownClassName}
          placeholder="下拉菜单的 className 属性"
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

      <Form.Item label="下拉列表为空时显示的内容">
        <Input
          placeholder="当下拉列表为空时显示的内容"
          value={selectWidgetItem?.config?.notFoundContent}
          onChange={(event) => handleChange(event.target.value, 'config.notFoundContent')}
        />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            选择框大小
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

      <Form.Item
        label={
          <Space>
            SelectMode
            {selectWidgetItem?.config?.mode && (
              <a
                href="/#"
                onClick={(event) => {
                  event.preventDefault()
                  handleChange('', 'formItemConfig.initialValue')
                  handleChange('string', 'formItemConfig.rules[0].type')
                  handleChange(undefined, 'config.mode')
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
          options={selectModeOptions}
          value={selectWidgetItem?.config?.mode}
          onChange={(event) => {
            handleChange([], 'formItemConfig.initialValue')
            handleChange('array', 'formItemConfig.rules[0].type')
            handleChange(event.target.value, 'config.mode')
          }}
        />
      </Form.Item>

      <OptionSourceTypeConfig multiple={selectWidgetItem?.config?.mode} />

      <Form.Item label="设置弹窗滚动高度">
        <InputNumber value={selectWidgetItem?.config?.listHeight} onChange={(value) => handleChange(value, 'config.listHeight')} />
      </Form.Item>

      <Form.Item label="最多显示多少个tag">
        <InputNumber min={0} value={selectWidgetItem?.config?.maxTagCount} onChange={(value) => handleChange(value, 'config.maxTagCount')} />
      </Form.Item>

      <Form.Item label="最大显示的tag文本长度">
        <InputNumber min={0} value={selectWidgetItem?.config?.maxTagTextLength} onChange={(value) => handleChange(value, 'config.maxTagTextLength')} />
      </Form.Item>

      <Form.Item label="OptionFilterProp">
        <Input
          value={selectWidgetItem?.config?.optionFilterProp}
          placeholder="搜索时过滤对应的 Option 属性"
          onChange={(event) => handleChange(event.target.value, 'config.optionFilterProp')}
        />
      </Form.Item>

      <Form.Item label="OptionLabelProp">
        <Input
          value={selectWidgetItem?.config?.optionLabelProp}
          placeholder="回填到选择框的 Option 的属性"
          onChange={(event) => handleChange(event.target.value, 'config.optionLabelProp')}
        />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="支持清除">
        <Switch defaultChecked={selectWidgetItem?.config?.allowClear} onChange={(checked) => handleChange(checked, 'config.allowClear')} />
      </Form.Item>

      <Form.Item label="是否在选中项后清空搜索框（只在 mode 为 multiple 或 tags 时有效）">
        <Switch defaultChecked={selectWidgetItem?.config?.autoClearSearchValue} onChange={(checked) => handleChange(checked, 'config.autoClearSearchValue')} />
      </Form.Item>

      <Form.Item label="自动获取焦点">
        <Switch defaultChecked={selectWidgetItem?.config?.autoFocus} onChange={(checked) => handleChange(checked, 'config.autoFocus')} />
      </Form.Item>

      <Form.Item label="是否有边框">
        <Switch defaultChecked={selectWidgetItem?.config?.bordered} onChange={(checked) => handleChange(checked, 'config.bordered')} />
      </Form.Item>

      <Form.Item label="是否默认高亮第一个选项">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultActiveFirstOption} onChange={(checked) => handleChange(checked, 'config.defaultActiveFirstOption')} />
      </Form.Item>

      <Form.Item label="是否默认展开下拉菜单">
        <Switch defaultChecked={selectWidgetItem?.config?.defaultOpen} onChange={(checked) => handleChange(checked, 'config.defaultOpen')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>

      <Form.Item label="下拉菜单和选择器同宽">
        <Switch defaultChecked={selectWidgetItem?.config?.dropdownMatchSelectWidth} onChange={(checked) => handleChange(checked, 'config.dropdownMatchSelectWidth')} />
      </Form.Item>

      <Form.Item label="是否根据输入项进行筛选">
        <Switch defaultChecked={selectWidgetItem?.config?.filterOption} onChange={(checked) => handleChange(checked, 'config.filterOption')} />
      </Form.Item>

      <Form.Item label="是否把每个选项的 label 包装到 value 中">
        <Switch defaultChecked={selectWidgetItem?.config?.labelInValue} onChange={(checked) => handleChange(checked, 'config.labelInValue')} />
      </Form.Item>

      <Form.Item label="使单选模式可搜索">
        <Switch defaultChecked={selectWidgetItem?.config?.showSearch} onChange={(checked) => handleChange(checked, 'config.showSearch')} />
      </Form.Item>

      <Form.Item label="是否开启虚拟滚动">
        <Switch defaultChecked={selectWidgetItem?.config?.virtual} onChange={(checked) => handleChange(checked, 'config.virtual')} />
      </Form.Item>

      <Form.Item
        label={
          <Space>
            是否显示下拉小箭头
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
    </>
  )
}

export default SelectConfig
