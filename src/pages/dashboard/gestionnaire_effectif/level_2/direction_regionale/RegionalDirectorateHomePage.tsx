import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
// @mui
import {
  Grid,
  Button,
  Container,
  Stack,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  DialogActions,
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
// service
import CampainService from 'src/services/CampainService';
import ElectionStatistique from 'src/pages/dashboard/election/electionStatistique';
import ElectionRecord from 'src/pages/dashboard/election/electionRecord';
import { CeniMoughataa } from 'src/_mock/ceni_data/ceniRecords';
import RegionCard from './List/RegionCard';
import RegionSearch from './List/filter/RegionSearch';
// assets

import { ReactComponent as PeopleSvg } from '../../assets/users-more-svgrepo-com.svg';
import { ReactComponent as user } from '../../assets/user.svg';
// ----------------------------------------------------------------------

export default function RegionalDirectorateHomePage() {
  const { themeStretch } = useSettingsContext();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(5);

  const handleSizePlus = () => {
    setSize(size + 5);
  };

  const dataStatistique = {
    totalVotants: 456,
    numberVotants: 24,
    numberAdhere: 13,
  };

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
    'https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/B%C3%A2timent_Confluence_Conseil_R%C3%A9gional_Lyon.JPG/640px-B%C3%A2timent_Confluence_Conseil_R%C3%A9gional_Lyon.JPG';

  const supervisorPerZone = {
    zone: 'El mina',
    numberSupervisor: 13,
  };
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.PointHomePage;

  return (
    <>
      <Helmet>
        <title>Direction regionale | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Listes des moughataas"
          links={[
            {
              name: 'Tableau de bord',
              href: '',
            },
            {
              name: 'Liste des moughataa',
              href: '',
            },
          ]}
          action={<ElectionStatistique dataStatistique={dataStatistique} />}
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <TextField
            style={{ width: 200 }}
            select
            label="Filtre par moughataa"
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
            {CeniMoughataa.map((option) => (
              <MenuItem
                key={option.id}
                value={option.moughata_fr}
                // onClick={() => handleSelectWilaya(option.name)}

                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.moughata_fr}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        {/* Model add wilaya */}
        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter region</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom du region" fullWidth />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>

        <ElectionRecord
          electionData={CeniMoughataa}
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
