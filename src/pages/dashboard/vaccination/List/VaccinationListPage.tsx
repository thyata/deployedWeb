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
  Typography,
  MenuItem,
  TextField,
} from '@mui/material';
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
import { CeniWilaya } from 'src/_mock/ceni_data/ceniRecords';
import CampainCard from './CampainCard';
import CampainSearch from './filter/CampainSearch';
import DRASCard from '../../gestionnaire_effectif/level_1/admin_centrale/List/DRASCard';
import ElectionRecord from '../../election/electionRecord';
import ElectionStatistique from '../../election/electionStatistique';

// ----------------------------------------------------------------------

export default function VaccinationListPage() {
  const { themeStretch } = useSettingsContext();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(5);

  const handleSizePlus = () => {
    setSize(size + 5);
  };

  const dataStatistique = {
    totalVotants: 4567,
    numberVotants: 64,
    numberAdhere: 23,
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

  const cover =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuhtmDTGZR2cNGLKyMm72GTaQ-UxNzfY1bm8x2aOtUxZCDH--SJtUFQYy-AxCuqV4nqQ&usqp=CAU';

  const supervisorPerZone = {
    zone: 'Nouakchott',
    numberSupervisor: 323,
  };
  const linkTo = PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage;
  return (
    <>
      <Helmet>
        <title>Election | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Election"
          links={[
            { name: 'Tableau de bord', href: '' },
            {
              name: 'élection',
              href: '',
            },
            { name: 'Liste' },
          ]}
          action={<ElectionStatistique dataStatistique={dataStatistique} />}
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <TextField
            style={{ width: 200 }}
            select
            label="Filtre par Wilaya"
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
            {CeniWilaya.map((option) => (
              <MenuItem
                key={option.id}
                value={option.Wilaya_fr}
                // onClick={() => handleSelectWilaya(option.name)}

                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.Wilaya_fr}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <ElectionRecord
          isLoading={isLoading}
          electionData={CeniWilaya}
          handleSizePlus={handleSizePlus}
          cover={cover}
          dataSupervisors={supervisorPerZone}
          link={linkTo}
        />
      </Container>
    </>
  );
}
