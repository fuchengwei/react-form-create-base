import React, { FC, useContext, useState } from 'react'
import { Modal, ModalProps, message, Tabs } from 'antd'
import MonacoEditor from '@/components/MonacoEditor'
import { DesignContext } from '@/store'
import { copy } from '@/utils'
import generateCode from '@/utils/generateCode'

const GenerateCodeModal: FC<ModalProps> = (props) => {
  const [activeKey, setActiveKey] = useState('Component')
  const { state } = useContext(DesignContext)

  const handleCopy = () => {
    copy(generateCode(activeKey === 'Component' ? 'component' : 'html', state))
    message.success('Copy成功')
  }

  return (
    <Modal {...props} destroyOnClose okText="Copy" onOk={handleCopy}>
      <Tabs type="card" tabBarStyle={{ margin: '0' }} activeKey={activeKey} onChange={setActiveKey}>
        <Tabs.TabPane tab="React Component" key="Component">
          <MonacoEditor readonly language="javascript" height={document.body.clientHeight / 1.5} value={generateCode('component', state)} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="HTML" key="HTML">
          <MonacoEditor readonly language="html" height={document.body.clientHeight / 1.5} value={generateCode('html', state)} />
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  )
}

export default GenerateCodeModal
