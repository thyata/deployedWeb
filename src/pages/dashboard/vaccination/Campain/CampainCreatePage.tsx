import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import CampainNewEditForm from './CampainNewEditForm';

// ----------------------------------------------------------------------


export default function CampainCreatePage(){
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> User: Ajouter une campagne | Minimal UI</title>
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
            { name: 'Ajouter campagne' },
          ]}
        />
        <CampainNewEditForm/>
      </Container>
    </>
  );
}
