import { NextFont } from 'next/dist/compiled/@next/font';
import { Open_Sans, Sen } from 'next/font/google';

export const sen: NextFont = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sen',
});

export const openSans: NextFont = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-openSans',
});
