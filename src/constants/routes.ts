export enum AppRoutes {
  BASIC = '/',
  BLOG_POST = '/blog-post',
  BLOG = '/blog',
  CATEGORY = '/category',
  ABOUT_US = '/about-us',
  CONTACT_US = '/contact-us',
  AUTHOR = '/author',
  PRIVACY_POLICY = '/privacy-policy',
}

export type AppRoutesType = `${AppRoutes}`;

export enum AppRoutesQueryParameters {
  CATEGORY = 'category',
}
