# react-from-create

基于 React + TS 的自定义表单生成器。主要用于动态页面渲染、页面个性化、动态表单等功能。 支持 npm 与 cdn 引入的方式。

## ✨ 特性

- 丰富的组件（包含 antd 绝大部分组件）
- 灵活布局
- 远端数据获取
- 自定义样式
- 自定义 Class
- 状态管理
- 事件处理
- 生命周期管理
- 表单控制
- 动态渲染 JSX

## 示例地址（Github）

https://fuchengwei.github.io/react-form-create-base/src/example/index.html

## 示例地址（Gitee）

http://fuchengwei.gitee.io/react-form-create-base

## Github

https://github.com/fuchengwei/react-form-create-base

## npm

https://www.npmjs.com/package/react-form-create

## 特性演示

- 自定义样式
- 自定义 Class

[![H62Q3t.gif](https://s4.ax1x.com/2022/02/14/H62Q3t.gif)](https://imgtu.com/i/H62Q3t)

- 状态管理
- 事件处理

[![H628u8.gif](https://s4.ax1x.com/2022/02/14/H628u8.gif)](https://imgtu.com/i/H628u8)

- 动态渲染 JSX

[![H621jf.gif](https://s4.ax1x.com/2022/02/14/H621jf.gif)](https://imgtu.com/i/H621jf)

- 表单控制

[![H62lgP.gif](https://s4.ax1x.com/2022/02/14/H62lgP.gif)](https://imgtu.com/i/H62lgP)

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```shell
$ npm install react-form-create --save
```

```shell
$ yarn add react-form-create --save
```

### 浏览器引入

在浏览器中使用 `script` 标签直接引入文件，并使用全局变量 `formCreate`。

我们在 npm 发布包内的 `react-form-create/dist`提供了 `react-form-create.es.js` `react-form-create.umd.js` `style.css`。你也可以通过 [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-form-create/badge)](https://www.jsdelivr.com/package/npm/react-form-create) 或 [UNPKG](https://unpkg.com/react-form-create/dist/) 进行下载。

```javascript
<script src="https://unpkg.com/react-form-create/dist/react-form-create.umd.js"></script>
```

### 注意

1. 无论 npm 或者 cdn 引入都需要在全局以 CDN 的方式引入 [monaco-editor](https://microsoft.github.io/monaco-editor/) 。

   ```javascript
   <script src="https://unpkg.com/monaco-editor/min/vs/loader.js"></script>
   <script>
      require.config({ paths: { vs: 'https://unpkg.com/monaco-editor/min/vs' } })
      window.MonacoEnvironment = {
        getWorkerUrl: function (workerId, label) {
          return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
            self.MonacoEnvironment = {
              baseUrl: 'https://unpkg.com/monaco-editor/min/'
            };
            importScripts('https://unpkg.com/monaco-editor/min/vs/base/worker/workerMain.js');`)}`
        }
      }
      require(['vs/editor/editor.main'], function () {})
    </script>
   ```

2. cdn 引入 ant-design 需要自行引入 [moment](http://momentjs.com/) 以及 [babel-standalone](https://github.com/babel/babel-standalone)。

3. 动态 Props 中的属性同 antd 组件的所有属性一致，有更灵活的属性配置可以使用动态 Props。

4. 动态 Props、FormItemProps 和动作设置中都可以全局访问到 formInstance(表单实例属性)、state(全局 state 对象)、dispatch(更新 state 的方法)以及 antd(包括 antd 所有的组件以及全局方法（message、notification 等）)

### 示例

**npm 引入**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { DesignForm } from 'react-form-create'
import 'antd/dist/antd.css'
import 'react-form-create/dist/style.css'

ReactDOM.render(
  <React.StrictMode>
    <DesignForm />
  </React.StrictMode>,
  document.getElementById('root')
)
```

**浏览器引入**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/antd/dist/antd.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/react-form-create/dist/style.css" />
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/moment/moment.js"></script>
    <script src="https://unpkg.com/antd/dist/antd.min.js"></script>
    <script src="https://unpkg.com/babel-standalone"></script>
    <script src="https://unpkg.com/react-form-create/dist/react-form-create.umd.js"></script>
    <script src="https://unpkg.com/monaco-editor/min/vs/loader.js"></script>
    <script>
      require.config({
        paths: { vs: 'https://unpkg.com/monaco-editor/min/vs' }
      })
      window.MonacoEnvironment = {
        getWorkerUrl: function (workerId, label) {
          return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
            self.MonacoEnvironment = {
              baseUrl: 'https://unpkg.com/monaco-editor/min/'
            };
            importScripts('https://unpkg.com/monaco-editor/min/vs/base/worker/workerMain.js');`)}`
        }
      }
      require(['vs/editor/editor.main'], function () {})
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      ReactDOM.render(<DesignForm />, document.getElementById('root'))
    </script>
  </body>
</html>
```

## 组件说明

### 表单设计器（DesignForm）

#### 示例

```typescript
import React, { useRef } from 'react'
import { DesignForm, DesignFormRef } from 'react-form-create'
import 'antd/dist/antd.css'
import 'react-form-create/dist/style.css'

export default () => {
  const ref = useRef<DesignFormRef>(null)

  return <DesignForm ref={ref} />
}
```

#### API

##### Props

|     参数     |         说明         |  类型   | 默认值 |
| :----------: | :------------------: | :-----: | :----: |
|   preview    |  设计器预览操作按钮  | boolean |  true  |
| generateCode |  设计器生成代码按钮  | boolean |  true  |
| generateJson | 设计器生成 Json 按钮 | boolean |  true  |
|  uploadJson  | 设计器导入 JSON 按钮 | boolean |  true  |
|  clearable   |    设计器清空按钮    | boolean |  true  |

##### 方法

通过 ref 可以获取到实例并调用实例方法

|      方法名       |                说明                |                参数                 |
| :---------------: | :--------------------------------: | :---------------------------------: |
|     getJson()     |     获取设计器配置的 JSON 数据     |                  -                  |
|  setJson(value)   |        设置设计器的配置信息        |       通过 getJson 获取的数据       |
|      clear()      |             清空设计器             |                                     |
| getTemplate(type) | 获取设计器生成的可以直接使用的代码 | type 的类型为 'component' 或 'html' |

### 表单生成器（GenerateForm）

#### 示例

```typescript
import React, { useRef } from 'react'
import { GenerateForm, GenerateFormRef } from 'react-form-create'
import 'antd/dist/antd.css'
import 'react-form-create/dist/style.css'

export default () => {
  const ref = useRef<GenerateFormRef>(null)

  return <GenerateForm widgetInfoJson="表单设计器生成的 JSON" ref={ref} />
}
```

#### API

##### Props

|      参数      |                     说明                      |  类型  | 默认值 |
| :------------: | :-------------------------------------------: | :----: | :----: |
| widgetInfoJson | 表单 json 配置数据（从表单设计器获取的 json） | string |   -    |
|   formValue    |     表单数据（从表单生成器获取的 value）      | object |   -    |

##### 方法

通过 ref 可以获取到实例并调用实例方法

|  方法名   |             说明             | 参数 |
| :-------: | :--------------------------: | :--: |
| getData() | 获取表单数据（返回 Promise） |  -   |
|  reset()  |         重置表单数据         |  -   |

## 功能说明

### 远端数据

单选框，多选框，下拉选择框、级联选择器等选择项需要通过数据生成，这时可以配置远端数据。

设置远端方法地址与返回值。

[![Hcznzt.png](https://s4.ax1x.com/2022/02/15/Hcznzt.png)](https://imgtu.com/i/Hcznzt)

### 文件上传

填写服务器上传地址、参数名等配置信息。

[![Hcz4eO.png](https://s4.ax1x.com/2022/02/15/Hcz4eO.png)](https://imgtu.com/i/Hcz4eO)

### 页面生命周期管理

React 页面渲染生命周期函数

[![HgSNAe.png](https://s4.ax1x.com/2022/02/15/HgSNAe.png)](https://imgtu.com/i/HgSNAe)

### 全局使用 antd 中 Message、Notification、Modal 方法

在组件事件、生命周期、动态 Props 中都可以使用 antd.xxx 来调用 antd 的方法或者组件

[![HgpG2n.png](https://s4.ax1x.com/2022/02/15/HgpG2n.png)](https://imgtu.com/i/HgpG2n)

目前是第一版 详细的文档还需要时间来编写 如果你有更好的建议、需求或者使用中有任何问题可以提 issues 或者加微信沟通 fuchengwei325795

（PS:）目前免费开源的是基础版本,有高级版或高级源码版需要的可加微信 fuchengwei325795
