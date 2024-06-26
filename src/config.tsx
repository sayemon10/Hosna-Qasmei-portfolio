import { DiscordIcon } from '@/components/icons/discord';
import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { TwitchIcon } from '@/components/icons/twitch';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';

export const CONFIG = {
  name: 'Hosna Qasmei',
  headshot:
    'https://res.cloudinary.com/duud9d8dv/image/upload/v1696801306/headshot_mlyfwz.jpg',
  title: 'Software Developer',
  description: `Hi, I'm Hosna. I'm based in Los Angeles, California. In addition to coding, I also make YouTube videos, sharing my knowledge 
and experience on web & mobile development.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/hqasmei', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/hqasmei',
      icon: <GithubIcon />,
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@hqasmei',
      icon: <YouTubeIcon />,
    },
    {
      platform: 'Twitch',
      link: 'https://www.twitch.tv/hqasmei',
      icon: <TwitchIcon />,
    },
    {
      platform: 'Discord',
      link: 'https://discord.com/invite/agzuPEVxhT',
      icon: <DiscordIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/hosnaqasmei/',
      icon: <LinkedInIcon />,
    },
  ],
  projects: [
    {
      featured: true,
      name: 'ProjectPlannerAI',
      slug: 'project-planner-ai',
      description: 'Manage your side projects in one place.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1704691486/project-planner-ai_imlf93.png',
      link: 'https://projectplannerai.com/',
    },
    {
      featured: true,
      name: 'TechStackFinder',
      slug: 'tech-stack-finder',
      description: 'Top stacks for building projects and SaaS.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1705091981/tech-stack-finder_inkeoz.png',
      link: 'https://techstackfinder.com/',
    },
    {
      featured: true,
      name: 'RepoMapper',
      slug: 'repo-mapper',
      description: 'Visualize Your GitHub Repos in ASCII.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1708108981/portfolio/repo-mapper_yntapy.png',
      link: 'https://repo-mapper.vercel.app/',
    },
    {
      featured: false,
      name: 'Open Graph Vault',
      slug: 'open-graph-vault',
      description: 'Where all your open graph images live.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1704691426/open-graph-vault_pl6sgd.png',
      link: 'https://opengraphvault.com/',
    },
    {
      featured: false,
      name: 'CustomGradient',
      slug: 'custom-gradient',
      description: 'A gradient generator and editor.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1708045890/portfolio/icon_a7ignp.png',
      link: 'https://customgradient.com/',
    },
  ],
};
