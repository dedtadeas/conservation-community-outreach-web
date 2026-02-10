import { getAsset, getPermalink } from './utils/permalinks';
import { chapters } from './data/manual';

export const headerData = {
  links: [
    { text: 'Project', href: getPermalink('/#project') },
    {
      text: 'Chapters',
      links: [
        { text: 'All Chapters', href: getPermalink('/chapters') },
        ...chapters.map((chapter) => ({
          text: `${chapter.label}: ${chapter.title}`,
          href: `${getPermalink('/chapters')}/#${chapter.slug}`,
        })),
      ],
    },
    { text: 'Akagera Case Study', href: getPermalink('/akagera-case-study') },
  ],
  actions: [{ text: 'Download Manual', href: getAsset('/Guidance%20PCM_A4_5.pdf'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Manual',
      links: [
        { text: 'Download PDF', href: getAsset('/Guidance%20PCM_A4_5.pdf') },
        { text: 'Chapters Page', href: getPermalink('/chapters') },
        { text: 'Akagera Case Study', href: getPermalink('/akagera-case-study') },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Project Overview', href: getPermalink('/#project') },
        { text: 'Chapter Highlights', href: getPermalink('/#chapters') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote:
    'Conservation Constituency Blueprint 2026. Produced by Safari Park Dvur Kralove with support of the Ministry of the Environment of the Czech Republic.',
};
