import { Metadata } from 'next';

import { ContactInformation, Form, Heading, Map } from '@/components';

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
    <Form />
    <Map />
  </>
);

export default ContactUs;
