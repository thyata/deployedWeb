import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import RegionNewEditForm from './RegionNewEditForm';



// ----------------------------------------------------------------------


export default function RegionCreatePage(){
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Ajouter une région | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ajouter une région"
          links={[
            {
              name: 'Tableau de bord',
             
            },
            {
              name: 'Liste des régions',
              href: PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage,
            },
            { name: "Formulaire de création d'une région" },
          ]}
        />
        <RegionNewEditForm/>
      </Container>
    </>
  );
}
