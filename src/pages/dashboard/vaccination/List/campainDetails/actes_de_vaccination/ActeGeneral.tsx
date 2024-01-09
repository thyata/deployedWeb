import * as Yup from 'yup';
// form
import { useForm,useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography } from '@mui/material';

// components
import FormProvider, {
  RHFTextField,
} from 'src/components/hook-form';
import Image from 'src/components/image';

// @types
import { ActeFromAPI} from 'src/@types/Campain';


// ----------------------------------------------------------------------
interface FormValuesProps{
  NNI: string;
  nom: string;
  date_naiss: Date | null;
  pathologies: {
    id: number;
    name: string;
  }[];
  profession: string | null;
  sexe: string | null;
  type:string | null;
  vaccin:string | null;
  dose:string | null;
  num_lot:string|null;
  site_injection:string |null;
 
};

type Props ={
  actes?:ActeFromAPI;
};

export default function ActeGeneral({actes}:Props) {

  const UpdateUserSchema = Yup.object().shape({
});

  const cover = "https://www.hrw.org/sites/default/files/styles/embed_xxl/public/multimedia_images_2018/201803mena_mauritania_school3.jpg?itok=-7r_JKd3";

  const defaultValues = {
      NNI: actes?.patient?.identification,
      nom:actes?.patient?.fullName,
      date_naiss:actes?.patient?.birthDate,
      pathologies:actes?.pathologies,
      profession:'profession 1',
      sexe: actes?.patient?.gender,
      type:actes?.vaccine?.type?.name,
      vaccin:actes?.vaccine?.name,
      dose:actes?.dose?.title,
      num_lot:actes?.lotNumber,
      site_injection:actes?.injectionSite,
      
    };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    control,
    formState: {isSubmitted},
  } = methods;

  const { fields} = useFieldArray({
    control,
    name: 'pathologies',
  });
  
  return (
    <FormProvider methods={methods} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Information du patient :
            </Typography>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField disabled name="NNI" label="Numéro d'identification" />

              <RHFTextField disabled name="nom" label="Nom" />

              <RHFTextField disabled name="date_naiss" label="Date de naissance" />

              <RHFTextField disabled name="sexe" label="Sexe" />
              
              <RHFTextField disabled name="profession" label="Profession" />
            </Box>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
            >
             <Stack spacing={3}  sx={{ mt: 3 }}>
             {fields.map((item, index) => (
                <RHFTextField key={item.id} disabled name={`pathologies[${index}].name`} label="Pathologies préexistates" />
              ))}
            </Stack>
            </Box>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
            >
              <Stack spacing={3}  sx={{ mt: 3 }}>
                <Typography variant="h5">photo de la carte d&apos;identit&eacute; :</Typography>
              </Stack>
              
                <Image
                  alt="cover"
                  src={cover}
                  sx={{
                    display: "block",
                    margin: "0 auto",
                    width: 500,
                    height: 350,
                  }}
                />
            </Box>

          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Information de la vaccination :
            </Typography>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField disabled name="type" label="Type du vaccin" />

              <RHFTextField disabled name="vaccin" label="Nom du vaccin" />

              <RHFTextField disabled name="dose" label="Dose" />

              <RHFTextField disabled name="num_lot" label="Numéro de lot" />

              <RHFTextField disabled name="num_vaccin" label="Numéro de vaccin" />

              <RHFTextField disabled name="site_injection" label="site d'admission" />
            </Box>
          
          </Card>
          
        </Grid>
        
      </Grid>
    </FormProvider>
  );
}
