import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  title?: string;
  description: string;
}

const PrivacySection = ({ title, description }: Props) => {
  return (
    <Box>
      {title && (
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{
            fontWeight: 'medium',
          }}
        >
          {title}
        </Typography>
      )}
      <Typography component={'p'} color={'textSecondary'}>
        {description}
      </Typography>
    </Box>
  );
};

const Content = () => {
  const data = [
    {
      description:
        'Громадська організація "Україна без тортур" займається захистом прав людини в місцях несвободи та боротьбою проти тортур в Україні. Організація працює над вирішенням проблем, повязаних з порушенням прав людини та неприпустимим поводженням з особами, які перебувають під владою державних структур. Діяльність організації охоплює наступні пункти:',
    },
    {
      title: '1. Юридична допомога та правозахист.',
      description:
        'Організація забезпечує безкоштовну юридичну допомогу, захист прав та інтересів людей, які постраждали від тортур та інших форм незаконного поводження.',
    },
    {
      title: '2. Моніторинг стану прав людини в місцях несвободи.',
      description:
        '"Україна без тортур" проводить регулярний моніторинг установ, де знаходяться люди під вартою та інших місць несвободи з метою виявлення порушень прав людини.',
    },
    {
      title: '3.Розвиток альтернативних форм покарання.',
      description:
        "Організація залучається до розробки та впровадження альтернативних форм покарання, які б не містили складу тортур та інших форм незаконного поводження з в'язнями",
    },
    {
      title: '4. Навчання та розвиток.',
      description:
        'Організація проводить навчання для працівників правоохоронних органів та медичного персоналу, що мають стикаються з питаннями прав людини та запобігання тортурам.',
    },
    {
      title:
        '5. Як організація збирає інформацію про порушення прав людини в місцях несвободи?',
      description:
        'Організація Україна без тортур має різні механізми збору інформації про порушення прав людини в місцях несвободи, зокрема, проводить моніторинг установ, які забезпечують попередження тортур та недопущення жорстокого поводження з особами, які знаходяться під вартою. Крім того, організація співпрацює з іншими правозахисними організаціями, установами держави та міжнародними організаціями, що дозволяє збирати інформацію з різних джерел.',
    },
    {
      title:
        '6. Як організація сприяє запобіганню тортур та захисту прав людини в місцях несвободи?',
      description:
        'Організація Україна без тортур сприяє запобіганню тортур та захисту прав людини в місцях несвободи шляхом проведення моніторингу установ, зокрема, застосування спеціальних інструментів для моніторингу та оцінки стану прав людини в місцях несвободи. Організація також сприяє підвищенню рівня обізнаності громадськості та державних установ щодо питань запобігання тортур та захисту прав людини в місцях несвободи.',
    },
  ];
  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={i < data.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;