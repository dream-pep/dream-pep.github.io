import {themes as prismThemes} from 'prism-react-renderer';
import {PrismTheme} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This works in Node.js - don't use client-side code (browser API, JSX, etc.) here.

const config: Config = {
  title: 'Lunova Docs',
  tagline: 'Lunova Studio 官方文档站！🥳🥳🥳',
  favicon: 'https://lunova.studio/wp-content/uploads/2025/03/lunova_icon_bold_whait@svg.svg',

  // Set up your website's production URL here
  url: 'https://dream-pep.github.io',
  // Set <baseUrl>the // pathname of the providing site
  // For GitHub page deployments, it's usually '/<projectName>/'
  baseUrl: '/',

  // GitHub 页面部署配置。
  // 如果您不使用 GitHub 页面，则不需要这些。
  organizationName: 'dream-pep', // This is usually your GitHub organization/username.
  projectName: 'dream-pep.github.io', // It is usually the name of the warehouse.
  deploymentBranch: 'docusaurus',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // You can use this field setting even if you don't use internationalization
  // Useful metadata, such as HTML lang. For example, if your website is a Chinese website, you
  // You may want to replace "en" with "zh-hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将其更改为您的存储库。
          // Delete this link （删除此链接） 以删除 Edit this page （编辑此页面） 链接。
          editUrl:
            'https://github.com/dream-pep/dream-pep.github.io/tree/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将其更改为您的存储库。
          // Delete this link （删除此链接） 以删除 Edit this page （编辑此页面） 链接。
          editUrl:
            'https://github.com/dream-pep/dream-pep.github.io/tree/docusaurus/',
          // 实施博客最佳实践的有用选项
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    htmlTags: {
      headTags: [
        {
          tagName: 'script',
          attributes: {
            defer: true,
            src: 'https://umami.lunova.studio/script.js',
            'data-website-id': '60822bf6-7e18-4326-933f-ad367754f54b'
          }
        }
      ]
    },
    announcementBar: {
      id: 'new-studio',
      content:
        'Blessing Studio 已经更名为 Lunova Studio，感谢各位一直以来的支持，请访问新站点 lunova.studio',
      backgroundColor: '#D80000',
      textColor: '#ffffff',
      isCloseable: true,
    },
    // 替换为项目的社交卡片
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lunova Docs',
      logo: {
        alt: 'Lunova Docs Logo',
        src: 'https://lunova.studio/wp-content/uploads/2025/03/lunova_icon_bold_black@svg.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'minecraftLaunchSidebar',
          position: 'left',
          label: 'MinecraftLaunch',
        },
        {
          type: 'docSidebar',
          sidebarId: 'monetSidebar',
          position: 'left',
          label: 'Monet',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wonderLabSidebar',
          position: 'left',
          label: 'WonderLab',
        },
        {
          type: 'docSidebar',
          sidebarId: 'designSidebar',
          position: 'left',
          label: '设计规范',
        },
        {to: '/blog', label: '博客日志', position: 'right'},
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'right',
          label: '关于',
        },
        {
          type: 'dropdown',
          label: '快速链接',
          position: 'right',
          items: [
            {
              label: '文档 GitHub 仓库',
              href: 'https://github.com/dream-pep/dream-pep.github.io',
            },
            {
              label: 'vrcub 官网',
              href: 'https://vrcub.net',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社交链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dream-pep',
            },
            {
              label: 'vrcub 官网',
              href: 'https://vrcub.net',
            },
          ],
        },
      ],
      logo: {
        alt: 'Meta Open Source Logo',
        src: '/img/BWP.png',
        href: 'https://lunova.studio',
      },
      copyright: `Copyright © ${new Date().getFullYear()} VRCub. Built with Docusaurus. | 由dream_pep带着辛勤的汗水制作`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['csharp', 'powershell', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
