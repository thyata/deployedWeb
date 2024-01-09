import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import DRASNewEditForm from './DRAS_NewEditForm';



// ----------------------------------------------------------------------


export default function DRAS_CreatePage(){
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Ajouter un établissement | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ajouter un établissement"
          links={[
            {
              name: 'Tableau de bord',
             
            },
            {
              name: 'Liste des établissements',
              href: PATH_DASHBOARD.gestionnaireEffectif.centreHomePage,
            },
            { name: "Formulaire de création d'un établissement" },
          ]}
        />
        <DRASNewEditForm/>
      </Container>
    </>
  );
}
