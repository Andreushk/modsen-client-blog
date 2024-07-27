import { SocialMediasType } from '@/types/models/authors';

interface SocialMediaOptions {
  href: string;
  iconName: SocialMediasType;
}

const SOCIAL_MEDIA_OPTIONS: SocialMediaOptions[] = [
  { href: 'www.facebook.com', iconName: 'facebook' },
  { href: 'www.twitter.com', iconName: 'twitter' },
  { href: 'www.instagram.com', iconName: 'instagram' },
  { href: 'www.linkedin.com', iconName: 'linkedin' },
];

export default SOCIAL_MEDIA_OPTIONS;
