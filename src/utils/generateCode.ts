import { State } from '@/store/state'

export default (type: 'component' | 'html', state: State) => {
  let str
  if (type === 'component') {
    str = `
import React from 'react'
import { GenerateForm } from 'react-form-create'

const widgetInfoJson = '${JSON.stringify(state, null, 2)}'

export default () => {
  return <GenerateForm widgetInfoJson={widgetInfoJson} />
}
    `
  } else {
    str = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://unpkg.com/antd/dist/antd.min.css" />
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/moment/moment.js"></script>
    <script src="https://unpkg.com/antd/dist/antd.min.js"></script>
    <script src="https://unpkg.com/babel-standalone"></script>
    <script src="https://unpkg.com/monaco-editor/min/vs/loader.js"></script>
    <script>
      require.config({
        paths: { vs: 'https://unpkg.com/monaco-editor/min/vs' }
      })
      window.MonacoEnvironment = {
        getWorkerUrl: function (workerId, label) {
          return \`data:text/javascript;charset=utf-8,\${encodeURIComponent(\`
            self.MonacoEnvironment = {
              baseUrl: 'https://unpkg.com/monaco-editor/min/'
            };
            importScripts('https://unpkg.com/monaco-editor/min/vs/base/worker/workerMain.js');\`)}\`
        }
      }
      require(['vs/editor/editor.main'], function () {})
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const widgetInfoJson = '${JSON.stringify(state)}'

      ReactDOM.render(
        <GenerateForm widgetInfoJson={widgetInfoJson} />,
        document.getElementById('root')
      )
    </script>
  </body>
</html>    
        `
  }
  return str.trim()
}
