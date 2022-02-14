import React, { useMemo, useState, MouseEvent, FC } from 'react'
import { Layout, Space } from 'antd'
import UploadModal from '@/components/UploadModal'
import PreviewModal from '@/components/PreviewModal'
import GenerateJsonModal from '@/components/GenerateJsonModal'
import GenerateCodeModal from '@/components/GenerateCodeModal'
import SvgIcon from '@/components/SvgIcon'
import { useConfig } from '@/hooks'
import { ActionType } from '@/store/action'

import type { DesignFormProps } from './index'

const Header: FC<DesignFormProps> = (props) => {
  const { uploadJson, clearable, preview, generateJson, generateCode } = props
  const { handlerSetVisible, dispatch } = useConfig()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [generateJsonVisible, setGenerateJsonVisible] = useState(false)
  const [generateCodeVisible, setGenerateCodeVisible] = useState(false)

  const handleClear = (event: MouseEvent) => {
    event.preventDefault()
    dispatch({
      type: ActionType.SET_WIDGET_FORM_LIST,
      payload: []
    })
  }

  return (
    <>
      {useMemo(
        () => (
          <Layout.Header className="btn-bar">
            <Space>
              {uploadJson && (
                <a href="/#" onClick={handlerSetVisible(setUploadVisible, true)}>
                  <SvgIcon name="Upload" />
                  导入Json
                </a>
              )}
              {clearable && (
                <a href="/#" onClick={handleClear}>
                  <SvgIcon name="Delete" />
                  清空
                </a>
              )}
              {preview && (
                <a href="/#" onClick={handlerSetVisible(setPreviewVisible, true)}>
                  <SvgIcon name="Preview" />
                  预览
                </a>
              )}
              {generateJson && (
                <a href="/#" onClick={handlerSetVisible(setGenerateJsonVisible, true)}>
                  <SvgIcon name="GenerateJson" />
                  生成JSON
                </a>
              )}
              {generateCode && (
                <a href="/#" onClick={handlerSetVisible(setGenerateCodeVisible, true)}>
                  <SvgIcon name="GenerateCode" />
                  生成代码
                </a>
              )}
            </Space>
          </Layout.Header>
        ),
        [uploadJson, clearable, preview, generateJson, generateCode]
      )}
      <UploadModal title="导入Json" width="50%" visible={uploadVisible} close={handlerSetVisible(setUploadVisible, false)} onCancel={handlerSetVisible(setUploadVisible, false)} />
      <PreviewModal
        title="预览"
        width="100%"
        style={{
          height: '100%',
          maxWidth: '100%',
          top: 0,
          padding: 0
        }}
        bodyStyle={{
          minHeight: 'calc(100vh - 108px)'
        }}
        visible={previewVisible}
        onCancel={handlerSetVisible(setPreviewVisible, false)}
      />
      <GenerateJsonModal title="生成Json" width="50%" visible={generateJsonVisible} onCancel={handlerSetVisible(setGenerateJsonVisible, false)} />
      <GenerateCodeModal title="生成代码" width="50%" visible={generateCodeVisible} onCancel={handlerSetVisible(setGenerateCodeVisible, false)} />
    </>
  )
}

export default Header
