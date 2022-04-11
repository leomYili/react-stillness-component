// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');

const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React-stillness-component',
  tagline: 'Stillness react component state and rendering',
  url: 'https://leomyili.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leomyili', // Usually your GitHub org/user name.
  projectName: 'react-stillness-component', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/leomYili/react-stillness-component/tree/main/docs',
          remarkPlugins: [[npm2yarn, { sync: true }]],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/leomYili/react-stillness-component/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: false,
      algolia: {
        appId: 'HJNP1TPYIS',
        apiKey: '5715eb18b02532a78c849e05540f65c5',
        indexName: 'react-stillness-component',
        contextualSearch: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'React-stillness-component',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs',
          },
          {
            to: 'docs/category/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'examples',
            position: 'left',
            label: 'Examples',
          },
          {
            href: 'https://github.com/leomYili/react-stillness-component/releases',
            label: 'releases',
            position: 'right',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/leomYili/react-stillness-component',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started',
              },
              {
                label: 'API',
                to: '/docs/category/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/react-stillness-component',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/leomYili/react-stillness-component',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} leomyili, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you like Stillness Component, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/leomYili/react-stillness-component">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
      },
    }),
};

module.exports = config;
