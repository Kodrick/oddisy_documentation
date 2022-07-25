// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oddisy',
  tagline: 'Craft amazing and complex stories',
  url: 'https://Kodrick.github.io',
  baseUrl: '/oddisy_documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Kodrick', // Usually your GitHub org/user name.
  projectName: 'oddisy_documentation', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Oddisy',
        logo: {
          alt: 'Oddisy',
          src: 'img/oddisy_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.kodrick.com/',
            label: 'Kodrick',
            position: 'right',
          },
          {
            href: 'https://www.kodrick.com/oddisy',
            label: 'Download',
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
                label: 'What is Oddisy',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/Getting_Started/creating-a-new-project',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCqV6Swnk2-v2yjx6FVAF99A',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/kodrick',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/KodrickLLC/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/kodrick_software/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://www.kodrick.com/',
                label: 'Kodrick',
              },
              {
                href: 'https://www.kodrick.com/oddisy',
                label: 'Download',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kodrick LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
