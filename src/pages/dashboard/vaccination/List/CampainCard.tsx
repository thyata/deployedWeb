import { paramCase } from 'change-case';
import { useNavigate} from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Typography, CardContent, Stack, Link ,IconButton} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import {frDate} from 'src/utils/formatTime';
// @types
import { CampagneVaccinationMadelAPI,Locations } from 'src/@types/Campain';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Label from 'src/components/label';
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
 
export default function CampainCard({ campain, index }: Props) {
  const isDesktop = useResponsive('up', 'md');
   const navigate = useNavigate();

  const {  title, createdAt ,locations,startDate,endDate} = campain;
  const cover = "https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1676298676~exp=1676299276~hmac=80e1d69a2d9fca13e1c0d3c34dbb7cf53d767cdd8ef52cae42438ad2887f247e";
  const totalAudience = locations.reduce((sum: number, location: Locations) => sum + location.audience, 0);
  const latestCampain = index === 0 || index === 1 || index === 2;
  const linkTo = PATH_DASHBOARD.vaccinCamp.view(paramCase(title));

  const handleEditRow = () => {
   navigate(PATH_DASHBOARD.vaccinCamp.edit(paramCase(title)),{
    state:{
      row:campain
    }
   });
  };




  if (isDesktop && latestCampain) {
    return (
     
        <Card>
        
          <Label
              variant="filled"
              color='error'
              sx={{
              top: 24,
              left: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
            >
              En cours
            </Label>
            <IconButton
            color="inherit"
            onClick={() => handleEditRow()}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              opacity: 1.5,
              position: 'absolute',
            }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
          <Link  onClick={() => navigate(linkTo)}>
          <CampainContent
            title={title}
            audience={totalAudience}
            createdAt={createdAt}
            index={index}
            row={campain}
          />

          <StyledOverlay />

          <Image alt="cover" src={cover} sx={{ height: 360 }} />
          </Link>
        </Card>
      
    );
  }

  return (
    <Link  onClick={() => navigate(linkTo)}>
      <Card>
        <Box sx={{ position: 'relative' }}>
      
          <Label
              variant="filled"
              color='info'
              sx={{
              top: 24,
              left: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
            >
              Terminée
            </Label>
            <IconButton
            color="primary"
            onClick={() => handleEditRow()}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              opacity: 2.5,
              position: 'absolute',
            }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>

          <Image alt="cover" src={cover} ratio="4/3" />
        </Box>

        <CampainContent
          title={title}
          audience={totalAudience}
          createdAt={createdAt}
          row={campain}
        />
      </Card>
    </Link>
  );
}

// ----------------------------------------------------------------------

type CampainContentProps = {
  title: string;
  audience: number;
  createdAt: Date | string | number;
  index?: number;
  row:CampagneVaccinationMadelAPI;

};

export function CampainContent({ title, createdAt, index ,row,audience}: CampainContentProps) {
  const isDesktop = useResponsive('up', 'md');
  const navigate = useNavigate();
  const linkTo = PATH_DASHBOARD.vaccinCamp.view(paramCase(title));

  const latestCampainLarge = index === 0;

  const latestCampainSmall = index === 1 || index === 2;

  const CAMPAIN_INFO = [
    { id: 'audience', value: audience , icon: 'eva:info-outline' },
    
  ];
 

  return (
      <CardContent
        sx={{
          pt: 4.5,
          width: 1,
          ...((latestCampainLarge || latestCampainSmall) && {
            pt: 0,
            zIndex: 9,
            bottom: 0,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestCampainLarge || latestCampainSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
         {`Date de lancement : ${frDate(row.startDate)}`}
      </Typography>
       <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestCampainLarge || latestCampainSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
         {`Date de fin : ${frDate(row.endDate)}`}
      </Typography>
      <Link 
        noWrap
        color="inherit"
        variant="subtitle2"
        onClick={() => navigate(linkTo)}
        sx={{ cursor: 'pointer' }}
      >
        <TextMaxLine
          variant={isDesktop && latestCampainLarge ? 'h5' : 'subtitle2'}
          line={2}
          persistent
        >
          {`Titre : ${title}`}
        </TextMaxLine>
      </Link>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: 'text.disabled',
          ...((latestCampainLarge || latestCampainSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {CAMPAIN_INFO.map((info) => (
          <Stack
            key={info.id}
            direction="row"
            alignItems="center"
            sx={{ typography: 'caption', ml: info.id === 'audience' ? 0 : 1.5 }}
          >
            <Iconify icon={info.icon} width={16} sx={{ mr: 0.5 }} />
            {`Population cible : ${info.value}`}
          </Stack>
        ))}
      </Stack>
    </CardContent>
  );
}
