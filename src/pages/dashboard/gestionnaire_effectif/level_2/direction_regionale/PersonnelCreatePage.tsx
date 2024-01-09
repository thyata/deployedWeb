import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import PersonnelNewEditForm from './PersonnelNewEditForm';



// ----------------------------------------------------------------------


export default function PersonnelCreatePage(){
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Ajouter un personnel | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ajouter un personnel"
          links={[
            {
              name: 'Tableau de bord',
             
            },
            {
              name: 'Liste des personnels',
              href: PATH_DASHBOARD.gestionnaireEffectif.RegionListPersonnel,
            },
            { name: "Formulaire de création d'un personnel" },
          ]}
        />
        <PersonnelNewEditForm/>
      </Container>
    </>
  );
}
