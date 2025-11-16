import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'For Families',
      href: getPermalink('/mobile-app'),
    },
    {
      text: 'For Professionals',
      href: getPermalink('/saas'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Plans & Pricing', href: '/pricing' },
        { text: 'Download the App', href: '/mobile-app' },
        { text: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X (Twitter)', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Sproutful. Made with care for families and professionals around the world.
  `,
};
