import { useNavigate } from 'react-router-dom';
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
  campain: CampagneVaccinationMadelAPI;
  index?: number;
};

export default function RegionCard({ campain, index }: Props) {
  const navigate = useNavigate();

  const { title, createdAt, locations } = campain;
  const cover =
    'https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/B%C3%A2timent_Confluence_Conseil_R%C3%A9gional_Lyon.JPG/640px-B%C3%A2timent_Confluence_Conseil_R%C3%A9gional_Lyon.JPG';

  const totalAudience = locations.reduce(
    (sum: number, location: Locations) => sum + location.audience,
    0
  );
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.PointHomePage;

  return (
    <Link onClick={() => navigate(linkTo)}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <IconButton
            color="inherit"
            onClick={() => navigate(PATH_DASHBOARD.gestionnaireEffectif.RegionCreateRegion)}
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

          <Image alt="cover" src={cover} ratio="4/3" />
        </Box>

        <RegionContent title={title} audience={totalAudience} createdAt={createdAt} row={campain} />
      </Card>
    </Link>
  );
}

// ----------------------------------------------------------------------

type RegionContentProps = {
  title: string;
  audience: number;
  createdAt: Date | string | number;
  index?: number;
  row: CampagneVaccinationMadelAPI;
};

export function RegionContent({ title, createdAt, index, row, audience }: RegionContentProps) {
  const latestCampainSmall = index === 0 || index === 1 || index === 2;
  const navigate = useNavigate();
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.PointHomePage;

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
      <Typography align="center">KSAR</Typography>
      {/* </Link> */}
      <br />
      Total des PF: <b>89</b>
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        style={{ marginTop: '16px' }}
        sx={{
          color: 'text.disabled',
          ...(latestCampainSmall && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {`Dernière synchronisation : ${frDate(row.startDate)}`}
      </Typography>
      <Button variant="outlined">Detail</Button>
    </CardContent>
  );
}
