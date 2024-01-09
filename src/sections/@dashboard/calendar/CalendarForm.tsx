/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect, useCallback, useRef, MouseEventHandler } from 'react';
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
// import { Provider } from 'react-redux';
// import EmptyContent from '../../../components/empty-content/EmptyContent';

// ----------------------------------------------------------------------

type FormValuesProps = ICalendarEvent;

type Props = {
  colorOptions: string[];
  event: null | undefined | EventInput;
  range: {
    start: Date;
    end: Date;
  } | null;
  onCancel: VoidFunction;
  onDeleteEvent: VoidFunction;
  onGetServices: () => Promise<Array<Service>>;
  onCreateUpdateEvent: (newEvent: EventSubmit, fullName: string) => void;
  onSearchPatients: (search: string) => Promise<Array<Patient>>;
  onSearchActs: (search: string) => Promise<Array<Act>>;
  onCategoriesByServiceId: (serviceId: number) => Promise<Array<Category>>,
  onActsByServiceIdAndCategoryId: (serviceId: number, categoryId: number) => Promise<Array<Act>>;
};

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

// ----------------------------------------------------------------------

const getInitialValues = (
  event: EventInput | null | undefined,
  range: { start: Date; end: Date } | null
  // range: { start: Date } | null
) => {
  const initialEvent: FormValuesProps = {
    title: '',
    description: '',
    textColor: '#1890FF',
    allDay: false,
    start: range ? new Date(range.start).toISOString() : new Date().toISOString(),
    end: range ? new Date(range.end).toISOString() : new Date().toISOString(),
  };

  if (event || range) {
    return merge({}, initialEvent, event);
  }

  return initialEvent;
};

// ----------------------------------------------------------------------

export default function CalendarForm({
  event,
  range,
  colorOptions,
  onCreateUpdateEvent,
  onSearchPatients,
  onSearchActs,
  onCategoriesByServiceId,
  onActsByServiceIdAndCategoryId,
  onGetServices,
  onDeleteEvent,
  onCancel,
}: Props) {
  const hasEventData = !!event;
  
  
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  const dispatch = useDispatch();

  const [patient, setPatient] = useState('');
  const [act, setAct] = useState('');
  const [actObj, setActObj] = useState<Act>({
    id: 0,
    name: '',
    service: {
      id: 0,
      name: '',
      subServices: [],
      team: [],
      status: ''
    },
    reference: '',
    defaultPrice: 0,
    basePrice: 0,
    type: '',
    category: {
      id: 0,
      name: '',
      subCategories: []
    },
    providers: []
  });

  const [provider, setProvider] = useState<Provider>({
    id: 0,
    user: {
        id: 0,
        username: '',
        name: '',
        nameAr: '',
        status: '',
        userRole: ''
    },
    basePrice: 0,
    priceVariations: [
        {
            id: 0,
            name: '',
            price: 0
        }
    ]
  })
  const [isService, setIsService] = useState(false);
  const [serviceId, setServiceId] = useState(0);
  const [patientSelected, setPatientSelected] = useState(false);
  const [closePatient, setClosePatient]= useState(false)  // const [patients, setPatients] = useState([]);

  let patients:Array<Patient> = []
  let actsSearch:Array<Act> = []

  const [acts, setActs] = useState<Array<Act>>([]);

  
  // const ref = useRef<HTMLDivElement>();
  const [isActOpen, setIsActOpen] = useState(false);
  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [isActObj, setIsActObj] = useState(false);
  const [isProvider, setIsProvider] = useState(false);
  const [isPriceVariation, setIsPriceVariation] = useState(false);
  const [isFee, setIsFee] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [isInitialFee, setIsInitialFee] = useState(true);
  const [isCategory, setIsCategory] = useState(false);
  const [isRotate, setIsRotate] = useState(false);
  const [isDropListOpen, setIsDropListOpen] = useState(false)

  // const [filtredPatient, setFiltredPatient] = useState(patientSelected === false ? [] : patients[0].filter(p => p.fullName === patient));
  // let searchPatient: Patient = {
  //   age: '',
  //   birthDate: '',
  //   doctors: [],
  //   fullName: '',
  //   gender: '',
  //   id: 0,
  //   identification: '',
  //   lastUpdate: '',
  //   phoneNumber: ''
  // }
  const [searchP, setSearchP] = useState<Patient>({
    age: '',
    birthDate: '',
    doctors: [],
    fullName: '',
    gender: '',
    id: 0,
    identification: '',
    lastUpdate: '',
    phoneNumber: ''
  })
  // const [searchFilter, setSearchFilter] = useState(patient === '' ? [] : patients.filter((p) =>  p.patient.match(patient)));
  const [searchFilter, setSearchFilter] = useState(patient === '' ? [] : patients);
  const [searchActFilter, setSearchActFilter] = useState(act === '' ? [] : acts.filter((p) =>  p.name.match(act)));
  const [value, setValue] = useState('');
  const [filterType, setFilterType] = useState('');
  const span = document.querySelector('.span-custom');

  const [filterService, setFilterService] = useState('');
  const [filterFee, setFilterFee] = useState('');
  const [optionsService, setOptionsService] = useState<Array<Service>>([])
  const [priceVariation, setPriceVariation] = useState('')

  const [optionsCategory, setOptionsCategory] = useState<Array<Category>>([])

  const [filterStatus, setFilterStatus] = useState('Scheduled');
  const optionsStatus = [
    'Scheduled',
    'Attended',
    'Cancelled',
    'Missed',
  ];

  const [filterData, setFilterData] = useState('');
  const [filterPriceVariation, setFilterPriceVariation] = useState('');

  const EventSchema = Yup.object().shape({
    // title: Yup.string().max(255).required('Title is required'),
    // description: Yup.string().max(5000),
  });

  const methods = useForm({
    resolver: yupResolver(EventSchema),
    defaultValues: getInitialValues(event, range),
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
      if(event){
        console.log(event)
        setSearchP({...event?.patient})
        setAct(event?.selectedFee?.fee.name)
        setActObj({...event.selectedFee.fee})
        setFilterStatus(event.status)
        setPriceVariation(event?.selectedFee.price.toString())
        provider.user.id = event?.selectedFee?.provider.id
      }
      const data = await onGetServices();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setOptionsService([...data])
    } catch(err){
      console.log(err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadOne = useCallback(() => {
    if(event && patientSelected === false && closePatient === false){
      setPatientSelected(true)
      setIsFee(true)
      setValue(event.selectedFee.price.toString())
      if(settings.themeMode === 'light') {
        span?.classList.add('move-top-light')
      }
      else {
        span?.classList.add('move-top-dark')
      }
    }
  }, [event, patientSelected, closePatient, settings.themeMode, span])
  
  useEffect(() => {
    getAllServices();
    loadOne()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // useEffect(() => {
  //   console.log(event);
  // }, [event]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      let newEvent: EventSubmit = {
        id: event?.id,
        patient: {
          id: searchP.id
        },
        status: filterStatus,
        date: event?.date ? event?.date : data.start,
        selectedFee: {
          provider: {
            id: provider.user.id
          },
          fee: {
            id: actObj.id
          },
          price: priceVariation
        }
      };
      if(provider.user.id === 0){
        newEvent = {
          id: event?.id,
          patient: {
            id: searchP.id
          },
          status: filterStatus,
          date: event?.date ? event?.date : data.start,
          selectedFee: {
            fee: {
              id: actObj.id
            },
            price: priceVariation
          }
        };
      }
      
      console.log(newEvent)
      console.log(provider)
      onCreateUpdateEvent(newEvent, searchP.fullName);
      onCancel();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  

  const onFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType(e.target.value);
  };

  const onFilterActObj = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterFee(e.target.value);
  };

  const onFilterStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
  };

  const onFilterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.stopPropagation();
    setFilterData(e.target.value);
    setIsProvider(true);
  };

  const onFilterPriceVariation = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.stopPropagation();
    setFilterPriceVariation(e.target.value);
  };

  const OnSearchPatientsClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const ev = (e.target as HTMLInputElement);
    if(ev.value !== '') setIsPatientOpen(true)
  };

  const onActObjClick = (e: React.MouseEvent<HTMLDivElement>, p: Provider) => {
    // setValue(e.currentTarget.innerText)
    setIsPriceVariation(!isPriceVariation)
    // setIsFeeOpen(false)
    setIsProvider(false)
    // e.stopPropagation();
    // setIsActObj(true);
    // console.log(isPriceVariation)
    setProvider({...p})
  };

  // useEffect(() => console.log('UseEffect says:',isPriceVariation));

  const preventPropagation = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault()
    console.log(e.isPropagationStopped())
}

  const handleSearchpatients = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setPatient(e.target.value);
      if(e.target.value !== '') {
        const search: string = e.target.value
        const data = await onSearchPatients(search);
        // console.log('data', data)
        patients = data
        console.log('patients', patients)
        setIsPatientOpen(true)
        // filter = patients.filter((p) =>  p.patient.match(e.target.value));
        setSearchFilter([...patients])
        // console.log(filter)
      }
      else {
        const filter: Array<Patient> = []
        setSearchFilter([...filter])
        // console.log(e.target.value)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchActs = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAct(e.target.value);
    if(e.target.value !== '') {
      const search: string = e.target.value
      // let filter: Array<Act> = acts
      const data = await onSearchActs(search);
      actsSearch = data
      // filter = acts.filter((p) =>  p.name.match(e.target.value));
      setSearchActFilter([...actsSearch])
      // console.log(filter)
    }
    else {
      const filter: Array<Patient> = []
      setSearchFilter([...filter])
      // console.log(e.target.value)
    }
  };

  const handleActFieldClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsActOpen(true);
    // console.log(isActOpen)
  }

  const handleFormClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const classNames = ["content", "search-act", "MuiInputBase-input", "iconify"]
    const classCount =classNames.find((c) => (e.target as Element).classList.contains(c)) 
    // console.log((e.target as Element).classList)
    if(classCount === undefined) setIsActOpen(false)
  }

  const handleActClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsActOpen(true);
    // console.log(ref.current)
    // ref.current.focus();
  }

  const handleActNameClick = (e: React.MouseEvent<HTMLHeadingElement>, a:Act) => {
    setAct(a.name);
    setActObj(a)
    setIsActOpen(false);
    setIsFee(true)
    console.log(actObj)
  }

  // useEffect(() => {
  //   console.log(actObj)
  // }, [actObj]);  

  const handleServiceClick = async (e: React.MouseEvent<HTMLHeadingElement>, s:Service) => {
    if(s.subServices.length > 0) {
      setOptionsService([...s.subServices])
      console.log(optionsService)
    }
    else{
      setIsService(true);
      setServiceId(s.id)
      const data = await onCategoriesByServiceId(s.id);
      setOptionsCategory([...data])
      console.log(optionsCategory);
    }
  }

  const handleCategoryClick = async (e: React.MouseEvent<HTMLHeadingElement>, c: Category) => {
    if(c.subCategories.length > 0) {
      setOptionsCategory([...c.subCategories])
      console.log([optionsCategory])
    }
    else{
      setIsCategory(true);
      const data = await onActsByServiceIdAndCategoryId(serviceId,c.id);
      setActs([...data])
      console.log(acts);
    }
    // console.log(e.currentTarget.innerText);
  }

  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>, s:Patient) => {
    console.log('s',s)
    setPatientSelected(true)
    const text = e.currentTarget.innerText
    setPatient(text)
    // const filter = [...searchFilter.filter(s => s.fullName === text)]
    // setSearchFilter([...filter])
    // searchPatient = {...s}
    setSearchP({...s})
    console.log('text',text)
    console.log('searchP',searchP)
  };

  const handleFeeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsInitialFee(false)
    if(e.currentTarget.innerText !== 'providers') {
      setIsFeeOpen(false)
      setIsProvider(false)
      setValue(e.currentTarget.innerText)
    }
    else {
      setIsProvider(true)
    }
  }

  const handleFeeClickPrice = (e: React.MouseEvent<HTMLDivElement>, p: number) => {
    setPriceVariation(`${p}`)
    if(isPriceVariation === false){
      const prvdr: Provider = {
        id: 0,
        user: {
            id: 0,
            username: '',
            name: '',
            nameAr: '',
            status: '',
            userRole: ''
        },
        basePrice: 0,
        priceVariations: [
            {
                id: 0,
                name: '',
                price: 0
            }
        ]
      }
      setProvider({...prvdr})
    }
    setIsInitialFee(false)
    if(e.currentTarget.innerText !== 'providers') {
      setIsFeeOpen(false)
      setIsProvider(false)
      setValue(e.currentTarget.innerText)
    }
    else {
      setIsProvider(true)
    }
  }

  const handleBackService = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsService(false);
    // console.log(service);
  }

  const handleBackProvider = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsProvider(false)
    setIsInitialFee(true)
  }

  const handleBackPriceVariation = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsPriceVariation(false)
    setIsProvider(true)
  }

  const handleBackAct = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setIsCategory(false);
    // console.log(service);
  }

  const returnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e.currentTarget.innerText)
    setPatientSelected(false);
    setClosePatient(true);
    setPatient('');
  };

  const handleCustomSelect = (e: React.MouseEvent<HTMLElement>) => {
    setIsFeeOpen(!isFeeOpen);
    console.log(isPriceVariation)
    if (isProvider === false && isPriceVariation === false) setIsInitialFee(true)
    // else if(isPriceVariation === false) setIsProvider(true)
    else setIsPriceVariation(true)
    // const span = document.querySelector('.span-custom');
    const customSelect = document.querySelector('.custom-select')
    span?.classList.add('move-top')
    // console.log(span?.classList)
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

  const handleCustomSelectBlur = (e: React.FocusEvent<HTMLElement>) => {
    // const span = document.querySelector('.span-custom');
    const customSelect = document.querySelector('.custom-select')
    span?.classList.remove('move-top')
    span?.classList.remove('move-top-dark')
    console.log(span?.classList)
    if(settings.themeMode === 'light') {
      customSelect?.classList.remove('custom-select-border-light')
      span?.classList.remove('move-top-light')
    }
    else {
      customSelect?.classList.remove('custom-select-border-dark')
      span?.classList.remove('move-top-dark')
    }

    setIsRotate(false)
  }

  const handleOnActBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    console.log(e)
    setIsActOpen(false)
  }

  document.addEventListener("mousedown", (e) => {
    const a = document.querySelector('.act')
    const p = document.querySelector('.patient')
    const f = document.querySelector('.fee')
    if (!a?.contains(e.target as HTMLElement)) setIsActOpen(false)
    if (!p?.contains(e.target as HTMLElement)) setIsPatientOpen(false)
    if (!f?.contains(e.target as HTMLElement)) {
      // const span = document.querySelector('.span-custom');
      const v = document.querySelector('.value') as HTMLElement
      const customSelect = document.querySelector('.custom-select')
      // console.log(v.innerText)
      if(v.innerText === ''){
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


  const isDateError =
    !values.allDay && values.start && values.end
      ? isBefore(new Date(values.end), new Date(values.start))
      : false;

  return (
    // <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Stack spacing={3} sx={{ px: 3 }}>
          <div className="flex relative" >
            <div className='w-full patient'>
              {(patientSelected === false) ? 
                  (<TextField
                    label="patient"
                    fullWidth
                    value={patient}
                    onChange={handleSearchpatients}
                    onClick={OnSearchPatientsClick}
                    placeholder="Search patient..."
                    InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                  ),
                  }} />)
                  :(
                <div 
                className={`relative card ${settings.themeMode === 'light' ? 'card-light': 'card-dark'}`}>
                      <div className="return" onClick={returnClick}>
                        X
                      </div>
                      {/* {(event !== undefined || event !== null && searchP.fullName === '') ?
                        (
                          <> */}
                            {/* <div>
                              <p>nom: {event?.patient.fullName}</p>
                              <p className="w-50">tel: {event?.patient.phoneNumber}</p>
                            </div>
                            <div>
                                <p>age: {event?.patient.age}</p>
                                <p>birthDate: {event?.patient.birthDate}</p>
                            </div> */}
                          {/* </>
                        ):(
                          <> */}
                            <div>
                              <p>nom: {searchP.fullName}</p>
                              <p className="w-50">tel: {searchP.phoneNumber}</p>
                            </div>
                            <div>
                                <p>age: {searchP.age}</p>
                                <p>birthDate: {searchP.birthDate}</p>
                            </div>
                          {/* </>
                        )
                      } */}
                </div>)
              }
              {
                (searchFilter.length !== 0 && patientSelected === false && isPatientOpen === true) && 
                (
                  <div className={`search-patient ${settings.themeMode === 'light' ? 'card-light': 'card-dark'}`}>
                    {searchFilter.map((s,i) => 
                      (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                        <div key={i} onClick={(e) => handleClick(e,s)}>
                          {s.fullName}
                        </div>
                      )
                    )}
                    <button type='button' className="btn-add w-full">Add Patient</button>
                  </div>
                )
              }
            </div>

            <div className='w-full act'>
              <TextField
                fullWidth
                label="act"
                value={act}
                onChange={handleSearchActs}
                onClick={handleActClick}
                placeholder="Search act..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                  ),
                  }}
                />
              {
                (isActOpen) && 
                (
                  <div className={`search-act search-acts ${settings.themeMode === 'light' ? 'card-light': 'card-dark'}`}>
                  
                    {(act === '') ? (
                      <>
                        {(isService === false) &&
                          <div>
                            <p>Services</p>
                          </div>
                        }
                        {(isService === false) && optionsService.map((s,i) => 
                        (
                          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                            <div className="content" key={i} onClick={(e) => handleServiceClick(e,s)}>
                              {s.name}
                            </div>
                        ))}
                      </>
                      ):
                      (
                        searchActFilter.map((a,i) => 
                          (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                            <div className="content" key={i} onClick={(e) => handleActNameClick(e,a)}>
                              {a.name}
                            </div>
                          ))
                      )
                    }

                    {(act === '' && isService !== false && isCategory === false) && (
                      <>
                        <div>
                          <Iconify icon="material-symbols:arrow-back" sx={{ color: 'text.disabled' }} onClick={handleBackService} />
                        </div>
                        <p>Categories</p>
                        {optionsCategory.map((c,i) => 
                          (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                              <div className="content" key={i} onClick={(e) => handleCategoryClick(e,c)}>
                                {c.name}
                              </div>
                        ))}
                      </>
                      )
                    }

                    {(isCategory === true) && (
                      <>
                        <div>
                          <Iconify icon="material-symbols:arrow-back" sx={{ color: 'text.disabled' }} onClick={handleBackAct} />
                        </div>
                        <p>Acts</p>
                        {acts.map((a,i) => 
                          (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                              <div className="content" key={i} onClick={(e) => handleActNameClick(e,a)}>
                                {a.name}
                              </div>
                        ))}
                      </>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>

          <div className="flex">
            <Controller
              name="start"
              control={control}
              render={({ field }) => (
                <MobileDateTimePicker
                  {...field}
                  onChange={(newValue: Date | null) =>{ field.onChange(newValue)}}
                  label="Start date"
                  value={event?.date}
                  inputFormat="dd/MM/yyyy hh:mm a"
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              )}
            />
            
            {(isFee === true) &&
            <div className={`custom-select relative fee ${settings.themeMode === 'light' ? 'border-light': 'border-dark'}`}>
            <span className={`span-custom ${settings.themeMode === 'light' ? 'span-light': 'span-dark'} ${(event !== null && event !== undefined) ? 'move-top-dark move-top' : ''}`}>Fee</span>
              <div className="fee-click" onClick={handleCustomSelect}>
                {(value !== '') &&
                  <span className={`value ${settings.themeMode === 'light' ? 'value-light': 'value-dark'}`}>{value}</span>
                }
                <div className='flex-end icon-end'>
                  <InputAdornment position="end">
                      <Iconify icon="material-symbols:keyboard-arrow-down" sx={{ color: 'text.disabled', transform: isRotate === true ? "rotate(180deg)" : "rotate(0)"}} />
                  </InputAdornment>
                </div>
              </div>
                {(isFeeOpen === true) && 
                  <div className={`search-fee search-fees ${settings.themeMode === 'light' ? 'card-light': 'card-dark'}`}>
                      {(isInitialFee === true) && (
                        <>
                            <div>
                              <p>Fees</p>
                            </div>
                            <div className="content" onClick={(e) => handleFeeClickPrice(e,actObj?.defaultPrice)}>
                              default Price: &nbsp; {actObj?.defaultPrice}
                            </div>
                            <div className="content" onClick={(e) => handleFeeClickPrice(e,actObj?.basePrice)}>
                              base Price: &nbsp; {actObj?.basePrice}
                            </div>

                            {(actObj.providers.length > 0) &&
                              <div className="content" onClick={handleFeeClick}>
                                providers
                              </div>
                            }
                        </>
                      )}

                      {   
                        (isProvider === true) && (
                          <>
                            <div>
                              <Iconify icon="material-symbols:arrow-back" sx={{ color: 'text.disabled' }} onClick={handleBackProvider} />
                            </div>
                            <div>
                              Providers
                            </div>
                            {actObj.providers.map((p,i) => (
                              <div key={i} className="content" onClick={(e) => onActObjClick(e,p)}>
                                {p.user.name} | base Price = {p.basePrice}
                              </div>)
                            )}
                          </>)
                      }

                      {
                        (isPriceVariation === true) && (
                          <>
                            <div>
                              <Iconify icon="material-symbols:arrow-back" sx={{ color: 'text.disabled' }} onClick={handleBackPriceVariation} />
                            </div>
                            <div>
                              Price Variations
                            </div>
                            {
                            provider.priceVariations.map((p,i) => (
                              <div key={i} className="content" onClick={(e) => handleFeeClickPrice(e,p.price)}>
                                {p.name} | Price = {p.price}
                              </div>
                            ))}
                          </>
                        )
                      }
                  </div>
                }
            </div>
            }

            {/* {(isFee === true) &&
              <TextField
              fullWidth
              select
              label="Fee"
              value={filterFee}
              onChange={onFilterActObj}
              >
                  <MenuItem
                    value={actObj?.defaultPrice}
                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    default Price: &nbsp; {actObj?.defaultPrice}
                  </MenuItem>

                  <MenuItem
                    value={actObj?.basePrice}
                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    base Price: &nbsp; {actObj?.basePrice}
                  </MenuItem>
                    
                  {(actObj?.providers?.length > 0) &&
                  <MenuItem
                    value="providers"
                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    providers
                  </MenuItem>}
            </TextField>
            } */}
          </div>

          <div className="flex">
            <TextField
              fullWidth
              select
              label="Status"
              value={filterStatus}
              onChange={onFilterStatus}
              >
                {optionsStatus.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    sx={{
                      mx: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
            </TextField>

            {/* {   
              (filterFee === 'providers') && (
                <TextField
                  fullWidth
                  select
                  label="Providers"
                  value={filterData}
                  onChange={onFilterData}
                  onClick={preventPropagation}
                  >
                    {actObj.providers.map((p) => (
                      <MenuItem
                        key={p.id}
                        value={p.user.name}
                        onClick={(e) => onActObjClick(e,p)}
                        sx={{
                          mx: 1,
                          borderRadius: 0.75,
                          typography: 'body2',
                          textTransform: 'capitalize',
                        }}
                      >
                        {p.user.name} | base Price = {p.basePrice}
                      </MenuItem>)
                     
                    )}
                </TextField>)
            } */}
          </div>

          <div className='flex'>
            {/* <RHFTextField name="note" label="Note" multiline rows={3} /> */}

            {/* {
              (filterFee === 'providers' && isProvider === true) && 
                <TextField
                  fullWidth
                  select
                  label="price Variations"
                  value={filterPriceVariation}
                  onChange={onFilterPriceVariation}
                  onClick={preventPropagation}
                  >
                    
                    {
                    provider.priceVariations.map((p) => (
                      <MenuItem
                        key={p.id}
                        value={p.name}
                        sx={{
                          mx: 1,
                          borderRadius: 0.75,
                          typography: 'body2',
                          textTransform: 'capitalize',
                        }}
                      >
                        {p.name} | Price = {p.price}
                      </MenuItem>
                    ))}
                </TextField>
            } */}
          </div>
          

          {/* <RHFSwitch name="allDay" label="All day" /> */}

          {/* <Stack direction="row" spacing={3} sx={{ px: 3 }}>
            <Controller
              name="start"
              control={control}
              render={({ field }) => (
                <MobileDateTimePicker
                  {...field}
                  onChange={(newValue: Date | null) => field.onChange(newValue)}
                  label="Start date"
                  inputFormat="dd/MM/yyyy hh:mm a"
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              )}
            />

            <Controller
              name="end"
              control={control}
              render={({ field }) => (
                <MobileDateTimePicker
                  {...field}
                  onChange={(newValue: Date | null) => field.onChange(newValue)}
                  label="End date"
                  inputFormat="dd/MM/yyyy hh:mm a"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={!!isDateError}
                      helperText={isDateError && 'End date must be later than start date'}
                    />
                  )}
                />
              )}
            />
          </Stack> */}
          <Controller
            name="textColor"
            control={control}
            render={({ field }) => (
              <ColorSinglePicker
                value={field.value}
                onChange={field.onChange}
                colors={colorOptions}
              />
            )}
          />
        </Stack>
      </div>
      

      <DialogActions>
        {hasEventData && (
          <Tooltip title="Delete Event">
            <IconButton onClick={onDeleteEvent}>
              <Iconify icon="eva:trash-2-outline" />
            </IconButton>
          </Tooltip>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onCancel}>
          Cancel
        </Button>

        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
          {hasEventData ? 'Update' : 'Add'}
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}
