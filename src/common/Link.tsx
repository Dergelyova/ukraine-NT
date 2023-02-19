import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import React from 'react';
import Link from '@mui/material/Link';

interface Props {
  underlined: boolean;
  color?: string;
  link: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<Props> = ({
  underlined,
  color,
  link,
  children,
}) => {
  return (
    <Link
      href={link}
      variant="caption"
      underline="none"
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        margin: 1,
        color: { color },
      }}
    >
      {children} <ArrowCircleRightRoundedIcon sx={{ width: 20 }} />
    </Link>
  );
};
