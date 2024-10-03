// https://vitepress.dev/guide/custom-theme
// 这行注释表明了该代码的用途是进行自定义主题，链接指向了 VitePress 关于自定义主题的指南文档。

import { h } from 'vue';
// 从 Vue 中导入 `h` 函数，用于创建虚拟 DOM 元素。

import type { Theme } from 'vitepress';
// 导入 VitePress 的主题类型定义，以便在后续的代码中使用。

import DefaultTheme from 'vitepress/theme';
// 导入 VitePress 的默认主题。

import './style.css';
// 导入自定义主题的样式文件。

export default {
  extends: DefaultTheme,
  // 扩展 VitePress 的默认主题。

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 这行注释提供了一个链接，指向了 VitePress 关于扩展默认主题的布局插槽部分的文档。
    });
  },
  // 定义一个名为 `Layout` 的函数，返回一个使用默认主题布局的虚拟 DOM 元素。

  enhanceApp({ app, router, siteData }) {
    //...
    // 这个函数用于增强应用程序，可以在这里对 Vue 应用实例、路由和站点数据进行操作。
  }
} satisfies Theme;
// 使用 `satisfies` 关键字来确保这个对象满足 `Theme` 类型的要求。