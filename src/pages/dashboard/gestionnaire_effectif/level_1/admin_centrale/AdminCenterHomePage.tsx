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
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  MenuItem,
  Card,
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
// redux
import { useDispatch, useSelector } from 'src/redux/store';

import { Moughataa, states } from 'src/assets/data/WilayaAndMoughataa';
import { Bureau } from 'src/assets/data/listMembers';
// assets
import { ReactComponent as PeopleSvg } from '../../assets/users-more-svgrepo-com.svg';

// others
import DRASCard from './List/DRASCard';
import DRASSearch from './List/filter/DRAS_Search';
import ZoneListed from '../../gestionElection/zoneElection';

// ----------------------------------------------------------------------

export default function AdminCenterHomePage() {
  const { themeStretch } = useSettingsContext();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(5);
  const [selectedItem, setSelectedItem] = useState([]);

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

  return (
    <>
      <Helmet>
        <title>Administration centrale | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Gestion de l'election"
          links={[
            {
              name: 'Tableau de bord',
              href: '',
            },
            {
              name: 'Parametre',
              href: '',
            },
            {
              name: 'Geestion des election',
            },
          ]}
          action={<DRASSearch />}
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <Button
            // component={RouterLink}
            // to={PATH_DASHBOARD.gestionnaireEffectif.centreCreateDRAS}
            variant="contained"
            size="large"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => setOpenModal(true)}
          >
            Ajouter une zone
          </Button>

          {selectedItem.length !== 0 && (
            <Button
              // component={RouterLink}
              // to={PATH_DASHBOARD.gestionnaireEffectif.centreCreateDRAS}
              variant="contained"
              size="large"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => setOpenModal(true)}
            >
              Affecter un bureau
            </Button>
          )}
        </Stack>
        {/* Model add wilaya */}
        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter une zone</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField
                fullWidth
                select
                label="Wilaya"
                // value={filterWillaya}
                // onChange={onFilterWillaya}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: { maxHeight: 220 },
                    },
                  },
                }}
                sx={{
                  // maxWidth: { md: INPUT_WIDTH },
                  textTransform: 'capitalize',
                }}
              >
                {states.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    // onClick={() => handleSelectWilaya(option.name)}

                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>

              {/* {filterWillaya && ( */}
              <TextField
                fullWidth
                select
                label="Moughataa"
                // value={filterMougataa}
                // onChange={onFilterMoughataa}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: { maxHeight: 220 },
                    },
                  },
                }}
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {Moughataa.filter((moughataa) => moughataa.state_id).map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>

        <Card>
          <ZoneListed selectedItem={selectedItem} setSelectedITem={setSelectedItem} />
        </Card>
      </Container>
    </>
  );
}
