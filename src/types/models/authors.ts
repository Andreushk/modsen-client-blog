export type SocialMediasType = 'facebook' | 'twitter' | 'instagram' | 'linkedin';

export interface Author {
  id: number;
  name: string;
  socialLinks: Record<SocialMediasType, string>;
  postIds: number[];
  description: string;
  profileImageId: number;
}
