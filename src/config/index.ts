import Icons from '@/icons'

// 通用组件
const commonComponents: Component[] = [
  {
    label: '按钮',
    type: 'Button',
    icon: Icons.Button,
    config: {
      children: '按钮',
      hidden: false,
      block: false,
      danger: false,
      disabled: false,
      ghost: false,
      href: undefined,
      htmlType: 'button',
      shape: 'default',
      size: undefined,
      target: undefined,
      type: 'default'
    }
  },
  {
    label: '图标',
    type: 'Icon',
    icon: Icons.Icon,
    config: {
      iconName: '',
      fontSize: 40,
      color: '',
      hidden: false
    }
  },
  {
    label: '文本',
    type: 'Text',
    icon: Icons.Text,
    config: {
      children: 'Text',
      hidden: false,
      code: false,
      copyable: false,
      delete: false,
      disabled: false,
      editable: false,
      ellipsis: false,
      keyboard: false,
      mark: false,
      strong: false,
      italic: false,
      type: undefined,
      underline: false
    }
  },
  {
    label: '标题',
    type: 'Title',
    icon: Icons.Title,
    config: {
      children: 'Title',
      hidden: false,
      code: false,
      copyable: false,
      delete: false,
      disabled: false,
      editable: false,
      ellipsis: false,
      level: 1,
      mark: false,
      strong: false,
      italic: false,
      type: undefined,
      underline: false
    }
  },
  {
    label: '段落',
    type: 'Paragraph',
    icon: Icons.Paragraph,
    config: {
      children: 'Paragraph',
      hidden: false,
      code: false,
      copyable: false,
      delete: false,
      disabled: false,
      editable: false,
      ellipsis: false,
      mark: false,
      strong: false,
      italic: false,
      type: undefined,
      underline: false
    }
  }
]

// 布局组件
const layoutComponents: Component[] = [
  {
    label: '分割线',
    type: 'Divider',
    icon: Icons.Divider,
    config: {
      children: '',
      hidden: false,
      dashed: false,
      orientation: 'center',
      plain: false,
      type: 'horizontal'
    }
  },
  {
    label: '栅格-行',
    type: 'Row',
    icon: Icons.Row,
    childNodes: [],
    config: {
      align: 'top',
      hidden: false,
      gutter: 0,
      justify: 'start',
      wrap: true
    }
  },
  {
    label: '栅格-列',
    type: 'Col',
    icon: Icons.Col,
    childNodes: [],
    config: {
      flex: undefined,
      hidden: false,
      offset: 0,
      order: 0,
      pull: 0,
      push: 0,
      span: 2,
      xs: undefined,
      sm: undefined,
      md: undefined,
      lg: undefined,
      xl: undefined,
      xxl: undefined
    }
  },
  {
    label: '间距',
    type: 'Space',
    icon: Icons.Space,
    childNodes: [],
    config: {
      align: undefined,
      hidden: false,
      direction: 'horizontal',
      size: undefined,
      wrap: false
    }
  }
]

// 数据录入
const dataEntryComponents: Component[] = [
  {
    label: '自动完成',
    type: 'AutoComplete',
    icon: Icons.AutoComplete,
    config: {
      hidden: false,
      allowClear: false,
      autoFocus: false,
      backfill: false,
      defaultActiveFirstOption: true,
      defaultOpen: false,
      disabled: false,
      dropdownClassName: '',
      placeholder: '',
      notFoundContent: undefined,
      options: [
        { label: 'Option1', value: 'Option1' },
        { label: 'Option2', value: 'Option2' }
      ]
    },
    remoteConfig: {
      remote: false,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '级联选择',
    type: 'Cascader',
    icon: Icons.Cascader,
    config: {
      hidden: false,
      allowClear: true,
      autoFocus: false,
      bordered: true,
      changeOnSelect: false,
      disabled: false,
      className: '',
      dropdownClassName: '',
      expandTrigger: 'click',
      notFoundContent: 'Not Found',
      placeholder: '请选择',
      placement: 'bottomLeft',
      showSearch: false,
      size: undefined,
      multiple: false
    },
    remoteConfig: {
      remote: true,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value',
        children: 'children'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: [],
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'array',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '多选框',
    type: 'Checkbox',
    icon: Icons.Checkbox,
    config: {
      hidden: false,
      children: 'Checkbox',
      autoFocus: false,
      disabled: false,
      indeterminate: false
    },
    formItemConfig: {
      initialValue: false,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'boolean',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '多选框组',
    type: 'CheckboxGroup',
    icon: Icons.CheckboxGroup,
    config: {
      hidden: false,
      disabled: false,
      options: [
        { label: 'Option1', value: 'Option1' },
        { label: 'Option2', value: 'Option2' }
      ]
    },
    remoteConfig: {
      remote: false,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: [],
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'array',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '日期选择框',
    type: 'DatePicker',
    icon: Icons.DatePicker,
    config: {
      hidden: false,
      allowClear: true,
      autoFocus: false,
      bordered: true,
      className: '',
      disabled: false,
      dropdownClassName: '',
      inputReadOnly: false,
      picker: 'date',
      placeholder: undefined,
      size: undefined,
      format: 'YYYY-MM-DD',
      showNow: undefined,
      showTime: false,
      showToday: true
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'date',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '范围选择框',
    type: 'RangePicker',
    icon: Icons.RangePicker,
    config: {
      hidden: false,
      allowClear: true,
      autoFocus: false,
      bordered: true,
      className: '',
      disabled: false,
      dropdownClassName: '',
      inputReadOnly: false,
      picker: 'date',
      placeholder: undefined,
      size: undefined,
      format: 'YYYY-MM-DD HH:mm:ss',
      showNow: undefined,
      showTime: false,
      showToday: true
    },
    formItemConfig: {
      initialValue: [],
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'array',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '输入框',
    type: 'Input',
    icon: Icons.Input,
    config: {
      hidden: false,
      addonAfter: '',
      addonBefore: '',
      allowClear: undefined,
      bordered: true,
      disabled: false,
      maxLength: undefined,
      showCount: false,
      size: undefined,
      prefix: '',
      suffix: '',
      placeholder: undefined
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '文本域',
    type: 'TextArea',
    icon: Icons.TextArea,
    config: {
      hidden: false,
      autoSize: false,
      allowClear: undefined,
      bordered: true,
      disabled: false,
      maxLength: undefined,
      showCount: false,
      size: undefined,
      placeholder: undefined
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '搜索框',
    type: 'Search',
    icon: Icons.Search,
    config: {
      hidden: false,
      addonAfter: '',
      addonBefore: '',
      enterButton: false,
      allowClear: undefined,
      bordered: true,
      disabled: false,
      maxLength: undefined,
      showCount: false,
      size: undefined,
      prefix: '',
      suffix: '',
      placeholder: undefined
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '密码框',
    type: 'Password',
    icon: Icons.Password,
    config: {
      hidden: false,
      addonAfter: '',
      addonBefore: '',
      visibilityToggle: true,
      bordered: true,
      disabled: false,
      maxLength: undefined,
      showCount: false,
      size: undefined,
      prefix: '',
      placeholder: undefined
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '数字输入框',
    type: 'InputNumber',
    icon: Icons.InputNumber,
    config: {
      hidden: false,
      addonAfter: '',
      addonBefore: '',
      autoFocus: false,
      bordered: true,
      controls: true,
      decimalSeparator: '',
      disabled: false,
      keyboard: true,
      max: Number.MAX_SAFE_INTEGER,
      min: Number.MIN_SAFE_INTEGER,
      precision: undefined,
      readOnly: false,
      size: undefined,
      prefix: '',
      step: 1,
      stringMode: false
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'number',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '提及',
    type: 'Mentions',
    icon: Icons.Mentions,
    config: {
      hidden: false,
      autoFocus: false,
      autoSize: false,
      disabled: false,
      readOnly: false,
      placeholder: '',
      notFoundContent: 'Not Found',
      placement: 'bottom',
      prefix: '@',
      split: '',
      options: [
        { label: 'Option1', value: 'Option1' },
        { label: 'Option2', value: 'Option2' }
      ]
    },
    remoteConfig: {
      remote: false,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '单选框组',
    type: 'RadioGroup',
    icon: Icons.RadioGroup,
    config: {
      hidden: false,
      buttonStyle: 'outline',
      disabled: false,
      options: [
        { label: 'Option1', value: 'Option1' },
        { label: 'Option2', value: 'Option2' }
      ],
      optionType: 'default',
      size: undefined
    },
    remoteConfig: {
      remote: false,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '评分',
    type: 'Rate',
    icon: Icons.Rate,
    config: {
      hidden: false,
      allowClear: true,
      allowHalf: false,
      autoFocus: false,
      character: undefined,
      className: '',
      count: 5,
      disabled: false,
      tooltips: []
    },
    formItemConfig: {
      initialValue: 0,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'number',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '选择器',
    type: 'Select',
    icon: Icons.Select,
    config: {
      hidden: false,
      allowClear: false,
      autoClearSearchValue: true,
      autoFocus: false,
      bordered: true,
      defaultActiveFirstOption: true,
      defaultOpen: false,
      disabled: false,
      dropdownClassName: '',
      dropdownMatchSelectWidth: true,
      filterOption: true,
      labelInValue: false,
      listHeight: 256,
      maxTagCount: undefined,
      maxTagPlaceholder: undefined,
      maxTagTextLength: undefined,
      mode: undefined,
      notFoundContent: 'Not Found',
      optionFilterProp: 'value',
      optionLabelProp: 'children',
      placeholder: '',
      showArrow: undefined,
      showSearch: false,
      size: undefined,
      suffixIcon: undefined,
      virtual: true,
      options: [
        { label: 'Option1', value: 'Option1' },
        { label: 'Option2', value: 'Option2' }
      ]
    },
    remoteConfig: {
      remote: false,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '滑动输入条',
    type: 'Slider',
    icon: Icons.Slider,
    config: {
      hidden: false,
      allowClear: false,
      disabled: false,
      dots: false,
      max: 100,
      min: 0,
      range: false,
      reverse: false,
      step: 1,
      tooltipVisible: undefined
    },
    formItemConfig: {
      initialValue: 0,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'number',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '开关',
    type: 'Switch',
    icon: Icons.Switch,
    config: {
      hidden: false,
      autoFocus: false,
      className: '',
      checkedChildren: '',
      unCheckedChildren: '',
      disabled: false,
      size: 'default'
    },
    formItemConfig: {
      initialValue: false,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'boolean',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '时间选择框',
    type: 'TimePicker',
    icon: Icons.TimePicker,
    config: {
      hidden: false,
      allowClear: true,
      autoFocus: false,
      bordered: true,
      className: '',
      clearText: 'clear',
      disabled: false,
      hideDisabledOptions: false,
      hourStep: 1,
      minuteStep: 1,
      secondStep: 1,
      inputReadOnly: false,
      placeholder: undefined,
      popupClassName: undefined,
      size: undefined,
      format: 'HH:mm:ss',
      suffixIcon: undefined,
      showNow: true,
      use12Hours: false
    },
    formItemConfig: {
      initialValue: '',
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'date',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '树选择',
    type: 'TreeSelect',
    icon: Icons.TreeSelect,
    config: {
      hidden: false,
      allowClear: true,
      autoClearSearchValue: true,
      bordered: true,
      disabled: false,
      dropdownClassName: '',
      dropdownMatchSelectWidth: true,
      labelInValue: false,
      listHeight: 256,
      maxTagCount: undefined,
      maxTagPlaceholder: undefined,
      multiple: false,
      notFoundContent: 'Not Found',
      placeholder: '',
      showArrow: undefined,
      showCheckedStrategy: 'SHOW_CHILD',
      showSearch: undefined,
      size: undefined,
      treeCheckable: false,
      treeCheckStrictly: false,
      treeDefaultExpandAll: false,
      treeLine: false,
      treeNodeFilterProp: 'value',
      treeNodeLabelProp: 'label',
      virtual: true
    },
    remoteConfig: {
      remote: true,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      remoteProps: {
        label: 'label',
        value: 'value',
        children: 'children'
      },
      remoteOptions: []
    },
    formItemConfig: {
      initialValue: undefined,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'string',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  },
  {
    label: '上传',
    type: 'Upload',
    icon: Icons.Upload,
    config: {
      hidden: false,
      accept: 'image/*',
      action: 'http://example.com/upload',
      drop: false,
      directory: false,
      disabled: false,
      listType: 'text',
      maxCount: undefined,
      method: 'POST',
      multiple: false,
      name: 'file',
      openFileDialogOnClick: true,
      showUploadList: true,
      withCredentials: false
    },
    formItemConfig: {
      initialValue: undefined,
      colon: undefined,
      labelAlign: undefined,
      labelWrap: undefined,
      labelCol: undefined,
      wrapperCol: undefined,
      rules: [
        {
          validateTrigger: 'onBlur',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'array',
          warningOnly: false,
          whitespace: false
        }
      ]
    }
  }
]

// 数据展示
const dataDisplayComponents: Component[] = [
  {
    label: '日历',
    type: 'Calendar',
    icon: Icons.Calendar,
    config: {
      hidden: false,
      fullscreen: true,
      defaultValue: ''
    }
  },
  {
    label: '图片',
    type: 'Image',
    icon: Icons.Image,
    config: {
      hidden: false,
      alt: '',
      fallback:
        'data:image/png;base64,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',
      height: 200,
      width: 200,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
    }
  }
]

// 反馈
const feedbackComponents: Component[] = [
  {
    label: '警告提示',
    type: 'Alert',
    icon: Icons.Alert,
    config: {
      hidden: false,
      banner: false,
      closable: false,
      description: 'Detailed description and advice about successful copywriting.',
      message: 'Success Tips',
      showIcon: undefined,
      type: undefined
    }
  }
]

export const componentsGroup: ComponentGroup[] = [
  {
    title: '通用组件',
    components: commonComponents
  },
  {
    title: '布局组件',
    components: layoutComponents
  },
  {
    title: '数据录入',
    components: dataEntryComponents
  },
  {
    title: '数据展示',
    components: dataDisplayComponents
  },
  {
    title: '反馈',
    components: feedbackComponents
  }
]

export type Component = {
  key?: string
  label: string
  type: string
  icon: string
  config?: Record<string, any>
  remoteConfig?: Record<string, any>
  formItemConfig?: Record<string, any>
  childNodes?: Component[]
  [key: string]: unknown
}

export type ComponentGroup = {
  title: string
  components: Component[]
}
