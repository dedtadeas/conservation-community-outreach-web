import { getAsset } from '~/utils/permalinks';

export interface ManualChapter {
  slug: string;
  label: string;
  title: string;
  summary: string;
  pageRange: string;
  detail: string[];
  topics: string[];
}

export const manualMeta = {
  title: 'Conservation x Education Guidance Manual',
  subtitle: 'Methodological Guidance for African Parks Community Management',
  version: 'Version 1.0 - 2025',
  pdfPath: getAsset('/Guidance%20PCM_A4_5.pdf'),
  projectSummary:
    'A practical framework built in Akagera to align conservation impact with community engagement, education, and livelihoods.',
  briefing: {
    whatItIs:
      'A field-ready manual for Community Outreach Teams to design conservation outreach as a measurable strategy, not a list of activities.',
    whyDeveloped:
      'It was developed after Akagera workshops in 2023 and 2024 to move from output tracking toward evidence-based behaviour change and clear strategic priorities.',
    whoItHelps:
      'Primary users are park community teams and managers, with direct value for district authorities, teachers, community leaders, and implementation partners.',
  },
};

export const chapters: ManualChapter[] = [
  {
    slug: 'part-1',
    label: 'Part 1',
    title: 'Context and framework',
    pageRange: 'Pages 5-11',
    summary: 'Why conservation constituency building matters and how the 3E+ approach is positioned in African Parks.',
    detail: [
      'Explains why protected area sustainability depends on social and economic resilience in adjacent communities.',
      'Defines community management and sets ethical foundations: FPIC, inclusion, transparency, and do-no-harm.',
    ],
    topics: [
      'Strategic context of conservation constituency building',
      'Community outreach strategy in Akagera',
      'Definition of community management',
      'Integrated 3E+ model and guiding principles',
      'How to use the guide',
    ],
  },
  {
    slug: 'part-2',
    label: 'Part 2',
    title: 'Steps to formulation of outreach strategy',
    pageRange: 'Pages 12-21',
    summary: 'A step-by-step process to diagnose problems, define goals, and select feasible actions.',
    detail: [
      'Walks through objective setting, problem analysis, stakeholder mapping, and prioritization by impact and feasibility.',
      'Introduces barrier analysis and desired behaviour design to replace generic messaging with targeted action.',
    ],
    topics: [
      'Clear goals and objectives',
      'Problem identification',
      'Stakeholder and target group analysis',
      'Prioritisation by impact and feasibility',
      'Barrier analysis for behaviour change',
    ],
  },
  {
    slug: 'part-3',
    label: 'Part 3',
    title: 'Implementation and monitoring',
    pageRange: 'Pages 22-27',
    summary: 'How to translate strategy into action and measure uptake, outcomes, and communication impact.',
    detail: [
      'Builds Theory of Change logic across Engagement, Education, and Economy components.',
      'Defines SMART indicators, CCI tracking, and monitoring loops for adaptive annual planning.',
    ],
    topics: [
      'Theory of Change formulation',
      'Monitoring outcomes and indicators',
      'Communication practice and messaging',
    ],
  },
  {
    slug: 'part-4',
    label: 'Part 4',
    title: 'Recommendations on crosscutting issues',
    pageRange: 'Pages 28-30',
    summary: 'Operational safeguards and system support for inclusive and conflict-sensitive implementation.',
    detail: [
      'Covers do-no-harm standards, inclusive design, and grievance and feedback systems.',
      'Positions Partnerships+ as a practical mechanism for needs beyond the direct mandate of outreach teams.',
    ],
    topics: [
      'Do-no-harm and conflict prevention',
      'Gender mainstreaming and inclusion',
      'Grievance and feedback mechanisms',
      'Strategic implementation of Partnerships+',
    ],
  },
  {
    slug: 'part-5',
    label: 'Part 5',
    title: 'Case study from Akagera',
    pageRange: 'Pages 31-39',
    summary: 'The practical prototype: from workshop process to priorities, behaviour messages, and lessons learned.',
    detail: [
      'Shows the Akagera 2025-2050 strategy as a tested model for high-pressure conservation landscapes.',
      'Demonstrates how specific target-group behaviours and barrier diagnosis improve implementation quality.',
    ],
    topics: [
      'Development of Akagera strategy 2025-2050',
      'Prioritized problems and target groups',
      'Actionable behaviours and messages',
      'ToC visualization and analysis',
      'Lessons learned and capacity needs',
    ],
  },
  {
    slug: 'part-6',
    label: 'Part 6',
    title: 'Conclusions',
    pageRange: 'Pages 40-42',
    summary: 'Final recommendations and a concise toolkit reference for field implementation.',
    detail: [
      'Summarizes implementation recommendations for teams and decision-makers.',
      'Lists practical tools to support rollout, monitoring, and continuous improvement.',
    ],
    topics: ['Overall recommendations', 'Useful tools and documents'],
  },
];
