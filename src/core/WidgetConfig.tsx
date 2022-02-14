import React, { FC, useMemo } from 'react'
import { Form, Input } from 'antd'
import FormItemLayoutConfig from '@/config/FormItemLayoutConfig'
import ValidateRuleConfig from '@/config/ValidateRuleConfig'
import ButtonConfig from '@/config/ButtonConfig'
import IconConfig from '@/config/IconConfig'
import TextConfig from '@/config/TextConfig'
import TitleConfig from '@/config/TitleConfig'
import ParagraphConfig from '@/config/ParagraphConfig'
import DividerConfig from '@/config/DividerConfig'
import RowConfig from '@/config/RowConfig'
import ColConfig from '@/config/ColConfig'
import LayoutConfig from '@/config/LayoutConfig'
import SiderConfig from '@/config/SiderConfig'
import SpaceConfig from '@/config/SpaceConfig'
import AutoCompleteConfig from '@/config/AutoCompleteConfig'
import CascaderConfig from '@/config/CascaderConfig'
import CheckboxConfig from '@/config/CheckboxConfig'
import CheckboxGroupConfig from '@/config/CheckboxGroupConfig'
import DatePickerConfig from '@/config/DatePickerConfig'
import RangePickerConfig from '@/config/RangePickerConfig'
import InputConfig from '@/config/InputConfig'
import TextAreaConfig from '@/config/TextAreaConfig'
import SearchConfig from '@/config/SearchConfig'
import PasswordConfig from '@/config/PasswordConfig'
import InputNumberConfig from '@/config/InputNumberConfig'
import MentionsConfig from '@/config/MentionsConfig'
import RadioGroupConfig from '@/config/RadioGroupConfig'
import RateConfig from '@/config/RateConfig'
import SelectConfig from '@/config/SelectConfig'
import SliderConfig from '@/config/SliderConfig'
import SwitchConfig from '@/config/SwitchConfig'
import TimePickerConfig from '@/config/TimePickerConfig'
import TreeSelectConfig from '@/config/TreeSelectConfig'
import UploadConfig from '@/config/UploadConfig'
import CalendarConfig from '@/config/CalendarConfig'
import ImageConfig from '@/config/ImageConfig'
import TableConfig from '@/config/TableConfig'
import TreeConfig from '@/config/TreeConfig'
import AlertConfig from '@/config/AlertConfig'
import { useConfig } from '@/hooks'

const WidgetConfig: FC = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      {useMemo(
        () => (
          <Form layout="vertical">
            {selectWidgetItem?.key && (
              <Form.Item label="Key">
                <Input value={selectWidgetItem?.key} onChange={(event) => handleChange(event.target.value, 'key')} />
              </Form.Item>
            )}
            {selectWidgetItem?.type === 'Button' && <ButtonConfig />}
            {selectWidgetItem?.type === 'Icon' && <IconConfig />}
            {selectWidgetItem?.type === 'Text' && <TextConfig />}
            {selectWidgetItem?.type === 'Title' && <TitleConfig />}
            {selectWidgetItem?.type === 'Paragraph' && <ParagraphConfig />}
            {selectWidgetItem?.type === 'Divider' && <DividerConfig />}
            {selectWidgetItem?.type === 'Row' && <RowConfig />}
            {selectWidgetItem?.type === 'Col' && <ColConfig />}
            {(selectWidgetItem?.type === 'Layout' || selectWidgetItem?.type === 'Header' || selectWidgetItem?.type === 'Content' || selectWidgetItem?.type === 'Footer') && (
              <LayoutConfig />
            )}
            {selectWidgetItem?.type === 'Sider' && <SiderConfig />}
            {selectWidgetItem?.type === 'Space' && <SpaceConfig />}
            {selectWidgetItem?.type === 'AutoComplete' && <AutoCompleteConfig />}
            {selectWidgetItem?.type === 'Cascader' && <CascaderConfig />}
            {selectWidgetItem?.type === 'Checkbox' && <CheckboxConfig />}
            {selectWidgetItem?.type === 'CheckboxGroup' && <CheckboxGroupConfig />}
            {selectWidgetItem?.type === 'DatePicker' && <DatePickerConfig />}
            {selectWidgetItem?.type === 'RangePicker' && <RangePickerConfig />}
            {selectWidgetItem?.type === 'Input' && <InputConfig />}
            {selectWidgetItem?.type === 'TextArea' && <TextAreaConfig />}
            {selectWidgetItem?.type === 'Search' && <SearchConfig />}
            {selectWidgetItem?.type === 'Password' && <PasswordConfig />}
            {selectWidgetItem?.type === 'InputNumber' && <InputNumberConfig />}
            {selectWidgetItem?.type === 'Mentions' && <MentionsConfig />}
            {selectWidgetItem?.type === 'RadioGroup' && <RadioGroupConfig />}
            {selectWidgetItem?.type === 'Rate' && <RateConfig />}
            {selectWidgetItem?.type === 'Select' && <SelectConfig />}
            {selectWidgetItem?.type === 'Slider' && <SliderConfig />}
            {selectWidgetItem?.type === 'Switch' && <SwitchConfig />}
            {selectWidgetItem?.type === 'TimePicker' && <TimePickerConfig />}
            {selectWidgetItem?.type === 'TreeSelect' && <TreeSelectConfig />}
            {selectWidgetItem?.type === 'Upload' && <UploadConfig />}
            {selectWidgetItem?.type === 'Calendar' && <CalendarConfig />}
            {selectWidgetItem?.type === 'Image' && <ImageConfig />}
            {selectWidgetItem?.type === 'Table' && <TableConfig />}
            {selectWidgetItem?.type === 'Tree' && <TreeConfig />}
            {selectWidgetItem?.type === 'Alert' && <AlertConfig />}

            {selectWidgetItem?.formItemConfig && (
              <>
                <FormItemLayoutConfig />
                <ValidateRuleConfig />
              </>
            )}
          </Form>
        ),
        [selectWidgetItem]
      )}
    </>
  )
}

export default WidgetConfig
