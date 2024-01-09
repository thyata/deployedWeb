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
import Form from '../../Forms/Responsable/Form';
import { FormValuesProps } from '../../Forms/Responsable/FormPropsValues';
// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  personnel?: FormValuesProps;
};

export default function PersonnelNewEditForm({ isEdit, personnel }: Props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingSend, setLoadingSend] = useState(false);
  const [selectedState, setSelectedState] = useState<string []>([]);
  const [firstId,setFirstId]=useState<number>();
  



  const NewUserSchema = Yup.object().shape({
    nom: Yup.string().nullable().required('Le nom de personne est obligatoire'),
    telephone: Yup.string().nullable().required('Le numéro du téléphone est obligatoire'),
    email: Yup.string().required('Email est obligatoire').email('Adresse e-mail invalide'),
    password: Yup.string().nullable().required("Le mot de passe du responsable est obligatoire"),
    post: Yup.string().nullable().required('Le post de personne est obligatoire'),
    
  });
  
  const defaultValues = useMemo(
    () => ({
      id:personnel?.id,
      nom: personnel?.nom || '',
      telephone:personnel?.telephone || '',
      email:personnel?.email || '',
      password:personnel?.password || '',
      post:personnel?.post || '',
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
      enqueueSnackbar(!isEdit ? 'La création a été realise avec succès!' : 'La mis à jour a été realise avec succès!');
      setLoadingSend(false);
      navigate(PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage);
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
