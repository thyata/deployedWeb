// @mui
import { Box,Grid, Card } from '@mui/material';

// components
import {RHFTextField} from 'src/components/hook-form';
// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
};


export default function Form({ isEdit}: Props) {

 return (  
 <Grid container spacing={3}>
       <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
            >
              <RHFTextField name="nom" label="Nom" />
              <RHFTextField name="email" label="Adresse E-mail" />
              <RHFTextField name="password" type="password" label="Mot de passe"  />
              <RHFTextField name="telephone" label="Numéro du téléphone" type='number'/>
              <RHFTextField name="post" label="Poste de travail" />
            </Box>
          </Card>
        </Grid>
    </Grid>
    );

}
