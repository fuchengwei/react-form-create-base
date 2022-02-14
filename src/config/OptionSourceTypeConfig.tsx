import React, { FC } from 'react'
import { Form, Radio, Input, Button, Space, Checkbox } from 'antd'
import Sortable from 'sortablejs'
import { clone } from 'lodash-es'
import SvgIcon from '@/components/SvgIcon'
import { useConfig } from '@/hooks'
import { sourceOptions } from '@/utils/options'

interface Props {
  multiple?: boolean
}

const OptionSourceTypeConfig: FC<Props> = (props) => {
  const { multiple } = props

  const { selectWidgetItem, handleChange, sourceType, setSourceType } = useConfig()

  const sortableGroupDecorator = (instance: HTMLUListElement | null) => {
    if (instance) {
      const options: Sortable.Options = {
        ghostClass: 'ghost',
        handle: '.drag-item',
        group: {
          name: 'options'
        },
        onEnd: (event) => {
          const { newIndex, oldIndex } = event
          const configOptions: [] = clone(selectWidgetItem!.config!.options)
          const oldOption = configOptions.splice(oldIndex!, 1)

          configOptions.splice(newIndex!, 0, ...oldOption)
          handleChange(configOptions, 'config.options')
        }
      }

      Sortable.create(instance, options)
    }
  }

  return (
    <Form.Item label="选项">
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        options={sourceOptions}
        value={sourceType}
        onChange={(e) => {
          setSourceType(e.target.value)
          handleChange(e.target.value === '远端数据', 'remoteConfig.remote')
        }}
      />
      {sourceType === '静态数据' ? (
        <>
          {multiple ? (
            <Checkbox.Group defaultValue={selectWidgetItem?.formItemConfig?.initialValue} onChange={(checkedValue) => handleChange(checkedValue, 'formItemConfig.initialValue')}>
              <ul ref={sortableGroupDecorator}>
                {selectWidgetItem?.config?.options?.map((option: { label: string; value: string }, index: number) => (
                  <li key={option.value}>
                    <Checkbox value={option.value}>
                      <div className="option-item">
                        <Input
                          value={option.label}
                          size="small"
                          onChange={(event) => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions[index].label = event.target.value
                            handleChange(configOptions, 'config.options')
                          }}
                        />
                        <Input
                          value={option.value}
                          size="small"
                          onChange={(event) => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions[index].value = event.target.value
                            handleChange(configOptions, 'config.options')
                          }}
                        />
                        <SvgIcon name="Item" className="drag-item" />
                        <Button
                          type="primary"
                          shape="circle"
                          size="small"
                          onClick={() => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions.splice(index, 1)
                            handleChange(configOptions, 'config.options')
                          }}
                        >
                          <SvgIcon name="Delete" />
                        </Button>
                      </div>
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </Checkbox.Group>
          ) : (
            <Radio.Group defaultValue={selectWidgetItem?.formItemConfig?.initialValue}>
              <ul ref={sortableGroupDecorator}>
                {selectWidgetItem?.config?.options?.map((option: { label: string; value: string }, index: number) => (
                  <li key={option.value}>
                    <Radio value={option.value} onChange={(e) => handleChange(e.target.value, 'formItemConfig.initialValue')}>
                      <div className="option-item">
                        <Input
                          value={option.label}
                          size="small"
                          onChange={(event) => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions[index].label = event.target.value
                            handleChange(configOptions, 'config.options')
                          }}
                        />
                        <Input
                          value={option.value}
                          size="small"
                          onChange={(event) => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions[index].value = event.target.value
                            handleChange(configOptions, 'config.options')
                          }}
                        />
                        <SvgIcon name="Item" className="drag-item" />
                        <Button
                          type="primary"
                          shape="circle"
                          size="small"
                          onClick={() => {
                            const configOptions = clone(selectWidgetItem!.config!.options)
                            configOptions.splice(index, 1)
                            handleChange(configOptions, 'config.options')
                          }}
                        >
                          <SvgIcon name="Delete" />
                        </Button>
                      </div>
                    </Radio>
                  </li>
                ))}
              </ul>
            </Radio.Group>
          )}
          <Button
            className="insert-btn"
            type="link"
            size="small"
            onClick={() => {
              const configOptions = clone(selectWidgetItem!.config!.options)
              const value = `Option${configOptions.length + 1}`
              configOptions.push({ label: value, value })
              handleChange(configOptions, 'config.options')
            }}
          >
            添加选项
          </Button>
        </>
      ) : (
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
        </Space>
      )}
    </Form.Item>
  )
}

OptionSourceTypeConfig.defaultProps = {
  multiple: false
}

export default OptionSourceTypeConfig
