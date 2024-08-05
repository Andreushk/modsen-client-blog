'use client';

import Link from 'next/link';

import { Button, Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { sen } from '@/styles/fonts';

import styles from './not-found.module.scss';

const PAGE_TITLE_CODE = 404;
const PAGE_TITLE_TEXT = 'Page not found';
const PAGE_DESCRIPTION =
  "The page you're looking for may not exist, have been removed, or been renamed";

const NotFound: React.FC = () => (
  <html lang="en">
    <body>
      <section className={`${styles.not_found} ${sen.className}`}>
        <h1>{PAGE_TITLE_CODE}</h1>
        <h3>{PAGE_TITLE_TEXT}</h3>
        <Paragraph style="dark">{PAGE_DESCRIPTION}</Paragraph>
        <div>
          <Link href={AppRoutes.BASIC}>
            <Button styleType="yellow">Home</Button>
          </Link>
        </div>
      </section>
    </body>
  </html>
);

export default NotFound;
