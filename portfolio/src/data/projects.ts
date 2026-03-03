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
    title: 'Luminous',
    description:
      'A real-time collaborative whiteboard with infinite canvas, hand-drawn recognition, and WebSocket sync. Built for teams who think visually.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'WebSocket', 'Canvas API'],
    liveUrl: '#',
    repoUrl: '#',
    theme: 0,
  },
  {
    title: 'Nocturn',
    description:
      'An ambient music generator that creates evolving soundscapes from weather data. API-driven audio synthesis meets generative art.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    tags: ['TypeScript', 'Web Audio API', 'Three.js', 'REST'],
    liveUrl: '#',
    repoUrl: '#',
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
    title: 'Drift',
    description:
      'A travel journaling platform with interactive maps, photo timelines, and AI-suggested itineraries. Wander intentionally.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Mapbox', 'Supabase', 'OpenAI'],
    liveUrl: '#',
    repoUrl: '#',
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
