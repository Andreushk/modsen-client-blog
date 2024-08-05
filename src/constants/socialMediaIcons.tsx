import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import { SocialMediasType } from '@/types/models/authors';

const SOCIAL_MEDIA_ICONS: Record<SocialMediasType, React.ReactNode> = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
};

export default SOCIAL_MEDIA_ICONS;
