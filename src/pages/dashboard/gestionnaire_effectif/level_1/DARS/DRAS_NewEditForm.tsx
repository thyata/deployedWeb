import { useState, useMemo, useEffect } from 'react';

import { PATH_DASHBOARD } from 'src/routes/paths';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack } from '@mui/material';

// components
import FormProvider from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';

// Service
import CampainService from 'src/services/CampainService';
// Form
import Form from '../../Forms/Etablissement/Form';
import { FormValuesProps } from '../../Forms/Etablissement/FormPropsValues';

// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  etablissement?: FormValuesProps;
};

export default function DRASNewEditForm({ isEdit, etablissement }: Props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingSend, setLoadingSend] = useState(false);

  const NewUserSchema = Yup.object().shape({
  nom: Yup.string().nullable().required("Le nom d'établissement est obligatoire"),
  imgUrl: Yup.string().nullable().required("Importer l'image d'établissement"),
  responsable: Yup.object().shape({
    nom: Yup.string().nullable().required("Le nom du responsable est obligatoire"),
    post: Yup.string().nullable().required("Le poste du responsable est obligatoire"),
    email: Yup.string().email().nullable().required("L'adresse e-mail du responsable est obligatoire"),
    telephone: Yup.string().nullable().required("Le numéro de téléphone du responsable est obligatoire"),
    password: Yup.string().nullable().required("Le mot de passe du responsable est obligatoire"),
  }),
  location: Yup.object().shape({
    region: Yup.object().shape({
      id: Yup.number().min(1).required("La région est obligatoire"),
    }),
  }),
});
  
  const defaultValues = useMemo(
    () => ({
      id:etablissement?.id,
      nom: etablissement?.nom || '',
      imgUrl:etablissement?.imgUrl || '',
      responsable:etablissement?.responsable || {nom:'',post:'',email:'',telephone:'',password:''},
      location:etablissement?.location || {region:{id:0},},
    }),
    [etablissement]
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
    if (isEdit && etablissement) { 
       reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, etablissement]);

  

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
      enqueueSnackbar(!isEdit ? 'La création a été realise avec succès!' : 'La mis à jour a été realise avec succès!');
      setLoadingSend(false);
      navigate(PATH_DASHBOARD.gestionnaireEffectif.centreHomePage);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
      setLoadingSend(false);
    }
  };

  return (
    <FormProvider methods={methods}>
      <Card>
       {/* {isEdit&&<Form isEdit selectedsState={selectedState} idType={firstId} ExistStartDate={campagneVaccination?.startDate} ExistEndDate={campagneVaccination?.endDate}/>}
       */}
       {!isEdit && <Form/>}
       
      </Card>
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
