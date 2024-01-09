import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import {CampagneVaccinationMadelAPI} from 'src/@types/Campain';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import CampainNewEditForm from './CampainNewEditForm';

// ----------------------------------------------------------------------

export default function CampainCreatePage(){
  const { themeStretch } = useSettingsContext();
  const [campagne, setCampagne] = useState<CampagneVaccinationMadelAPI | undefined>(undefined);
  const {state} = useLocation();


  const {row} =state;
  useEffect(() => {
    setCampagne(row);
  }, [row]);

  return (
    <>
      <Helmet>
        <title> User: Modifier une campagne | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Campagne de vaccination"
          links={[
            {
              name: 'Tableau de bord',
             
            },
            {
              name: 'Campagnes',
              href: PATH_DASHBOARD.vaccinCamp.list,
            },
            { name: campagne?.title },
          ]}
        />
        <CampainNewEditForm isEdit campagneVaccination={campagne}/>
      </Container>
    </>
  );
}
