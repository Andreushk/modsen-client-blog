import { Metadata } from 'next';

import { ContactInformation, ErrorBoundary, Form, Heading, Map, SectionError } from '@/components';

export const metadata: Metadata = {
  title: 'Modsen Client Blog | Contact Us',
  description:
    'Find out how to contact us - our phone number, office locations, and phone mailing address. Or fill out the convenient form on this page!',
  keywords: 'location, working hours, contacts, email, phone',
};

const ContactUs: React.FC = () => (
  <>
    <Heading />
    <ContactInformation />
    <ErrorBoundary fallback={<SectionError />}>
      <Form />
    </ErrorBoundary>
    <ErrorBoundary fallback={<SectionError />}>
      <Map />
    </ErrorBoundary>
  </>
);

export default ContactUs;
