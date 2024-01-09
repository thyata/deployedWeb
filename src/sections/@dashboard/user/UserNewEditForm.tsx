/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel, TextField, MenuItem, InputAdornment, Dialog, DialogTitle } from '@mui/material';
import Iconify from 'src/components/iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { onOpenModal,
  onCloseModal,
  createService,
  updateService,
  deleteService,
  getServicesPage
} from 'src/redux/slices/service';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { IUserAccountGeneral } from '../../../@types/user';
// assets
import { countries } from '../../../assets/data';
// components
import Label from '../../../components/label';
import { CustomFile } from '../../../components/upload';
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
} from '../../../components/hook-form';
import './styles.css';
import ServiceForm from '../service/ServiceForm';
// redux
import { useDispatch, useSelector } from '../../../redux/store';

// ----------------------------------------------------------------------

interface FormValuesProps extends Omit<IUserAccountGeneral, 'avatarUrl'> {
  avatarUrl: CustomFile | string | null;
}

type Props = {
  isEdit?: boolean;
  service?: ServiceSubmit;
};

type ServiceSubmit = {
  id: string | number | null | undefined,
  name: string,
  subServices?: Array<ServiceSubmit>,
  team: Array<Team>,
  status: string
}

type Team = {
  id?: number | string | null,
  username?: string,
  name: string,
  nameAr?: string,
  status?: string,
  userRole?: string
}

export default function UserNewEditForm({ isEdit = false, service }: Props) {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const { services, openModal, selectedRange, selectedServiceId } = useSelector(
    (state) => state.service
  );

  const selectedService = useSelector(() => {
    if (selectedServiceId) {
      return services.find((s) => s.id?.toString() === selectedServiceId?.toString());
    }

    return null;
  });
  const [filterMajor, setFilterMajor] = useState('')

  const [filterChefService, setFilterChefService] = useState('')

  const [serviceName, setServiceName]= useState('')

  const [serviceStatus, setServiceStatus]= useState('ACTIVE')

  const [major, setMajor] = useState<Team>({
    username: '',
    name: '',
    nameAr: '',
    status: '',
    userRole: ''
  })

  const [chefService, setChefService] = useState<Team>({
    username: '',
    name: '',
    nameAr: '',
    status: '',
    userRole: ''
  })
  
  const optionsMajor = [
    {
        id: 1,
        name: 'Major 1'
    },
    {
        id: 2,
        name: 'Major 2'
    },
    {
        id: 3,
        name: 'Major 3'
    }
  ]

  const optionsChefService = [
    {
        id: 1,
        name:'Chef Service 1'
    },
    {
        id: 2,
        name: 'Chef Service 2'
    },
    {
        id: 3,
        name: 'Chef Service 3'
    }
  ]

  const [rows, setRows] = useState<Array<ServiceSubmit>>([])

  const columns = [
    'sous services',
  ]

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    // phoneNumber: Yup.string().required('Phone number is required'),
    // address: Yup.string().required('Address is required'),
    // country: Yup.string().required('Country is required'),
    // company: Yup.string().required('Company is required'),
    // state: Yup.string().required('State is required'),
    // city: Yup.string().required('City is required'),
    // role: Yup.string().required('Role is required'),
    // avatarUrl: Yup.string().required('Avatar is required').nullable(true),
  });

  const defaultValues = useMemo(
    () => ({
      name: service?.name || '',
      // email: currentUser?.email || '',
      // phoneNumber: currentUser?.phoneNumber || '',
      // address: currentUser?.address || '',
      // country: currentUser?.country || '',
      // state: currentUser?.state || '',
      // city: currentUser?.city || '',
      // zipCode: currentUser?.zipCode || '',
      // avatarUrl: currentUser?.avatarUrl || null,
      // isVerified: currentUser?.isVerified || true,
      // status: currentUser?.status,
      // company: currentUser?.company || '',
      // role: currentUser?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [service]
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
    if (isEdit && service) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, service]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const newService: ServiceSubmit = {
        id: service?.id,
        name: serviceName,
        subServices: rows,
        team: [
            major,
            chefService
        ],
        status: serviceStatus
    }
      
      console.log(newService)
      createService(newService);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleOpenModal = () => {
    dispatch(onOpenModal());
  };

  const handleCloseModal = () => {
    dispatch(onCloseModal());
  };

  const handleCreateUpdateService = (newService: ServiceSubmit) => {
    newService.id = selectedServiceId
    if (selectedServiceId) {
      dispatch(updateService(newService));
      enqueueSnackbar('Update success!');
    } else {
      // dispatch(createService(newService));
      console.log(newService)
      setRows([...rows, newService])
      enqueueSnackbar('Create success!');
    }
  };

  const handleDeleteService = async () => {
    try {
      if (selectedServiceId) {
        dispatch(deleteService(selectedServiceId));
        dispatch(getServicesPage())
        handleCloseModal();
        enqueueSnackbar('Delete success!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFilterMajor = (e: React.MouseEvent<Element>, m: Team) => {
    setFilterMajor(m.name);
    setMajor({...m})
  };

  const onFilterChefService = (e: React.MouseEvent<Element>, c: Team) => {
    setFilterChefService(c.name);
    setChefService({...c})
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3} sx={{ px: 3 }}>
              <RHFTextField name="name" label="Service Name" />
              <div className="flex" >
                <TextField
                    fullWidth
                    select
                    label="Chef Service"
                    value={filterChefService}
                    >
                        {optionsChefService.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option.name}
                            onClick={(e) => onFilterChefService(e, option)}
                            sx={{
                            mx: 1,
                            borderRadius: 0.75,
                            typography: 'body2',
                            textTransform: 'capitalize',
                            }}
                        >
                            {option.name}
                        </MenuItem>
                        ))}
                  </TextField>
                <TextField
                    fullWidth
                    select
                    label="Major Service"
                    value={filterMajor}
                    >
                        {optionsMajor.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option.name}
                            onClick={(e) => onFilterMajor(e,option)}
                            sx={{
                            mx: 1,
                            borderRadius: 0.75,
                            typography: 'body2',
                            textTransform: 'capitalize',
                            }}
                        >
                            {option.name}
                        </MenuItem>
                        ))}
                </TextField>
              </div>

              <div className='w-full relative' style={{textAlign: 'right', marginBottom: '.5rem'}}>
                <span className='plus-sign'onClick={handleOpenModal}>+</span>
              </div>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, borderBottom: 1 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Sous Services</TableCell>
                    </TableRow>
                  </TableHead>
                  {(rows.length > 0) ?
                    (<TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>) : (
                      <div className='w-full' style={{textAlign: 'center'}}>
                        <h2>Vide</h2>
                      </div>
                    )
                  }
                </Table>
              </TableContainer>

              <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Add Sous Service</DialogTitle>

                <ServiceForm
                  service={selectedService}
                  onCancel={handleCloseModal}
                  onCreateUpdateService={handleCreateUpdateService}
                  onDeleteService={handleDeleteService}
                />
              </Dialog>

              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!isEdit ? 'Create Service' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Stack>
          </Card>
    </FormProvider>
  );
}
