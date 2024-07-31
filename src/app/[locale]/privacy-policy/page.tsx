import { Metadata } from 'next';

import { BodyContent, PrivacyPolicyHeader } from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Privacy Policy',
  description: 'Explore our privacy policy on this page',
  keywords: 'blog, authors, privacy policy',
};

const PrivacyPolicy: React.FC = () => (
  <>
    <PrivacyPolicyHeader />
    <BodyContent />
  </>
);

export default PrivacyPolicy;
