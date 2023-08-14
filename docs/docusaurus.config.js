// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Analscript',
  tagline: 'A modern approach to make anally fast stuff.',
  favicon: 'img/favicon.ico',
  url: 'https://ghio.airscript.it',
  baseUrl: '/analscript/',
  organizationName: 'airscripts',
  projectName: 'analscript',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,

        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/airscripts/analscript',
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
      navbar: {
        title: 'Analscript',

        logo: {
          alt: 'Analscript Logo',
          src: 'https://raw.githubusercontent.com/airscripts/analscript/main/assets/images/logo.png',
        },

        items: [
          {
            label: 'Docs',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'sidebar',
          },

          {
            href: 'https://github.com/airscripts/analscript',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/airscripts/analscript',
              },

              {
                label: 'Airscript',
                href: 'https://github.com/airscripts',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Airscript. Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
