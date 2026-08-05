/**
 * All Heritage Electric copy lives here.
 *
 * Components never hardcode copy. To reuse this theme for another landing
 * page, duplicate this file, change the values, and the whole site follows.
 */

export const site = {
  name: 'Heritage Electric',
  legalName: 'D & M Electrical, Inc. dba Heritage Electric',
  tagline: 'Lighting and electrical for custom homes in the South Bay',
  phone: '(408) 253-8946',
  phoneHref: 'tel:+14082538946',
  email: 'dmurray@heritageelectric.com',
  address: {
    street: '381 E McGlincy Ln., Suite B',
    city: 'Campbell',
    state: 'CA',
    zip: '95008',
  },
  /**
   * CSLB licence is currently inactive. Nothing renders while this is null.
   * Set it to the number once the licence is reactivated and the footer
   * picks it up automatically.
   */
  licenseNumber: null as string | null,
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  eyebrow: 'Campbell, California',
  heading: 'Lighting and electrical for custom homes in the South Bay',
  lead: 'Heritage Electric has wired new builds and remodels in Los Altos Hills, Atherton, Saratoga and Woodside for more than 30 years. We work alongside the builder, the architect and the designer, from plan review through final trim.',
  primaryCta: { label: 'Call ' + site.phone, href: site.phoneHref },
  secondaryCta: { label: 'Email us', href: `mailto:${site.email}` },
};

export const stats = [
  { value: '30+', label: 'Years on residential custom homes' },
  { value: '2004', label: 'Incorporated as D & M Electrical, Inc.' },
  { value: '10', label: 'South Bay communities served' },
];

export const whatWeDo = {
  eyebrow: 'What we do',
  heading: 'The electrical on luxury new construction and remodels',
  lead: 'Most of our work comes to us through builders and architects we have known for years. A good part of it is lighting, which means the design, the control system, and the software that keeps it running afterward.',
  /** Provisional. Awaiting the office manager's current capability list. */
  services: [
    {
      title: 'Lighting design',
      body: 'Layouts developed with the architect and lighting designer before anything is framed.',
    },
    {
      title: 'Vantage control systems',
      body: 'Design, installation, programming, and the software updates that come later.',
    },
    {
      title: 'Wireless lighting control',
      body: 'Control without pulling new wire through a finished house.',
    },
    {
      title: 'Landscape lighting',
      body: 'Design and installation for grounds, paths, structures and planting.',
    },
    {
      title: 'Generator installation',
      body: 'Standby power sized and installed for the house it serves.',
    },
    {
      title: 'Car charging stations',
      body: 'Home charging installed to suit the panel and the parking.',
    },
    {
      title: 'Power connections for solar',
      body: 'Electrical work supporting solar systems on new builds and retrofits.',
    },
    {
      title: 'Plan review and project planning',
      body: 'Early involvement so the electrical is settled before it becomes expensive.',
    },
  ],
};

export const lightingControl = {
  eyebrow: 'Lighting control',
  heading: 'Run the lighting in a house from a phone, a tablet or a wall keypad',
  body: 'That is the Vantage side of what we do. We design the system, install it, program it, and come back to update the software when it needs it.',
};

export const whyUs = {
  eyebrow: 'Why builders keep calling us',
  heading: 'A custom house has a lot of people working on the same ceiling',
  lead: 'We are used to sitting down with the architect, the lighting designer, the builder and the homeowner and settling what actually gets built before anyone frames a wall. Getting that sorted early is most of what keeps a job on schedule.',
  points: [
    'More than 30 years on residential custom homes',
    'We work directly with architects, designers, builders and homeowners',
    'Lighting is a specialty here, not a sideline',
    'Independently owned and operated since the start',
  ],
};

export const about = {
  eyebrow: 'About',
  heading: 'Still independently owned, still in Campbell',
  paragraphs: [
    'Dave Murray started Heritage Electric with a partner in Campbell more than 30 years ago. The company incorporated in 2004 as D & M Electrical, Inc., doing business as Heritage Electric.',
    'Our market is the building contractors in this area, and our clients keep coming back for their maintenance, design and upgrade work. We have worked with the same suppliers for a long time, which helps when a job calls for something specific.',
  ],
};

export const serviceArea = {
  eyebrow: 'Where we work',
  heading: 'Across the South Bay, and select projects in San Francisco',
  places: [
    'Los Altos Hills',
    'Los Altos',
    'Monte Sereno',
    'Saratoga',
    'Cupertino',
    'Mountain View',
    'Atherton',
    'Woodside',
    'Santa Cruz',
    'San Francisco',
  ],
};

export const partners = {
  eyebrow: 'Who we work with',
  items: [
    'Mehus Construction Inc.',
    'Vantage Lighting Control',
    'Consolidated Electrical Distributors',
    'Bell Electrical Supply',
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Tell us about the project',
  lead: 'Call the office or send an email and we will get back to you.',
};

/** Interior page heroes. */
export const pages = {
  services: {
    eyebrow: 'Services',
    heading: 'What we handle on a custom home',
    lead: 'From plan review through final trim, on new builds and on remodels. Most of our work comes through builders and architects we have known for years.',
  },
  about: {
    eyebrow: 'About',
    heading: 'Thirty years of custom homes, run out of Campbell',
    lead: 'Independently owned since Dave Murray started the company, and still working the same South Bay communities.',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Talk to us about your project',
    lead: 'Call the office during business hours or send an email with the drawings. We will get back to you.',
  },
};

export const homeServicesPreview = {
  eyebrow: 'What we do',
  heading: 'The electrical on luxury new construction and remodels',
  lead: 'A good part of it is lighting, which means the design, the control system, and the software that keeps it running afterward.',
};
