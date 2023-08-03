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
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'Analscript',

        logo: {
          alt: 'Analscript Logo',
          src: 'img/logo.svg',
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
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} | Airscript`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
