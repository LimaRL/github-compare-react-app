import 'font-awesome/css/font-awesome.css'

import { darken, lighten } from 'polished'

const primaryColor = '#9b65e6'
const secondaryColor = '#305530'
const successColor = '#63f5b0'
const alertColor = '#f80'
const dangerColor = '#f04'
const boxShadowColor = 'rgba(0, 0, 0, 0.3)'

export const colors = {
  white: '#fff',
  textColor: '#444',
  primaryColor,
  primaryColorDark: darken(0.2, primaryColor),
  primaryColorLight: lighten(0.2, primaryColor),
  secondaryColor,
  secondaryColorDark: darken(0.2, secondaryColor),
  secondaryColorLight: lighten(0.2, secondaryColor),
  successColor,
  successColorDark: darken(0.2, successColor),
  successColorLight: lighten(0.2, successColor),
  alertColor,
  alertColorDark: darken(0.2, alertColor),
  alertColorLight: lighten(0.2, alertColor),
  dangerColor,
  dangerColorDark: darken(0.2, dangerColor),
  dangerColorLight: lighten(0.2, dangerColor),
  boxShadowColor
}
