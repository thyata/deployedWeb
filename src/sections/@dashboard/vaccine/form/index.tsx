import { useState, useMemo, useEffect } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import axiosInstance from 'src/auth/axios';

import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// @types
import { IInvoice, IInvoiceAddress } from '../../../../@types/vaccine';
// mock
import { _invoiceAddressFrom } from '../../../../_mock/arrays';
// components
import FormProvider, { RHFTextField } from '../../../../components/hook-form';
//
import InvoiceNewEditDetails from './InvoiceNewEditDetails';
import InvoiceNewEditAddress from './InvoiceNewEditAddress';
import InvoiceNewEditStatusDate from './InvoiceNewEditStatusDate';

// ----------------------------------------------------------------------

type IFormValuesProps = Omit<IInvoice, 'createDate' | 'dueDate' | 'invoiceFrom' | 'invoiceTo'>;

interface FormValuesProps extends IFormValuesProps {
  createDate: Date | null;
  dueDate: Date | null;
  invoiceFrom: IInvoiceAddress | null;
  invoiceTo: IInvoiceAddress | null;
}

type Props = {
  isEdit?: boolean;
  currentInvoice?: FormValuesProps;
};

export default function InvoiceNewEditForm({ isEdit, currentInvoice }: Props) {
  const navigate = useNavigate();

  const [loadingSave, setLoadingSave] = useState(false);

  const [loadingSend, setLoadingSend] = useState(false);

  const NewUserSchema = Yup.object().shape({
    createDate: Yup.string().nullable().required('Create date is required'),
    dueDate: Yup.string().nullable().required('Due date is required'),
    invoiceTo: Yup.mixed().nullable().required('Invoice to is required'),
  });

  const defaultValues = useMemo(
    () => ({
      invoiceNumber: currentInvoice?.invoiceNumber || '17099',
      createDate: currentInvoice?.createDate || new Date(),
      dueDate: currentInvoice?.dueDate || null,
      taxes: currentInvoice?.taxes || 0,
      status: currentInvoice?.status || 'draft',
      discount: currentInvoice?.discount || 0,
      invoiceFrom: currentInvoice?.invoiceFrom || _invoiceAddressFrom[0],
      invoiceTo: currentInvoice?.invoiceTo || null,
      items: currentInvoice?.items || [
        { title: '', description: '', service: '', quantity: 1, price: 0, total: 0 },
      ],
      totalPrice: currentInvoice?.totalPrice || 0,
    }),
    [currentInvoice]
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
    if (isEdit && currentInvoice) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentInvoice]);

  const handleSaveAsDraft = async (data: FormValuesProps) => {
    setLoadingSave(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSave(false);
      navigate(PATH_DASHBOARD.vaccine.list);
      console.log('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setLoadingSave(false);
    }
  };

  const handleCreateAndSend = async (data: FormValuesProps) => {
    setLoadingSend(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSend(false);
      navigate(PATH_DASHBOARD.vaccine.list);
      console.log('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setLoadingSend(false);
    }
  };
  const onSubmit =  async () => {
    /*  console.log("Form values:", values);
     console.log("Form rows data:", data);
 
   try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
    const response = await axiosInstance.post(`/hospital/vaccines/`,{name:values.vaccineName
   ,administrationMode:values.administrationMode,dosePer:values.dosePer,type:values.typeVaccine,
   dosePerType:values.dosePerType,doses:data});

     enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
     navigate(PATH_DASHBOARD.vaccine.list);
    } catch (error) {
      console.error('error',error);
    }  */
 };  

 const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
 
  const [openAddNewRoomType, setOpenAddNewRoomType] = useState(false);
  const handleCloseAddRoomType  = () => setOpenAddNewRoomType (false);
  const handlOpenAddNewRoomType = () => setOpenAddNewRoomType (true);

  const [isFetching, setIsFetching]= useState(false)
  const [inputTypeRoom,setInputTypeRoom]=useState('')
  const isTypeEmpty = inputTypeRoom.trim()==="";
 
    return (
      <>
        {' '}
        <div>
          <Modal
            open={openAddNewRoomType}
            onClose={handleCloseAddRoomType}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                required
                id="standard-basic"
                label="Type de la chambre"
                variant="standard"
                name="typeRoom"
                value={inputTypeRoom}
                onChange={(e) => setInputTypeRoom(e.target.value)}
              />
              <LoadingButton
                variant="contained"
                color="inherit"
                disabled={isTypeEmpty || isFetching}
                onClick={async () => {
                  try {
                    setIsFetching(true);
                    const response = await axiosInstance.post(`/hospital/vaccines/types/`, {
                      // name: inputRoomTypeName,
                    });
                    setIsFetching(false);
                    setInputTypeRoom('');
  
                    handleCloseAddRoomType();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                {isFetching ? <CircularProgress size={20} /> : 'Ajouter'}
              </LoadingButton>
            </Box>
          </Modal>
        </div>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
          <Grid container item xs={12} md={8}>
              <Grid item xs={6}>
            <Typography variant="h6" sx={{ color: 'text.disabled' }}>
              1- Nommer la Catégorie:
            </Typography>
            </Grid>
  
  
            <Grid item xs={6}>
            <RHFTextField name="nom" label="Nom" />
  
            </Grid>
        
          </Grid>
          <Grid container item xs={12} md={8}>
              <Grid item xs={6}>
            <Typography variant="h6" sx={{ color: 'text.disabled' }}>
            2- Type de chambre :
            </Typography>
            <Button variant="soft" onClick={handlOpenAddNewRoomType}>+ Add</Button>

            </Grid>
  
  
            <Grid item xs={6}>
            
          <Grid item xs={6}>
          <Controller
                    name="roomType"
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <RadioGroup row {...field} 
                      
                    
                      >
                        <FormControlLabel
                          value="VIP"
                          control={<Radio size="small" />}
                          label={<Typography sx={{ fontSize: 9 }}>VIP</Typography>}
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value="INDIVIDUEL"
                          control={<Radio size="small" />}
                          label={<Typography sx={{ fontSize: 9 }}>Individuel</Typography>}
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          label={<Typography sx={{ fontSize: 9 }}>Collective</Typography>}
                          value="COLLECTIVE"
                          control={<Radio size="small" />}
                          labelPlacement="bottom"
                        />
                      </RadioGroup>
                    )}
                  />
                 

          </Grid>
  
            </Grid>
        
          </Grid>
            <Grid container item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Box
                  rowGap={3}
                  columnGap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                  }}
                >
            <Grid  item xs={12} >
            <Typography variant="h6" sx={{ color: 'text.disabled' }}>
              3- Ajout des chambres et des lits :
            </Typography>
          </Grid>               
                </Box>
                <Grid container >
                  
                  <Grid item xs={6}>
                    <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        onClick={() => onSubmit}
                        loading={isSubmitting}
                      >
                        {!isEdit ? 'ENREGISTRER' : 'Save Changes'}
                      </LoadingButton>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      </>
    );
  }
  