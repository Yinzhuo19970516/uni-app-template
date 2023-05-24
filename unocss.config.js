/**
 * unocss defineConfig
 * @link unocss: https://github.com/unocss/unocss
 * @link unocss-preset-weapp: https://github.com/MellowCo/unocss-preset-weapp
 * */

import { defineConfig, presetIcons } from 'unocss'

// unocss 的预设，它为微信小程序提供了一组默认的样式规则
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  '$': '-r111-',
  ',': '-r222-',
}

const prefix = '_u_'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      nonValuedAttribute: true,
      prefix, // 防止冲突
      // 将 width 和 height 属性转换为相应的 rpx 单位。
      whRpx: true,
      // 启用属性转换，将 HTML 属性转换为对应的 CSS 类名。
      transform: true,
      platform: 'uniapp',
      transformRules,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    {
      _u_center: '_u_flex _u_justify-center _u_items-center',
    },
  ],
  theme: {},
  transformers: [
    transformerAttributify({
      // 用于指定 unocss 自动生成的 CSS 类名的前缀，以避免与其他类名产生冲突。
      classPrefix: prefix,
      transformRules,
      // 用于控制是否将非值属性也转换为对应的 CSS 类名。例如：<button disabled> 将被转换为 .u-disabled { pointer-events: none; opacity: .5; }。
      nonValuedAttribute: true,
    }),
    transformerClass({
      transformRules,
    }),
  ],
})
