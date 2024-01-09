import { useState, useMemo, useEffect } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// components
import FormProvider from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';

//
import CampainService from 'src/services/CampainService';
import { FormValuesProps } from './FormPropsValues';
import Form from './Form';
// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  campagneVaccination?: FormValuesProps;
};

export default function CampainNewEditForm({ isEdit, campagneVaccination }: Props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingSend, setLoadingSend] = useState(false);
  const [selectedState, setSelectedState] = useState<string []>([]);
  const [firstId,setFirstId]=useState<number>();
  



  const NewUserSchema = Yup.object().shape({
    title: Yup.string().nullable().required('Le nom de la campagne est obligatoire'),
    description: Yup.string().nullable().required('La description est obligatoire'),
    type: Yup.string().nullable().required('Le type de vaccin est obligatoire'), 
    Vaccine: Yup.string().nullable().required('Le vaccin est obligatoire'), 
    startDate: Yup.string().nullable().required('La date de lancement est obligatoire'),
    endDate: Yup.string().nullable().required('La date de fin est obligatoire'),
    
  });
  
  const defaultValues = useMemo(
    () => ({
      id:campagneVaccination?.id,
      title: campagneVaccination?.title || '',
      description: campagneVaccination?.description || '',
      vaccine:campagneVaccination?.vaccine|| null,
      type:campagneVaccination?.vaccine?.type.name|| '',
      Vaccine:campagneVaccination?.vaccine?.name || '',
      endDate:campagneVaccination?.endDate || null,
      startDate:campagneVaccination?.startDate || null,
      locations: campagneVaccination?.locations || [
        {region: {id:0}, quantity: 0, audience: 0},
      ],
      url:null,
    }),
    [campagneVaccination]
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
    if (isEdit && campagneVaccination) { 
      setFirstId(campagneVaccination.vaccine?.type.id);
      setSelectedState(campagneVaccination.locations.map(location => (location.region.state.id).toString()));
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, campagneVaccination]);

  

  const handleCreateAndSend = async (data: FormValuesProps) => {
    setLoadingSend(true);

    try {
      CampainService.createCampaign(data)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
      reset();
      enqueueSnackbar(!isEdit ? 'La création a été realise avec succès!' : 'La mis à jour a été realise avec succès!');
      setLoadingSend(false);
      navigate(PATH_DASHBOARD.vaccinCamp.list);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
      setLoadingSend(false);
    }
  };

  return (
    <FormProvider methods={methods}>
      <Card>
       {isEdit&&<Form isEdit selectedsState={selectedState} idType={firstId} ExistStartDate={campagneVaccination?.startDate} ExistEndDate={campagneVaccination?.endDate}/>}
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
