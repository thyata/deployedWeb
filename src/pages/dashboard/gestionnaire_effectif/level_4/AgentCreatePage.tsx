import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { roleList } from 'src/assets/data/gestionData';
import AgentNewEditForm from './AgentNewEditForm';
import PointFocalForm from './pointFocalForm';

// ----------------------------------------------------------------------

export default function AgentCreatePage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Ajouter point focal | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ajouter un point focal"
          links={[
            {
              name: 'Tableau de bord',
            },
            {
              name: 'Parametre',
              href: PATH_DASHBOARD.gestionnaireEffectif.AgentsListe,
            },
            { name: 'Creer un point focal' },
          ]}
        />

        <PointFocalForm />

        {/* <Grid container spacing={2} py={2}>
          <Grid item xs={24} md={9} sm={9}>
            
          </Grid>
          <Grid item xs={24} md={3} sm={3}>
            <Card>
              <Container>
                <FormControl component="fieldset" variant="standard">
                  <FormLabel component="legend">Role</FormLabel>
                  <FormGroup>
                    {roleList.map((role: any, index: number) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={false} // Use the correct state variable
                            size="small"
                            onChange={(e) => {
                              const { name, checked, value } = e.target; // Extract 'checked' directly
                            }}
                            name={role.roleName}
                            value={role.roleName}
                          />
                        }
                        label={role.roleName}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Container>
            </Card>
          </Grid>
        </Grid>
        <Box py={2}>
          <Typography>Affecter a un bureau</Typography>
          <AgentNewEditForm />
        </Box> */}
      </Container>
    </>
  );
}
