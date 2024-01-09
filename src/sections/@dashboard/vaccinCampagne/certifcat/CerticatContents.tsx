import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Grid, Stack, Typography, Paper, Checkbox } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// components
import { useSnackbar } from 'src/components/snackbar';
import FormProvider from 'src/components/hook-form';
import Iconify from 'src/components/iconify';

import { _bankingRecentTransitions } from 'src/_mock/arrays';
import {Certificate } from 'src/@types/Campain';
import CeratifacteCard from './CeratifacteCard';
import HistoriqueListPage from './HistoriqueListPage';


// ----------------------------------------------------------------------
const mylist = [
  { nom: 'Mohamed', type: 'Type A' },
  { nom: 'Sidi', type: 'Type B' },
  { nom: 'Ali', type: 'Type C' },
  { nom: 'Mohamed', type: 'Type A' },
  { nom: 'Sidi', type: 'Type B' },
  { nom: 'Ali', type: 'Type C' },
  { nom: 'Mohamed', type: 'Type A' },
  { nom: 'Sidi', type: 'Type B' },
  { nom: 'Ali', type: 'Type C' },
  { nom: 'Mohamed', type: 'Type A' },
];
const TABLE_HEAD = [
  { id: 'nom', label: 'Nom', align: 'left' },
  { id: 'type', label: 'Type de vaccin', align: 'left' },
  { id: '' },
];
const cards = [
  {
    id :1,
    title: "Hépatite",
  },
  {
    id :2,
    title: "Covid-19",
  },
  {
    id :3,
    title: "Rougeole",
  },
  {
    id :4,
    title: "Polio",
  },
  {
    id :5,
    title: "Coqueluche",
  },
  {
    id :6,
    title: "ROR",
  },
];


interface FormValuesProps extends Omit<Certificate,''> {
 
}

type Props = {
  isEdit?: boolean;
  certificate?: Certificate;
};

export default function CerticatContents({ isEdit = false, certificate }: Props) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const[showInfo,setShowInfo]=useState(false);


  const NewUserSchema = Yup.object().shape({
    NNI: Yup.string().required("Le numéro d'identité nationale est obligatoire"),
   
  });

  const defaultValues = useMemo(
    () => ({
      id:certificate?.id,
      NNI: certificate?.NNI || '',
      types:certificate?.types || [{name:''}],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [certificate]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && certificate) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, certificate]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.user.list);
      // console.log('DATA', data);
      console.log('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowInfo = () => {
    setShowInfo(true);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {!showInfo && <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <CeratifacteCard
                onSearch={handleShowInfo}
                description="Rechercher Patient par NNI"
                img="/assets/images/certficate/Seal_of_Mauritania.svg"
              />
            </Stack>
          </Grid>}
          {showInfo && <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <CeratifacteCard
                title={`Name : Patient \n
                        Age : 27 \n
                        Sex : H \n
                        Date de naissance : 12/03/1990`}
                img="/assets/images/certficate/Seal_of_Mauritania.svg"
              />
            </Stack>
          </Grid>}
          {!showInfo && <Grid item xs={12} md={8}>
            <HistoriqueListPage
                  title="Historique"
                  tableData={_bankingRecentTransitions}
                  tableLabels={[
                    { id: 'Nom', label: 'Nom' },
                    { id: 'NNI', label: 'NNI' },
                    { id: 'Type', label: 'Type de vaccin' },
                    { id: 'Date', label: 'Date de vaccination' },
                  ]}
              />
          </Grid>}
          {showInfo && <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Sélectionner du type de vaccination :
            </Typography>
            <Card
             sx={{ p: 1, display: 'flex', flexWrap: 'wrap' }}>
              {cards.map((card) => (
                <Paper
                  key={card.id}
                  variant="outlined"
                  sx={{
                    p: 3,
                    width: {
                      xs: 1,
                      md: 0.4,
                    },
                    position: 'relative',
                    margin: '0.5rem',
                  }}
                >
                  <Typography variant="subtitle2">{card.title}</Typography>
                   <Stack direction="row" alignItems="center" sx={{ top: 8, right: 8, position: 'absolute' }}>
                    <Checkbox
                      color="warning"
                      icon={<Iconify icon="material-symbols:check-box-outline" />}
                      checkedIcon={<Iconify icon="material-symbols:check-box" />}
                    // onChange={handleFavorite}
                      sx={{ p: 0.75 }}
                    />
                  </Stack>
                </Paper>
              ))}
            </Card>
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Valider
                  </LoadingButton>
              </Stack>
            </Grid>}
      </Grid>
    </FormProvider>
  );
}
