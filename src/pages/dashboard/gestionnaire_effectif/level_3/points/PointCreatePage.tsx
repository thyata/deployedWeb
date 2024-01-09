import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import PointNewEditForm from './PointNewEditForm';



// ----------------------------------------------------------------------


export default function PointCreatePage(){
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Ajouter une point | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ajouter une point de vaccinations"
          links={[
            {
              name: 'Tableau de bord',
             
            },
            {
              name: 'Liste des points de vaccinations',
              href: PATH_DASHBOARD.gestionnaireEffectif.PointHomePage,
            },
            { name: "Formulaire de création d'une point" },
          ]}
        />
        <PointNewEditForm/>
      </Container>
    </>
  );
}
