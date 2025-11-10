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
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Plans & Pricing', href: '/#pricing' },
        { text: 'Download the App', href: '/#download' },
        { text: 'Security', href: '/#security' },
        { text: 'FAQ', href: '/#faq' },
      ],
    },
    {
      title: 'For Families',
      links: [
        { text: 'How it Works', href: '/#how-it-works' },
        { text: 'Add Your Sprouts', href: '/#steps' },
        { text: 'Invite Carers & Professionals', href: '/#collaboration' },
        { text: 'Stories from Families', href: '/#stories' },
      ],
    },
    {
      title: 'For Professionals',
      links: [
        { text: 'For Organizations', href: '/#organizations' },
        { text: 'For Carers', href: '/#carers' },
        { text: 'For Coordinators', href: '/#coordinators' },
        { text: 'Partner with Sproutful', href: '/#partners' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' },
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
