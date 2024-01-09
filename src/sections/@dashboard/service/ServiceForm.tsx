/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect, useCallback, useRef, MouseEventHandler, MouseEvent, ChangeEvent, SetStateAction } from 'react';
import * as Yup from 'yup';
import merge from 'lodash/merge';
import { isBefore } from 'date-fns';
import { DateInput, EventInput } from '@fullcalendar/common';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Stack, Button, Tooltip, TextField, IconButton, DialogActions, MenuItem, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

// redux
import { useDispatch } from 'src/redux/store';

// calendar
// import { getServices } from 'src/redux/slices/calendar';

import { defaultSettings } from '../../../components/settings/config-setting';

// hooks
import useLocalStorage from '../../../hooks/useLocalStorage';
// @types
import { ICalendarEvent } from '../../../@types/calendar';
// components
import Iconify from '../../../components/iconify';
import { ColorSinglePicker } from '../../../components/color-utils';
import FormProvider, { RHFTextField, RHFSwitch, RHFSelect } from '../../../components/hook-form';
import './styles.css';

// ----------------------------------------------------------------------

type FormValuesProps = ICalendarEvent;

type Props = {
  service: null | undefined | EventInput;
  onCancel: VoidFunction;
  onDeleteService: VoidFunction;
  onCreateUpdateService: (newService: ServiceSubmit) => void;
};

type ServiceSubmit = {
    id: string | number | null | undefined,
    name: string,
    subServices?: Array<ServiceSubmit>,
    team: Array<Team>,
    status: string
}

type Patient = {
  age: string,
  birthDate: string,
  doctors: [],
  fullName: string,
  gender: string,
  id: number,
  identification: string,
  lastUpdate: string,
  phoneNumber: string
};

type Category = {
  id: number,
  name: string,
  subCategories: []
}

type Service = {
  id: number,
  name: string,
  subServices: [],
  team: [],
  status: string
}

type Act = {
  id: number,
  name: string,
  service: Service,
  reference: string,
  defaultPrice: number,
  basePrice: number,
  type: string,
  category: Category,
  providers: Array<Provider>
}

type Provider = {
    id: number | undefined,
    user: {
        id: number,
        username: string,
        name: string,
        nameAr: string,
        status: string,
        userRole: string
    },
    basePrice: number,
    priceVariations: [
        {
            id: number,
            name: string,
            price: number
        }
    ]
}

type EventSubmit = {
  id?: number | string | null,
  patient: {
    id: number
  },
  status: string,
  date: DateInput | null,
  selectedFee: {
    provider?: {
      id: number 
    },
    fee: {
      id: number
    },
    price: string
  }
}

type Appointment = {
  id: number | string,
  patient: Patient,
  status: string,
  date: string | Date | null,
  createdAt: string,
  selectedFee: {
      id: number,
      provider: {
          id: number,
          username: string,
          name: string,
          nameAr: string,
          status: string,
          userRole: string
      },
      fee: Act,
      price: number,
      priceVariation: {
          id: number,
          name: string,
          price: number
      }
  },
  title?: string
}

type Team = {
    id?: number | string | null,
    username?: string,
    name: string,
    nameAr?: string,
    status?: string,
    userRole?: string
}

// ----------------------------------------------------------------------

// const getInitialValues = (
//   event: EventInput | null | undefined,
//   // range: { start: Date } | null
// ) => {
//   const initialEvent: FormValuesProps = {
//     title: '',
//     description: '',
//     textColor: '#1890FF',
//   };

//   if (event || range) {
//     return merge({}, initialEvent, event);
//   }

//   return initialEvent;
// };

// ----------------------------------------------------------------------

export default function ServiceForm({
  service,
  onCreateUpdateService,
  onDeleteService,
  onCancel,
}: Props) {
  const hasServiceData = !!service;
  
  
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  const dispatch = useDispatch();
  
  const span = document.querySelector('.span-custom');

  const [sousServiceName, setSousServiceName]= useState('')

  const [serviceStatus, setServiceStatus]= useState('ACTIVE')

  const [filterMajor, setFilterMajor] = useState('')

  const [filterChefService, setFilterChefService] = useState('')

  const [value, setValue] = useState('')

  const [isSousServiceOpen, setIsSousServiceOpen] = useState(false)

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

  const [isActs, setIsActs] = useState(true)

  const [isPersonelles, setIsPersonelles] = useState(false)
  
  const [isStocks, setIsStocks] = useState(false)

  const [isService, setIsService] = useState(true)

  const [isRotate, setIsRotate] = useState(false)

  const [isSousServiceForm, setIsSousServiceForm] = useState(false)

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

  const EventSchema = Yup.object().shape({
    // title: Yup.string().max(255).required('Title is required'),
    // description: Yup.string().max(5000),
  });

  const methods = useForm({
    resolver: yupResolver(EventSchema),
    // defaultValues: getInitialValues(service),
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  
  
  const getAllServices = useCallback( async () => {
    try{
      // let count = 0
    //   if(event){
    //     console.log(event)
    //     setSearchP({...event?.patient})
    //     setAct(event?.selectedFee?.fee.name)
    //     setActObj({...event.selectedFee.fee})
    //     setFilterStatus(event.status)
    //     setPriceVariation(event?.selectedFee.price.toString())
    //     provider.user.id = event?.selectedFee?.provider.id
    //   }
    //   const data = await onGetServices();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    //   setOptionsService([...data])
    } catch(err){
      console.log(err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

//   const loadOne = useCallback(() => {
//     if(event && patientSelected === false && closePatient === false){
//       setPatientSelected(true)
//       setIsFee(true)
//       setValue(event.selectedFee.price.toString())
//       if(settings.themeMode === 'light') {
//         span?.classList.add('move-top-light')
//       }
//       else {
//         span?.classList.add('move-top-dark')
//       }
//     }
//   }, [event, patientSelected, closePatient, settings.themeMode, span])
  
  useEffect(() => {
    // getAllServices();
    // loadOne()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // useEffect(() => {
  //   console.log(event);
  // }, [event]);

  const onSubmit = async () => {
    try {
      const newService: ServiceSubmit = {
        id: service?.id,
        name: sousServiceName,
        team: [
            major,
            chefService
        ],
        status: serviceStatus
    }
      
      console.log(newService)
      onCreateUpdateService(newService);
      onCancel();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  

  const onFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFilterType(e.target.value);
  };

  const onFilterActObj = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFilterFee(e.target.value);
  };

  const onFilterStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFilterStatus(e.target.value);
  };

  const onFilterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.stopPropagation();
    // setFilterData(e.target.value);
    // setIsProvider(true);
  };

//   const onFilterPriceVariation = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // e.stopPropagation();
//     setFilterPriceVariation(e.target.value);
//   };

//   const OnSearchPatientsClick = (e: React.MouseEvent<HTMLInputElement>) => {
//     const ev = (e.target as HTMLInputElement);
//     if(ev.value !== '') setIsPatientOpen(true)
//   };

//   const onActObjClick = (e: React.MouseEvent<HTMLDivElement>, p: Provider) => {
//     // setValue(e.currentTarget.innerText)
//     setIsPriceVariation(!isPriceVariation)
//     // setIsFeeOpen(false)
//     setIsProvider(false)
//     // e.stopPropagation();
//     // setIsActObj(true);
//     // console.log(isPriceVariation)
//     setProvider({...p})
//   };

  // useEffect(() => console.log('UseEffect says:',isPriceVariation));

const preventPropagation = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault()
    console.log(e.isPropagationStopped())
}

const onFilterMajor = (e: React.MouseEvent<Element>, m: Team) => {
    setFilterMajor(m.name);
    setMajor({...m})
};

const onFilterChefService = (e: React.MouseEvent<Element>, c: Team) => {
    setFilterChefService(c.name);
    setChefService({...c})
};

const onNext = (e: React.MouseEvent<Element>) => {
    setIsService(false);
};

function handleSections(e: MouseEvent<HTMLButtonElement>, n: number): void {
    if(n === 1){
        setIsActs(true)
        setIsPersonelles(false)
        setIsStocks(false);
    }

    else if(n === 2){
        setIsActs(false)
        setIsPersonelles(true)
        setIsStocks(false);
    }
    else if(n === 3){
        setIsActs(false)
        setIsPersonelles(false)
        setIsStocks(true);
    }
}

const handleCustomSelect = (e: MouseEvent<HTMLDivElement>) =>{
    setIsSousServiceOpen(!isSousServiceOpen)
    const customSelect = document.querySelector('.custom-select')
    span?.classList.add('move-top')
    if(settings.themeMode === 'light') {
      customSelect?.classList.add('custom-select-border-light')
      span?.classList.add('move-top-light')
    }
    else {
      customSelect?.classList.add('custom-select-border-dark')
      span?.classList.add('move-top-dark')
    }

    setIsRotate(!isRotate)
}

const handleSousServiceName = (e: ChangeEvent<HTMLInputElement>) => {
    setSousServiceName(e.target.value)
}


document.addEventListener("mousedown", (e) => {
    const f = document.querySelector('.fee')
    if (!f?.contains(e.target as HTMLElement)) {
      setIsSousServiceOpen(false)
      const v = document.querySelector('.value') as HTMLElement
      const customSelect = document.querySelector('.custom-select')
      // console.log(v.innerText)
      if(!v?.innerText){
      span?.classList.remove('move-top')
      span?.classList.remove('move-top-dark')
      }
      // console.log(span?.classList)
      if(settings.themeMode === 'light') {
        customSelect?.classList.remove('custom-select-border-light')
        if(value === '') span?.classList.remove('move-top-light')
      }
      else {
        customSelect?.classList.remove('custom-select-border-dark')
        if(value === '') span?.classList.remove('move-top-dark')
      }
  
      setIsRotate(false)
      }
  });



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        { (isService === true) ? (
            <Stack spacing={3} sx={{ px: 3 }}>
                <div className="flex" >
                    <div className='w-full'>
                        <RHFTextField name="name" 
                            value={sousServiceName}
                            onChange={handleSousServiceName}
                            label="Sous Service name" />
                    </div>
                </div>

                <div className="flex" >
                    <TextField
                        fullWidth
                        select
                        label="Chef Sous Service"
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
                        label="Major Sous Service"
                        value={filterMajor}
                        >
                            {optionsMajor.map((option) => (
                            <MenuItem
                                key={option.id}
                                value={option.name}
                                onClick={(e) => onFilterMajor(e, option)}
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
            </Stack>
        ):(
        <div className='container'>
            <div className="left">
                <button type="button" className='btn-routes' onClick={(e) => handleSections(e,1)}>Gestion Acts</button>
                <button type="button" className='btn-routes'  onClick={(e) => handleSections(e,2)}>Gestion Personelles</button>
                <button type="button" className='btn-routes'  onClick={(e) => handleSections(e,3)}>Gestion stocks</button>
            </div>
            <div className="right">
                {(isActs === true) &&
                    <div>
                        Acts
                    </div>
                }

                {(isPersonelles === true) &&
                    <div>
                        Personelles
                    </div>
                }

                {(isStocks === true) &&
                    <div>
                        Stocks
                    </div>
                }

            </div>
        </div>
        )}

      {(isService === true) ? (
        <DialogActions  onClick={onSubmit}>
            <LoadingButton type="button" variant="contained" loading={isSubmitting}>
                Add
            </LoadingButton>
        </DialogActions>
      ):
        <DialogActions>
            {hasServiceData && (
            <Tooltip title="Delete Service">
                <IconButton onClick={onDeleteService}>
                <Iconify icon="eva:trash-2-outline" />
                </IconButton>
            </Tooltip>
            )}
            
            <Box sx={{ flexGrow: 1 }} />

            <Button variant="outlined" color="inherit" onClick={onCancel}>
            Cancel
            </Button>

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {hasServiceData ? 'Update' : 'Add'}
            </LoadingButton>
        </DialogActions>
      }
    </FormProvider>
  );
}
