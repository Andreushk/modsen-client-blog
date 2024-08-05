import '@/styles/reset.scss';
import '@/styles/global.scss';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Modsen Client Blog',
  description:
    'Read interesting articles and updates on our blog. Stay informed with the latest news, tips, and guides on trending topics.',
  keywords: 'blog, authors, creativity, posts, recommendations, creatives',
  openGraph: {
    title: 'Modsen Client Blog Site',
    description:
      'Read interesting articles and updates on our blog. Stay informed with the latest news, tips, and guides on trending topics.',
    siteName: 'Modsen Client Blog Site',
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => children;

export default RootLayout;
