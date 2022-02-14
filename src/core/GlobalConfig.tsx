import React, { FC, useContext, useMemo } from 'react'
import { Form, Input, InputNumber, Radio, Select, Switch } from 'antd'
import { debounce } from 'lodash-es'
import { changeMomentLocale } from '@/locale'
import { DesignContext } from '@/store'
import { ActionType } from '@/store/action'
import { loadJsLink } from '@/utils'
import { labelAlignOptions, layoutOptions, localeOptions, sizeOptions, textDirectionOptions } from '@/utils/options'

const loadJsLinkDebouncedFunc = debounce(loadJsLink, 1000)

const GlobalConfig: FC = () => {
  const {
    state: { iconSrc, globalConfig, formConfig },
    dispatch
  } = useContext(DesignContext)

  const handleGlobalConfigChange = <T extends keyof typeof globalConfig>(fieldName: T, value: typeof globalConfig[T]) => {
    const action = {
      type: ActionType.SET_GLOBAL_CONFIG,
      payload: {
        ...globalConfig,
        [fieldName]: value
      }
    }

    dispatch(action)
  }

  const handleFormConfigChange = <T extends keyof typeof formConfig>(fieldName: T, value: typeof formConfig[T]) => {
    const action = {
      type: ActionType.SET_FORM_CONFIG,
      payload: {
        ...formConfig,
        [fieldName]: value
      }
    }

    dispatch(action)
  }

  const handleLocaleChange = (value: string, option: any) => {
    handleGlobalConfigChange('locale', option.locale)
    const locale = value.startsWith('zh') ? value : value.split('-')[0]
    changeMomentLocale(locale)
  }

  const handleIconSrcChange = (value: string) => {
    loadJsLinkDebouncedFunc(value)

    const action = {
      type: ActionType.SET_ICON_SRC,
      payload: value
    }

    dispatch(action)
  }

  return (
    <>
      {useMemo(
        () => (
          <Form layout="vertical">
            <Form.Item label="组件尺寸">
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                options={sizeOptions}
                value={globalConfig.componentSize}
                onChange={(event) => handleGlobalConfigChange('componentSize', event.target.value)}
              />
            </Form.Item>

            <Form.Item label="文本方向">
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                options={textDirectionOptions}
                value={globalConfig.direction}
                onChange={(event) => handleGlobalConfigChange('direction', event.target.value)}
              />
            </Form.Item>

            <Form.Item label="国际化">
              <Select options={localeOptions} value={globalConfig.locale?.locale} onChange={handleLocaleChange} />
            </Form.Item>

            <Form.Item label="Icon地址">
              <Input placeholder="Iconfont Symbol" value={iconSrc} onChange={(event) => handleIconSrcChange(event.target.value)} />
            </Form.Item>

            <h4>表单配置</h4>

            <Form.Item label="表单布局">
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                options={layoutOptions}
                value={formConfig.layout}
                onChange={(event) => handleFormConfigChange('layout', event.target.value)}
              />
            </Form.Item>

            <Form.Item label="标签对齐方式">
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                options={labelAlignOptions}
                value={formConfig.labelAlign}
                onChange={(event) => handleFormConfigChange('labelAlign', event.target.value)}
              />
            </Form.Item>

            <Form.Item label="是否显示label后面的冒号">
              <Switch defaultChecked={formConfig.colon} onChange={(checked) => handleFormConfigChange('colon', checked)} />
            </Form.Item>

            <Form.Item label="标签文本换行方式">
              <Switch defaultChecked={formConfig.labelWrap} onChange={(checked) => handleFormConfigChange('labelWrap', checked)} />
            </Form.Item>

            <Form.Item label="标签布局">
              <span className="label">span</span>
              <InputNumber
                min={0}
                value={formConfig.labelCol?.span}
                onChange={(value) => {
                  formConfig.labelCol!.span = value
                  handleFormConfigChange('labelCol', formConfig.labelCol)
                }}
              />
              <span className="label">offset</span>
              <InputNumber
                min={0}
                value={formConfig.labelCol?.offset}
                onChange={(value) => {
                  formConfig.labelCol!.offset = value
                  handleFormConfigChange('labelCol', formConfig.labelCol)
                }}
              />
            </Form.Item>

            <Form.Item label="输入控件布局">
              <span className="label">span</span>
              <InputNumber
                min={0}
                value={formConfig.wrapperCol?.span}
                onChange={(value) => {
                  formConfig.wrapperCol!.span = value
                  handleFormConfigChange('wrapperCol', formConfig.wrapperCol)
                }}
              />
              <span className="label">offset</span>
              <InputNumber
                min={0}
                value={formConfig.wrapperCol?.offset}
                onChange={(value) => {
                  formConfig.wrapperCol!.offset = value
                  handleFormConfigChange('wrapperCol', formConfig.wrapperCol)
                }}
              />
            </Form.Item>
          </Form>
        ),
        [globalConfig, formConfig]
      )}
    </>
  )
}

export default GlobalConfig
