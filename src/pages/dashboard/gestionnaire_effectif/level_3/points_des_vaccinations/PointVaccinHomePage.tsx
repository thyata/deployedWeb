import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { paramCase } from 'change-case';
// @mui
import {
  Grid,
  Button,
  Container,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// @types
import { CampagneVaccinationMadelAPI } from 'src/@types/Campain';
// components
import Iconify from 'src/components/iconify';
import { SkeletonPostItem } from 'src/components/skeleton';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// redux
import { useDispatch, useSelector } from 'src/redux/store';
// service
import CampainService from 'src/services/CampainService';
import ElectionRecord from 'src/pages/dashboard/election/electionRecord';
import ElectionStatistique from 'src/pages/dashboard/election/electionStatistique';
import { CeniBureauVote } from 'src/_mock/ceni_data/ceniRecords';
import PointCard from './List/PointCard';
import PointSearch from './List/filter/PointSearch';

// assets
import { ReactComponent as PeopleSvg } from '../../assets/users-more-svgrepo-com.svg';
import { ReactComponent as user } from '../../assets/user.svg';
// ----------------------------------------------------------------------

export default function PointVaccinHomePage() {
  const { themeStretch } = useSettingsContext();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(5);

  const handleSizePlus = () => {
    setSize(size + 5);
  };
  const dispatch = useDispatch();

  const getAllCampains = useCallback(async (pageNumber: number, sizeToGet: number) => {
    setIsLoading(true);
    CampainService.getAll(pageNumber, sizeToGet)
      .then((response: any) => {
        setIsLoading(false);
        const data = response.data;
        const { content } = data;
        setCampagnesData(content);
        console.log('Data From API :OK', content);
      })
      .catch((e: Error) => {
        setIsLoading(false);
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getAllCampains(0, size);
  }, [getAllCampains, size]);

  const [openModal, setOpenModal] = useState(false);

  const cover =
    'https://www.ville-laigle.fr/wp-content/uploads/2022/03/2022-03-29-Elections-1-833x540.png';

  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.edit('23');

  const supervisorPerZone = {
    zone: 'Ecole 10',
    numberSupervisor: 3,
  };

  const dataStatistique = {
    totalVotants: 446,
    numberVotants: 32,
    numberAdhere: 13,
  };
  return (
    <>
      <Helmet>
        <title>Points de vaccinations| Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Listes des bureaux"
          links={[
            {
              name: 'Tableau de bord',
              href: '',
            },
            {
              name: 'Election',
            },
            {
              name: 'Listes bureaux',
            },
          ]}
          action={<ElectionStatistique dataStatistique={dataStatistique} />}
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <TextField
            style={{ width: 200 }}
            select
            label="Filtre par bureau"
            // value={filterWillaya}
            // onChange={onFilterWillaya}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 200 },
                },
              },
            }}
            sx={{
              // maxWidth: { md: INPUT_WIDTH },
              textTransform: 'capitalize',
            }}
          >
            {CeniBureauVote.map((option) => (
              <MenuItem
                key={option.id}
                value={option.bureau_fr}
                // onClick={() => handleSelectWilaya(option.name)}

                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.bureau_fr}
              </MenuItem>
            ))}
          </TextField>
          <Button
            // component={RouterLink}
            // to={PATH_DASHBOARD.gestionnaireEffectif.PointListPersonnel}
            variant="contained"
            size="large"
          >
            Demarrer
          </Button>
        </Stack>

        {/* Model add wilaya */}
        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter point focal</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom" fullWidth />
              <TextField variant="outlined" label="Numero de telephone" fullWidth />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>
        {/* 
        <Grid container spacing={3}>
          {(!campagnesData.length ? [...Array(12)] : campagnesData).map((campain, index) =>
            campain ? (
              <Grid key={campain.id} item xs={12} sm={6} md={4}>
                <PointCard campain={campain} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
          {isLoading && <SkeletonPostItem key={5} />}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleSizePlus}
          >
            Voir plus
          </Button>
        </Box> */}

        <ElectionRecord
          electionData={CeniBureauVote}
          isLoading={isLoading}
          handleSizePlus={handleSizePlus}
          cover={cover}
          dataSupervisors={supervisorPerZone}
          link={linkTo}
        />
      </Container>
    </>
  );
}
