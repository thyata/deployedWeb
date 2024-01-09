import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paramCase } from 'change-case';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Typography, CardContent, Link, IconButton, Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// utils
import { frDate } from 'src/utils/formatTime';
// @types
import { CampagneVaccinationMadelAPI, Locations } from 'src/@types/Campain';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
// assets
import { ReactComponent as PeopleSvg } from '../../../assets/user.svg';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

type Props = {
  campain: any;
  index?: number;
  sectionLevel?: string;
  cover: string;
  supervisorInZone: any;
  link: string;
};

export default function DRASCard({
  campain,
  index,
  sectionLevel,
  cover,
  supervisorInZone,
  link,
}: Props) {
  const navigate = useNavigate();

  const { id, Wilaya_fr, Wilaya_ar } = campain;
  // const [cover,setCover]=useState('');
  // const cover =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuhtmDTGZR2cNGLKyMm72GTaQ-UxNzfY1bm8x2aOtUxZCDH--SJtUFQYy-AxCuqV4nqQ&usqp=CAU';

  // const totalAudience = locations.reduce(
  //   (sum: number, location: Locations) => sum + location.audience,
  //   0
  // );
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <IconButton
          color="inherit"
          onClick={() => {
            console.log('object', PATH_DASHBOARD.gestionnaireEffectif.centreCreateDRAS);
            navigate(PATH_DASHBOARD.gestionnaireEffectif.centreCreateDRAS);
          }}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            opacity: 10,
            position: 'absolute',
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
        <Link onClick={() => navigate(link)}>
          <Image alt="cover" src={cover} ratio="4/3" />
        </Link>
      </Box>

      <DRASContent
        title={Wilaya_fr}
        audience={campain.length}
        row={campain}
        sectionLevel={sectionLevel}
        data={campain}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type DRASContentProps = {
  title: string;
  audience: number;

  index?: number;
  row: CampagneVaccinationMadelAPI;
  sectionLevel?: string;
  data: any;
};

export function DRASContent({
  title,

  index,
  row,
  audience,
  sectionLevel,
  data,
}: DRASContentProps) {
  const latestCampainSmall = index === 0 || index === 1 || index === 2;
  const navigate = useNavigate();
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage;
  // if(choise === 1){
  //   name="Établissement 1";
  //  linkTo = PATH_DASHBOARD.gestionnaireEffectif.choise(paramCase('2'))
  // }else if(choise === 2){
  //   name="Régions 1";
  //   linkTo = PATH_DASHBOARD.gestionnaireEffectif.choise(paramCase('3'))
  // }else{
  //   name="Point de vaccinations";
  // }

  return (
    <CardContent
      sx={{
        pt: 3,
        width: 1,
        ...(latestCampainSmall && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }),
      }}
    >
      {/* <Link
        noWrap
        color="inherit"
        variant="subtitle2"
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate(linkTo)}
      > */}
      <Typography align="center">{data.Wilaya_fr && data.Wilaya_fr} </Typography>
      <Typography align="center">{data.moughata_fr && data.moughata_fr} </Typography>
      <Typography align="center">{data.bureau_fr && data.bureau_fr} </Typography>
      {/* </Link> */}
      <br />
      Total des PF: <b>78</b>
      <Typography
        style={{ marginTop: '10px' }}
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...(latestCampainSmall && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {`Dernière synchronisation : ${frDate(Date.now())}`}
      </Typography>
      {sectionLevel === 'election' && (
        <Button
          variant="outlined"
          onClick={() => navigate(PATH_DASHBOARD.gestionnaireEffectif.edit('23'))}
        >
          Detail
        </Button>
      )}
    </CardContent>
  );
}
