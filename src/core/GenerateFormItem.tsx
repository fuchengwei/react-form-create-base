import React, { FC, useContext, useEffect } from 'react'
import {
  Button,
  Col,
  Divider,
  Layout,
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
import moment from 'moment'
import { isArray, isString } from 'lodash-es'
import Icon from '@/components/Icon'
import { GenerateContext } from '@/store'
import { Component } from '@/config'
import { useForceUpdate } from '@/hooks'
import { createMentionsOptions, handleResponseData } from '@/utils'

interface Props {
  item: Component
  formInstance: FormInstance
}

const GenerateFormItem: FC<Props> = (props) => {
  const {
    item,
    item: { type, config, remoteConfig, customClass, dynamicProps, dynamicFormItemProps, events, childNodes, label, key, formItemConfig },
    formInstance
  } = props

  const { state, dispatch } = useContext(GenerateContext)

  const forceUpdate = useForceUpdate()

  const commonProps: Record<string, any> = {
    ...config
  }

  const commonFormItemProps: Record<string, any> = {
    ...formItemConfig,
    name: key,
    label,
    hidden: commonProps.hidden
  }

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
  }, [])

  const render = () => {
    return (
      <>
        {type === 'Button' && <Button {...commonProps} />}
        {type === 'Icon' && <Icon {...commonProps} />}
        {type === 'Text' && <Typography.Text {...commonProps} />}
        {type === 'Title' && <Typography.Title {...commonProps} />}
        {type === 'Paragraph' && <Typography.Paragraph {...commonProps} />}
        {type === 'Divider' && <Divider {...commonProps} />}
        {type === 'Row' && (
          <Row {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Row>
        )}
        {type === 'Col' && (
          <Col {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Col>
        )}
        {type === 'Layout' && (
          <Layout {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Layout>
        )}
        {type === 'Header' && (
          <Layout.Header {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Layout.Header>
        )}
        {type === 'Content' && (
          <Layout.Content {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Layout.Content>
        )}
        {type === 'Footer' && (
          <Layout.Footer {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Layout.Footer>
        )}
        {type === 'Sider' && (
          <Layout.Sider {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Layout.Sider>
        )}
        {type === 'Space' && (
          <Space {...commonProps}>
            {childNodes?.map((widgetFormItem) => (
              <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
            ))}
          </Space>
        )}
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
        {['Calendar', 'Image', 'Table', 'Tree', 'Alert'].includes(type) && (
          <span hidden={commonProps.hidden}>
            {type === 'Calendar' && <Calendar {...commonProps} />}
            {type === 'Image' && <Image {...commonProps} />}
            {type === 'Table' && <Table {...commonProps} />}
            {type === 'Tree' && <Tree {...commonProps} />}
            {type === 'Alert' && <Alert {...commonProps} />}
          </span>
        )}
      </>
    )
  }

  return ['Button', 'Icon', 'Text', 'Title', 'Paragraph'].includes(type) ? <div>{render()}</div> : render()
}

export default GenerateFormItem
