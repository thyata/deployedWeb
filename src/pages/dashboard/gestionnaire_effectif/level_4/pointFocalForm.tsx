import { useState, useMemo, useEffect } from 'react';
import { PATH_DASHBOARD } from 'src/routes/paths';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Autocomplete, Box, Card, Grid, MenuItem, Stack, TextField } from '@mui/material';

// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';

// Service
import CampainService from 'src/services/CampainService';
// Form
import { listBureaux } from 'src/assets/data/listMembers';
import { roleList } from 'src/assets/data/gestionData';
import Form from '../Forms/Responsable/Form';
import { FormValuesProps } from '../Forms/Responsable/FormPropsValues';

// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  personnel?: FormValuesProps;
};

export default function PointFocalForm({ isEdit, personnel }: Props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingSend, setLoadingSend] = useState(false);
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [firstId, setFirstId] = useState<number>();

  const NewUserSchema = Yup.object().shape({
    nom: Yup.string().nullable().required('Le nom de personne est obligatoire'),
    telephone: Yup.string().nullable().required('Le numéro du téléphone est obligatoire'),
    email: Yup.string().required('Email est obligatoire').email('Adresse e-mail invalide'),
    password: Yup.string().nullable().required('Le mot de passe du responsable est obligatoire'),
    post: Yup.string().nullable().required('Le post de personne est obligatoire'),
  });

  const defaultValues = useMemo(
    () => ({
      id: personnel?.id,
      nom: personnel?.nom || '',
      telephone: personnel?.telephone || '',
      email: personnel?.email || '',
      password: personnel?.password || '',
      post: personnel?.post || '',
    }),
    [personnel]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && personnel) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, personnel]);

  const handleCreateAndSend = async (data: FormValuesProps) => {
    setLoadingSend(true);

    try {
      // CampainService.createCampaign(data)
      // .then((response: any) => {
      //   console.log(response.data);
      // })
      // .catch((e: Error) => {
      //   console.log(e);
      // });
      reset();
      enqueueSnackbar(
        !isEdit
          ? 'La création a été realise avec succès!'
          : 'La mis à jour a été realise avec succès!'
      );
      setLoadingSend(false);
      navigate(PATH_DASHBOARD.gestionnaireEffectif.PointHomePage);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
      setLoadingSend(false);
    }
  };

  const typeAcces = [
    {
      id: '1',
      accessName: 'Mobile',
    },
    {
      id: '2',
      accessName: 'Web',
    },
  ];

  return (
    <FormProvider methods={methods}>
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
              <Stack spacing={1} direction="row">
                <RHFTextField name="nom" label="Nom" fullWidth />
                <RHFTextField
                  name="telephone"
                  label="Numéro du téléphone"
                  type="number"
                  fullWidth
                />
              </Stack>
              <Stack spacing={1} direction="row">
                <RHFTextField name="email" label="Nom d'utilisateur" fullWidth />
                <RHFTextField name="password" type="password" label="Mot de passe" fullWidth />
              </Stack>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  select
                  label="Platforme d'acces"
                  // value={filterWillaya}
                  // onChange={onFilterWillaya}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: { maxHeight: 220 },
                      },
                    },
                  }}
                  sx={{
                    // maxWidth: { md: INPUT_WIDTH },
                    textTransform: 'capitalize',
                  }}
                >
                  {typeAcces.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option.accessName}
                      // onClick={() => handleSelectWilaya(option.name)}

                      sx={{
                        mx: 1,
                        borderRadius: 0.75,
                        typography: 'body2',
                        textTransform: 'capitalize',
                      }}
                    >
                      {option.accessName}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack spacing={1}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={listBureaux}
                  getOptionLabel={(option: any) => option.nomBureau}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Affecter a un bureau"
                      placeholder="Selectionner bureau"
                    />
                  )}
                />
              </Stack>

              <Stack spacing={1}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={roleList}
                  getOptionLabel={(option: any) => option.roleName}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Accorder un role"
                      placeholder="Selectionner les roles"
                    />
                  )}
                />
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
        >
          {isEdit ? 'Modifier' : 'Créer'}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
