import React, { FC, MouseEvent, useContext, useEffect, memo, useMemo, useRef } from 'react'
import {
  Button,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Form,
  FormInstance,
  AutoComplete,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
  Upload,
  Calendar,
  Image,
  Table,
  Tree,
  Alert
} from 'antd'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import Sortable from 'sortablejs'
import { cloneDeep, isArray, isString } from 'lodash-es'
import { v4 } from 'uuid'
import moment from 'moment'
import Icon from '@/components/Icon'
import { DesignContext } from '@/store'
import { ActionType } from '@/store/action'
import { Component } from '@/config'
import { useForceUpdate } from '@/hooks'
import { removeDomNode, createNewWidgetFormList, createMentionsOptions, handleResponseData } from '@/utils'
import SvgIcon from '@/components/SvgIcon'

interface Props {
  item: Component
  formInstance: FormInstance
}

const WidgetFormItem: FC<Props> = (props) => {
  const {
    item,
    item: { key, type, label, config, remoteConfig, customClass, dynamicProps, dynamicFormItemProps, childNodes, formItemConfig },
    formInstance
  } = props

  const {
    state: { widgetFormList, selectWidgetItem, globalState },
    dispatch
  } = useContext(DesignContext)

  const selectWidgetItemRef = useRef(selectWidgetItem)

  useEffect(() => {
    selectWidgetItemRef.current = selectWidgetItem
  }, [selectWidgetItem])

  const forceUpdate = useForceUpdate()

  const className = useMemo(
    () => `widget-item-container ${selectWidgetItem?.key === key ? 'active' : ''} ${['Row', 'Col', 'Space'].includes(type) ? 'child-nodes' : ''}`,
    [selectWidgetItem]
  )

  const commonProps: Record<string, any> = {
    ...config,
    className: `${['Row', 'Col'].includes(type) ? className : ''}`
  }

  const commonFormItemProps: Record<string, any> = {
    ...formItemConfig,
    name: key,
    label
  }

  const { hidden } = commonProps

  delete commonProps.hidden

  if (['DatePicker', 'RangePicker', 'TimePicker'].includes(type) && formItemConfig?.initialValue) {
    if (isString(formItemConfig?.initialValue)) {
      commonFormItemProps.initialValue = moment(formItemConfig.initialValue, config?.format)
    }
    if (isArray(formItemConfig?.initialValue) && formItemConfig.initialValue.length === 2) {
      commonFormItemProps.initialValue = [moment(formItemConfig.initialValue[0], config?.format), moment(formItemConfig.initialValue[1], config?.format)]
    }
  }

  if (['Calendar'].includes(type) && config?.defaultValue) {
    commonProps.defaultValue = moment(commonProps.defaultValue)
  }

  const sortableGroupDecorator = (instance: HTMLDivElement | null) => {
    if (instance) {
      const options: Sortable.Options = {
        ghostClass: 'ghost',
        handle: '.drag-widget',
        animation: 200,
        group: {
          name: 'people'
        },
        setData: (dataTransfer) => {
          dataTransfer.setData('SortableDataMove', selectWidgetItemRef.current?.key!)
        },
        onAdd: (event: any) => {
          const { newIndex } = event
          const uuid = v4().replaceAll('-', '')
          const newChildNodes = cloneDeep(childNodes ?? [])
          const SortableDataClone = event.originalEvent.dataTransfer.getData('SortableDataClone')
          const SortableDataMove = event.originalEvent.dataTransfer.getData('SortableDataMove')

          removeDomNode('.widget-form-list .form-edit-widget-label')

          if (SortableDataMove) {
            const itemEl = event.item
            const origParent = event.from
            origParent.appendChild(itemEl)

            let newSelectWidgetItem: Component

            const generateNewWidgetFormList = (list: Component[], key: string) => {
              const newList = cloneDeep(list)

              for (let index = 0; index < newList.length; index++) {
                if (newList[index].key === key) {
                  newSelectWidgetItem = newList.splice(index, 1).at(0)!
                  break
                }

                if (newList[index].childNodes) {
                  newList[index].childNodes = generateNewWidgetFormList(newList[index].childNodes!, key)
                }
              }

              return newList
            }

            const selectWidgetItemKey = SortableDataMove
            const newWidgetFormList = generateNewWidgetFormList(widgetFormList, selectWidgetItemKey)

            newChildNodes.splice(newIndex, 0, newSelectWidgetItem!)

            dispatch({
              type: ActionType.SET_WIDGET_FORM_LIST,
              payload: createNewWidgetFormList(newWidgetFormList, newChildNodes, key!)
            })
          }

          if (SortableDataClone) {
            const widgetFormItem = JSON.parse(SortableDataClone)

            const newItem = {
              ...widgetFormItem,
              key: `${widgetFormItem.type}_${uuid}`
            }

            newChildNodes.splice(newIndex, 0, newItem)

            dispatch({
              type: ActionType.SET_WIDGET_FORM_LIST,
              payload: createNewWidgetFormList(widgetFormList, newChildNodes, key!)
            })

            dispatch({
              type: ActionType.SET_SELECT_WIDGET_ITEM,
              payload: newItem
            })
          }
        }
      }

      Sortable.create(instance, options)
    }
  }

  const handleItemClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    const action = {
      type: ActionType.SET_SELECT_WIDGET_ITEM,
      payload: item
    }
    dispatch(action)
  }

  const handleCopyClick = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    let newItem

    const handleWidgetFormItem = (list: Component[]) => {
      const newList = cloneDeep(list)

      for (let index = 0; index < newList.length; index++) {
        newList[index].key = `${newList[index].type}_${v4().replaceAll('-', '')}`
        if (newList[index].childNodes) {
          newList[index].childNodes = handleWidgetFormItem(newList[index].childNodes!)
        }
      }

      return newList
    }

    const generateNewWidgetFormList = (list: Component[], key: string) => {
      const newList = cloneDeep(list)

      for (let index = 0; index < newList.length; index++) {
        if (newList[index].key === key) {
          newItem = cloneDeep(newList[index])
          newItem.key = `${item.type}_${v4().replaceAll('-', '')}`
          newList.push(newItem)

          if (newList[index].childNodes) {
            newList[index].childNodes = handleWidgetFormItem(newList[index].childNodes!)
          }
          break
        }

        if (newList[index].childNodes) {
          newList[index].childNodes = generateNewWidgetFormList(newList[index].childNodes!, key)
        }
      }

      return newList
    }

    dispatch({
      type: ActionType.SET_WIDGET_FORM_LIST,
      payload: generateNewWidgetFormList(widgetFormList, key!)
    })

    dispatch({
      type: ActionType.SET_SELECT_WIDGET_ITEM,
      payload: newItem
    })
  }

  const handleDeleteClick = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    const generateNewWidgetFormList = (list: Component[], key: string) => {
      const newList = cloneDeep(list)

      for (let index = 0; index < newList.length; index++) {
        if (newList[index].key === key) {
          newList.splice(index, 1)
          break
        }

        if (newList[index].childNodes) {
          newList[index].childNodes = generateNewWidgetFormList(newList[index].childNodes!, key)
        }
      }

      return newList
    }

    dispatch({
      type: ActionType.SET_WIDGET_FORM_LIST,
      payload: generateNewWidgetFormList(widgetFormList, key!)
    })

    dispatch({
      type: ActionType.SET_SELECT_WIDGET_ITEM,
      payload: undefined
    })
  }

  useEffect(() => {
    if (remoteConfig?.remote) {
      if (remoteConfig.remote && remoteConfig.remoteFunc) {
        fetch(remoteConfig.remoteFunc)
          .then((resp) => resp.json())
          .then((json) => {
            if (json instanceof Array) {
              remoteConfig.remoteOptions = handleResponseData(json, remoteConfig)
              forceUpdate()
            }
          })
      }
    }
  }, [remoteConfig?.remote, remoteConfig?.remoteFunc, remoteConfig?.remoteProps.label, remoteConfig?.remoteProps.value])

  useEffect(() => formInstance.resetFields([key!]), [selectWidgetItem?.formItemConfig?.initialValue])

  const render = () => {
    if (['Row', 'Col', 'Space'].includes(type)) {
      return (
        <span className={`${hidden ? 'hidden' : ''}`} style={{ display: 'contents' }} onClick={(event) => handleItemClick(event)}>
          {type === 'Row' && (
            <Row {...commonProps} ref={sortableGroupDecorator}>
              {childNodes?.map((widgetFormItem) => (
                <WidgetFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
              ))}
              {renderActionIcon()}
            </Row>
          )}
          {type === 'Col' && (
            <Col {...commonProps} ref={sortableGroupDecorator}>
              {childNodes?.map((widgetFormItem) => (
                <WidgetFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
              ))}
              {renderActionIcon()}
            </Col>
          )}
          {type === 'Space' && (
            <div className={className} ref={sortableGroupDecorator}>
              <Space {...commonProps}>
                {childNodes?.map((widgetFormItem) => (
                  <WidgetFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
                ))}
              </Space>
              {renderActionIcon()}
            </div>
          )}
        </span>
      )
    }
    return (
      <div className={`${className} ${hidden ? 'hidden' : ''}`} onClick={(event) => handleItemClick(event)}>
        {type === 'Button' && <Button {...commonProps} />}
        {type === 'Icon' && <Icon {...commonProps} />}
        {type === 'Text' && <Typography.Text {...commonProps} />}
        {type === 'Title' && <Typography.Title {...commonProps} />}
        {type === 'Paragraph' && <Typography.Paragraph {...commonProps} />}
        {type === 'Divider' && <Divider {...commonProps} />}
        {type === 'AutoComplete' && (
          <Form.Item {...commonFormItemProps}>
            <AutoComplete {...commonProps} options={remoteConfig?.remote ? remoteConfig.remoteOptions : config?.options} />
          </Form.Item>
        )}
        {type === 'Cascader' && (
          <Form.Item {...commonFormItemProps}>
            <Cascader {...commonProps} options={remoteConfig?.remoteOptions} />
          </Form.Item>
        )}
        {type === 'Checkbox' && (
          <Form.Item {...commonFormItemProps} valuePropName="checked">
            <Checkbox {...commonProps} />
          </Form.Item>
        )}
        {type === 'CheckboxGroup' && (
          <Form.Item {...commonFormItemProps}>
            <Checkbox.Group {...commonProps} options={remoteConfig?.remote ? remoteConfig.remoteOptions : config?.options} />
          </Form.Item>
        )}
        {type === 'DatePicker' && (
          <Form.Item {...commonFormItemProps}>
            <DatePicker {...commonProps} />
          </Form.Item>
        )}
        {type === 'RangePicker' && (
          <Form.Item {...commonFormItemProps}>
            <DatePicker.RangePicker {...commonProps} />
          </Form.Item>
        )}
        {type === 'Input' && (
          <Form.Item {...commonFormItemProps}>
            <Input {...commonProps} />
          </Form.Item>
        )}
        {type === 'TextArea' && (
          <Form.Item {...commonFormItemProps}>
            <Input.TextArea {...commonProps} />
          </Form.Item>
        )}
        {type === 'Search' && (
          <Form.Item {...commonFormItemProps}>
            <Input.Search {...commonProps} />
          </Form.Item>
        )}
        {type === 'Password' && (
          <Form.Item {...commonFormItemProps}>
            <Input.Password {...commonProps} />
          </Form.Item>
        )}
        {type === 'InputNumber' && (
          <Form.Item {...commonFormItemProps}>
            <InputNumber {...commonProps} />
          </Form.Item>
        )}
        {type === 'Mentions' && (
          <Form.Item {...commonFormItemProps}>
            <Mentions {...commonProps}>{createMentionsOptions(item)}</Mentions>
          </Form.Item>
        )}
        {type === 'RadioGroup' && (
          <Form.Item {...commonFormItemProps}>
            <Radio.Group {...commonProps} options={remoteConfig?.remote ? remoteConfig.remoteOptions : config?.options} />
          </Form.Item>
        )}
        {type === 'Rate' && (
          <Form.Item {...commonFormItemProps}>
            <Rate {...commonProps} />
          </Form.Item>
        )}
        {type === 'Select' && (
          <Form.Item {...commonFormItemProps}>
            <Select {...commonProps} options={remoteConfig?.remote ? remoteConfig.remoteOptions : config?.options} />
          </Form.Item>
        )}
        {type === 'Slider' && (
          <Form.Item {...commonFormItemProps}>
            <Slider {...commonProps} />
          </Form.Item>
        )}
        {type === 'Switch' && (
          <Form.Item {...commonFormItemProps} valuePropName="checked">
            <Switch {...commonProps} />
          </Form.Item>
        )}
        {type === 'TimePicker' && (
          <Form.Item {...commonFormItemProps}>
            <TimePicker {...commonProps} />
          </Form.Item>
        )}
        {type === 'TreeSelect' && (
          <Form.Item {...commonFormItemProps}>
            <TreeSelect {...commonProps} treeData={remoteConfig?.remoteOptions} />
          </Form.Item>
        )}
        {type === 'Upload' && (
          <Form.Item
            {...commonFormItemProps}
            valuePropName="fileList"
            getValueFromEvent={(args) => {
              if (Array.isArray(args)) {
                return args
              }
              return args && args.fileList
            }}
          >
            {config?.drop ? (
              <Upload.Dragger {...commonProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
                <p className="ant-upload-hint">支持单个或批量上传</p>
              </Upload.Dragger>
            ) : (
              <Upload {...commonProps}>{commonProps.listType === 'picture-card' ? '点击上传' : <Button icon={<UploadOutlined />}>点击上传</Button>}</Upload>
            )}
          </Form.Item>
        )}
        {type === 'Calendar' && <Calendar {...commonProps} value={commonProps.defaultValue} />}
        {type === 'Image' && <Image {...commonProps} />}
        {type === 'Table' && <Table {...commonProps} />}
        {type === 'Tree' && <Tree {...commonProps} />}
        {type === 'Alert' && <Alert {...commonProps} />}
        {renderActionIcon()}
      </div>
    )
  }

  const renderActionIcon = () => {
    return (
      <>
        {selectWidgetItem?.key === key && (
          <>
            <div className="widget-view-drag">
              <SvgIcon name="Move" className="drag-widget" />
            </div>
            <div className="widget-view-action">
              <SvgIcon name="Copy" onClick={handleCopyClick} />
              <SvgIcon name="Delete" onClick={handleDeleteClick} />
            </div>
          </>
        )}
      </>
    )
  }

  return render()
}

export default memo(WidgetFormItem)
