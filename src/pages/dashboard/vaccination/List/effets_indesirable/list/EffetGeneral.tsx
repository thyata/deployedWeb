import { useState, useCallback } from 'react';
import * as Yup from 'yup';
// form
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

// components
import { CustomFile } from 'src/components/upload';

import FormProvider, { RHFTextField, RHFUpload } from 'src/components/hook-form';

// ----------------------------------------------------------------------

interface FormValuesProps {
  TypeVaccin: string;
  nomVaccin: string;
  images: (CustomFile | string)[];
  date_naiss: string | null;
  pathologie: {
    id: string;
    title: string;
  }[];
  profession: string | null;
  Observation: string | null;
  EnregistrementVocaux: string | null;
}

const useStyles = makeStyles({
  whiteText: {
    '& .Mui-disabled': {
      color: 'white',
    },
    '& .Mui-disabled::before': {
      color: 'white' /* change the color to white for the input's value */,
    },
  },
});

export default function EffetGeneral() {
  const UpdateUserSchema = Yup.object().shape({});
  const defaultValues = {
    typeVaccin: '',
    nomVaccin: '',

    profession: '',
    Observation: '',
    EnregistrementVocaux: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    control,
    watch,
    setValue,
    formState: { isSubmitted },
  } = methods;

  const values = watch();

  const { fields } = useFieldArray({
    control,
    name: 'pathologie',
  });
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('images', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );
  const handleRemoveFile = (inputFile: File | string) => {
    const filtered = values.images && values.images?.filter((file) => file !== inputFile);
    setValue('images', filtered);
  };

  const handleRemoveAllFiles = () => {
    setValue('images', []);
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true); // update the playing state to true when the audio starts playing
  };

  const handlePause = () => {
    setIsPlaying(false); // update the playing state to false when the audio is paused
  };
  const classes = useStyles();

  return (
    <FormProvider methods={methods}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Patient :
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
              <RHFTextField
                disabled
                name="NNI"
                label="Numéro d'identification"
                className={classes.whiteText}
              />

              <RHFTextField disabled name="nom" label="Nom" className={classes.whiteText} />

              <RHFTextField
                disabled
                name="date_naiss"
                label="Date de naissance"
                className={classes.whiteText}
              />

              <RHFTextField disabled name="sexe" label="Sexe" className={classes.whiteText} />

              <RHFTextField
                disabled
                name="profession"
                label="Profession"
                className={classes.whiteText}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Vaccin :
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
              <RHFTextField
                disabled
                name="type"
                label="Type du vaccin"
                className={classes.whiteText}
              />

              <RHFTextField
                disabled
                name="vaccin"
                label="Nom du vaccin"
                className={classes.whiteText}
              />

              <RHFTextField disabled name="dose" label="Dose" className={classes.whiteText} />

              <RHFTextField
                disabled
                name="num_lot"
                label="Numéro de lot"
                className={classes.whiteText}
              />

              <RHFTextField
                disabled
                name="num_vaccin"
                label="Numéro de vaccin"
                className={classes.whiteText}
              />

              <RHFTextField
                disabled
                name="site_injection"
                label="site d'admission"
                className={classes.whiteText}
              />
              <RHFTextField
                disabled
                name="date_naiss"
                label="Date de l'acte"
                className={classes.whiteText}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'red' }}>
              Effets indésirables :
            </Typography>
            <RHFTextField
              disabled
              name="observationDate"
              label="Date d'obsevation"
              className={classes.whiteText}
            />
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField
                disabled
                name="Observation"
                multiline
                rows={4}
                label="Observation"
                className={classes.whiteText}
              />
            </Stack>
            <Stack spacing={3} sx={{ mt: 3 }}>
              <Typography variant="h5">Enregistrements Vocal :</Typography>
              <Box>
                <audio
                  src="my-audio-file.mp3"
                  controls
                  onPlay={handlePlay}
                  onPause={handlePause}
                  style={{
                    width: 500,
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: 'lightgray',
                    padding: 1,
                  }}
                >
                  <track src="your-captions-file.vtt" kind="captions" label="English" default />
                </audio>
                {isPlaying && <p>Lecture en cours...</p>}
              </Box>
            </Stack>

            <Stack spacing={3} sx={{ mt: 3 }}>
              <Typography variant="h5">Images:</Typography>
              <RHFUpload
                disabled
                multiple
                thumbnail
                name="images"
                maxSize={3145728}
                onDrop={handleDrop}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.log('ON UPLOAD')}
              />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Pathologie préexistantes :
            </Typography>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
            >
              <Stack spacing={3} sx={{ mt: 3 }}>
                {fields.map((item, index) => (
                  <RHFTextField
                    key={item.id}
                    disabled
                    name={`pathologie[${index}].title`}
                    className={classes.whiteText}
                  />
                ))}
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Information du personnel :
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
              <RHFTextField disabled name="nom" label="Nom" className={classes.whiteText} />
              <RHFTextField
                disabled
                name="email"
                label="Adresse E-mail"
                className={classes.whiteText}
              />
              <RHFTextField
                disabled
                name="telephone"
                label="Numéro du téléphone"
                type="number"
                className={classes.whiteText}
              />
              <RHFTextField
                disabled
                name="post"
                label="Poste de travail"
                className={classes.whiteText}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
