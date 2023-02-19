export const pages = [
  {
    title: 'Ukraine no torture',
    id: 'main',
    pages: [
      {
        title: 'Про нас',
        href: '/about',
      },
      {
        title: 'Новини',
        href: '/news',
      },
      {
        title: 'Наші проєкти',
        href: '/landing-marketing',
      },
      {
        title: 'Бібліотека',
        href: '/landing-software-company',
      },
      {
        title: 'Контакти',
        href: '/landing-course',
      },
    ],
  },
];

export interface Page {
  title: string;
  id: string;
  pages: {
    title: string;
    href: string;
  }[];
}
