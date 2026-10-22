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
        src: './src/assets/logo.svg',
        alt: 'Elephantronics',
      },
      favicon: '/favicon.svg',
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
      customCss: ['./src/styles/custom.css'],
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
