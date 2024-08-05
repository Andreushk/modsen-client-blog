import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, Sen } from 'next/font/google';

export const sen: NextFont = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sen',
});

export const inter: NextFont = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-inter',
});
