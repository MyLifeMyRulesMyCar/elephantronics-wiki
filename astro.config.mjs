// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  // Custom domain deployment. Do not add `base`: all links are served from
  // the domain root. See DEPLOYMENT.md for the GitHub Pages and DNS steps.
  site: 'https://wiki.elephantronics.lk',

  integrations: [
    starlight({
      title: 'Elephantronics Wiki',
      description:
        'Practical electronics, embedded Linux, robotics, and edge AI tutorials.',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Elephantronics',
      },
      favicon: '/favicon.png',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/MyLifeMyRulesMyCar/elephantronics-wiki',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/MyLifeMyRulesMyCar/elephantronics-wiki/edit/main/',
      },
      customCss: [
        '@fontsource/barlow/latin-400.css',
        '@fontsource/barlow/latin-600.css',
        '@fontsource/barlow/latin-700.css',
        '@fontsource/barlow-condensed/latin-700.css',
        '@fontsource/barlow-condensed/latin-800.css',
        './src/styles/custom.css',
      ],
      expressiveCode: {
        // The source articles use dark code blocks in both themes.
        themes: ['github-dark'],
        useStarlightDarkModeSwitch: false,
      },
      lastUpdated: true,
      // The branded 404 lives in src/pages/404.astro.
      disable404Route: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ label: 'Start here', slug: 'getting-started' }],
        },
        {
          label: 'Electronics Fundamentals',
          items: [{ label: 'Overview', slug: 'electronics-fundamentals' }],
        },
        {
          label: 'Microcontrollers',
          items: [
            { label: 'Overview', slug: 'microcontrollers' },
            {
              label: 'DHT22 + Arduino UNO + OLED',
              slug: 'microcontrollers/dht22-arduino-uno-oled',
            },
          ],
        },
        {
          label: 'Circuit Design',
          items: [{ label: 'Overview', slug: 'circuit-design' }],
        },
        {
          label: 'Single Board Computers',
          items: [
            { label: 'Overview', slug: 'single-board-computers' },
            {
              label: 'Muse Pro Pi',
              items: [
                {
                  label: 'Introduction & first boot',
                  slug: 'single-board-computers/muse-pro-pi',
                },
                {
                  label: 'Benchmark deep dive',
                  slug: 'single-board-computers/muse-pro-pi/benchmark-deep-dive',
                },
                {
                  label: 'Object detection',
                  slug: 'single-board-computers/muse-pro-pi/object-detection',
                },
              ],
            },
            {
              label: 'Purple Pi OH2',
              items: [
                {
                  label: 'Overview',
                  slug: 'single-board-computers/purple-pi-oh2',
                },
                {
                  label: 'GPIO & interfaces',
                  slug: 'single-board-computers/purple-pi-oh2/gpio',
                },
                {
                  label: 'Applications',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      slug: 'single-board-computers/purple-pi-oh2/applications',
                    },
                    {
                      label: 'Docker',
                      slug: 'single-board-computers/purple-pi-oh2/applications/docker',
                    },
                    {
                      label: 'Node-RED',
                      slug: 'single-board-computers/purple-pi-oh2/applications/node-red',
                    },
                    {
                      label: 'OpenCV',
                      slug: 'single-board-computers/purple-pi-oh2/applications/opencv',
                    },
                    {
                      label: 'ROS 2',
                      slug: 'single-board-computers/purple-pi-oh2/applications/ros2',
                    },
                    {
                      label: 'Home Assistant',
                      slug: 'single-board-computers/purple-pi-oh2/applications/home-assistant',
                    },
                  ],
                },
                {
                  label: 'Industrial protocols',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      slug: 'single-board-computers/purple-pi-oh2/industrial-protocols',
                    },
                    {
                      label: 'Modbus RTU',
                      slug: 'single-board-computers/purple-pi-oh2/industrial-protocols/modbus',
                    },
                    {
                      label: 'MQTT',
                      slug: 'single-board-computers/purple-pi-oh2/industrial-protocols/mqtt',
                    },
                    {
                      label: 'CAN bus',
                      slug: 'single-board-computers/purple-pi-oh2/industrial-protocols/can-bus',
                    },
                  ],
                },
                {
                  label: 'NPU & AI',
                  slug: 'single-board-computers/purple-pi-oh2/npu',
                },
              ],
            },
          ],
        },
        {
          label: 'Robotics',
          items: [{ label: 'Overview', slug: 'robotics' }],
        },
        {
          label: 'Troubleshooting',
          items: [{ label: 'Overview', slug: 'troubleshooting' }],
        },
        {
          label: 'Contributing',
          items: [{ label: 'How to contribute', slug: 'contributing' }],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#151B2B' },
        },
      ],
    }),
  ],
});
