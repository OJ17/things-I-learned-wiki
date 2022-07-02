// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'things-I-learned-wiki',
  tagline: 'simple, practical advice',
  url: 'https://www.things-i-learned.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OJ17', // Usually your GitHub org/user name.
  projectName: 'things-I-learned-wiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OJ17/things-I-learned-wiki',
        },
        blog: false,
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
        title: 'Things I learned',
        logo: {
          alt: 'My Site Logo',
          src: 'img/if-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Improvement/intro',
            position: 'left',
            label: 'Improvement',
          },
          {
            type: 'doc',
            docId: 'distraction/intro',
            position: 'left',
            label: 'Distraction',
          },
          {
            type: 'doc',
            docId: 'Academic subjects/intro',
            position: 'left',
            label: 'Academic Subjects',
          },
          {
            type: 'doc',
            docId: 'distraction1/intro',
            position: 'left',
            label: 'd1',
          },
          {
            href: 'https://github.com/OJ17/things-I-learned-wiki',
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
                label: 'Distraction',
                to: 'docs/distraction/intro',
              },
              {
                label: 'Academic Subjects',
                to: 'docs/Academic subjects/intro',
              },
              {
                label: 'Improvement',
                to: 'docs/improvement/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/OJ17',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Oliver Jones. Built with Docusaurus.`,
      },
      defaultMode: 'dark',
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
