export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  theme: number; // 0-4 maps to color themes
}

export const PROJECTS: Project[] = [
  {
    title: 'Vertex',
    description:
      'A centralized platform for high school students to find, apply to, and track volunteer opportunities',
    image: '../../pictures/websites/5q1dcsong1.jpg',
    tags: ['Next.js', 'Three.js', 'Tailwind CSS', "Supabase"],
    liveUrl: 'https://fblc-26.vercel.app/',
    repoUrl: 'https://github.com/B-Eddie/fblc-26',
    theme: 0,
  },
  {
    title: 'Onyx',
    description:
      'A indie platform made at a Shanghai game jam for high school students. Built with Unity',
    image: '../../pictures/websites/onyx.png',
    tags: ['Unity', 'C#'],
    liveUrl: 'https://stony-su.itch.io/onyx',
    repoUrl: 'https://github.com/stony-su/onyx',
    theme: 1,
  },
  {
    title: 'Verdant',
    description:
      'A plant care companion app with ML-powered disease detection, watering schedules, and community plant swaps. Green thumb, digitized.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
    tags: ['Next.js', 'TensorFlow.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    theme: 2,
  },
  {
    title: 'ShadBus',
    description:
      'Calgary Mobile Grocery Bus Tracker - A proof of concept app for Calgary’s mobile grocery bus business, built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Google Translate API',   ],
    liveUrl: 'https://shadbusv2.vercel.app/',
    repoUrl: 'https://github.com/stony-su/shadbusv2',
    theme: 3,
  },
  {
    title: 'Frost',
    description:
      'A command-line productivity suite with task graphs, time tracking, and Git-integrated changelogs. For developers who live in the terminal.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&h=400&fit=crop',
    tags: ['Rust', 'CLI', 'SQLite', 'GitHub API'],
    liveUrl: '#',
    repoUrl: '#',
    theme: 4,
  },
];
