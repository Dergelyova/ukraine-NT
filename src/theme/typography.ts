import { TypographyOptions } from '@mui/material/styles/createTypography';

export const TYPOGRAPHY: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: [
    '"MacPawFixelDisplayBold"',
    '"MacPawFixelDisplaySemiBold"',
    '"MacPawFixelDisplayMedium"',
    '"MacPawFixelTextMedium"',
    '"Gilroy-Bold, sans-serif"',
    '"Gilroy-Light, sans-serif"',
    '"Open Sans, sans-serif"',
  ].join(','),
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: 'Gilroy-Light',
    fontWeight: 700,
    fontSize: '48px',
  },
  h2: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: 800,
    fontSize: '35px',
  },
  h3: {
    fontFamily: 'Gilroy-Light',
    fontWeight: 700,
    fontSize: '35px',
  },
  h4: {
    fontFamily: 'MacPawFixelDisplaySemiBold',
    fontWeight: 700,
    fontSize: '22px',
  },
  h5: {
    fontFamily: 'MacPawFixelDisplaySemiBold',
    fontSize: '16px',
    lineHeight: '1.2',
  },
  h6: {
    fontFamily: 'MacPawFixelDisplaySemiBold',
    fontSize: '20px',
    lineHeight: '1.4',
  },
  subtitle1: {
    fontFamily: 'MacPawFixelDisplayMedium',
    fontSize: '16px',
  },
  subtitle2: {
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '14px',
  },
  body1: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '16px',
  },
  body2: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '14px',
  },
  button: {
    fontFamily: 'MacPawFixelTextMedium',
    fontSize: '14px',

    textTransform: 'uppercase',
    letterSpacing: '8%',
  },
  caption: {
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '12px',
    textDecoration: 'underline',
  },
  overline: {
    fontFamily: 'MacPawFixelDisplayMedium',
    fontSize: '10px',

    letterSpacing: '0.12em',
  },
};
