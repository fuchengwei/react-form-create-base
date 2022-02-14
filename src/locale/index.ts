// 导入 moment
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'moment/locale/zh-tw'
import 'moment/locale/zh-hk'
import 'moment/locale/eu'
import 'moment/locale/af'
import 'moment/locale/fr'
import 'moment/locale/de'
import 'moment/locale/el'
import 'moment/locale/id'
import 'moment/locale/ja'
import 'moment/locale/ko'
import 'moment/locale/pt'
import 'moment/locale/th'

// 导入ant
import zhCN from 'antd/lib/locale/zh_CN'
import zhTW from 'antd/lib/locale/zh_TW'
import zhHK from 'antd/lib/locale/zh_HK'
import enUS from 'antd/lib/locale/en_US'
import arEG from 'antd/lib/locale/ar_EG'
import frFR from 'antd/lib/locale/fr_FR'
import deDE from 'antd/lib/locale/de_DE'
import elGR from 'antd/lib/locale/el_GR'
import idID from 'antd/lib/locale/id_ID'
import itIT from 'antd/lib/locale/it_IT'
import jaJP from 'antd/lib/locale/ja_JP'
import koKR from 'antd/lib/locale/ko_KR'
import ptPT from 'antd/lib/locale/pt_PT'
import thTH from 'antd/lib/locale/th_TH'

moment.locale('zh-cn')

export const changeMomentLocale = (locale: string) => moment.locale(locale)

export const locales = [
  {
    label: '中国',
    locale: zhCN
  },
  {
    label: '中国-台湾',
    locale: zhTW
  },
  {
    label: '中国-香港',
    locale: zhHK
  },
  {
    label: '英国',
    locale: enUS
  },
  {
    label: '阿拉伯',
    locale: arEG
  },
  {
    label: '法国',
    locale: frFR
  },
  {
    label: '德国',
    locale: deDE
  },
  {
    label: '希腊',
    locale: elGR
  },
  {
    label: '印尼',
    locale: idID
  },
  {
    label: '意大利',
    locale: itIT
  },
  {
    label: '日本',
    locale: jaJP
  },
  {
    label: '韩国',
    locale: koKR
  },
  {
    label: '葡萄牙',
    locale: ptPT
  },
  {
    label: '泰国',
    locale: thTH
  }
]
