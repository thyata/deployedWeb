import FullCalendar, { DateSelectArg, EventClickArg, EventDropArg } from '@fullcalendar/react'; // => request placed at the top
import interactionPlugin, { EventResizeDoneArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import { DateInput, EventInput } from '@fullcalendar/common';
//
import { Helmet } from 'react-helmet-async';
import { useState, useRef, useEffect, useCallback } from 'react';
// @mui
import { Card, Button, Container, DialogTitle, Dialog, Divider, Tab, Tabs } from '@mui/material';

// User toolbar
import { UserTableToolbar } from 'src/sections/@dashboard/appointment/list';
// import Tabs from 'src/theme/overrides/Tabs';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import {
  getEvents,
  createEvent,
  searchPatients,
  updateEvent,
  deleteEvent,
  selectEvent,
  selectRange,
  onOpenModal,
  onCloseModal,
  searchEvent,
  getServices,
  getCategories,
  searchActByserviceIdAndCategoryId,
  searchActs,
  getProviders,
  searchAppointments,
} from 'src/redux/slices/calendar';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// utils
import { fTimestamp } from 'src/utils/formatTime';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// @types
import { ICalendarEvent, ICalendarViewValue } from 'src/@types/calendar';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { useDateRangePicker } from 'src/components/date-range-picker';
// sections
import {
  CalendarForm,
  StyledCalendar,
  CalendarToolbar,
  CalendarFilterDrawer,
} from 'src/sections/@dashboard/calendar';
// user list
import { _userList } from 'src/_mock/arrays';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#54D62C', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E', // theme.palette.error.darker
];

type Patient = {
  age: string;
  birthDate: string;
  doctors: [];
  fullName: string;
  gender: string;
  id: number;
  identification: string;
  lastUpdate: string;
  phoneNumber: string;
  title?: string;
};

type Service = {
  id: number;
  name: string;
  subServices: [];
  team: [];
  status: string;
};

type Category = {
  id: number;
  name: string;
  subCategories: [];
};

type Act = {
  id: number;
  name: string;
  service: Service;
  reference: string;
  defaultPrice: number;
  basePrice: number;
  type: string;
  category: Category;
  providers: [
    {
      id: number;
      user: {
        id: number;
        username: string;
        name: string;
        nameAr: string;
        status: string;
        userRole: string;
      };
      basePrice: number;
      priceVariations: [
        {
          id: number;
          name: string;
          price: number;
        }
      ];
    }
  ];
};

type Provider = {
  id: number;
  username: string;
  password: string;
  name: string;
  nameAr: string;
  status: string;
  userRole: string;
};

type EventSubmit = {
  id?: number | string | null;
  patient: {
    id: number;
  };
  status: string;
  date?: DateInput | null;
  selectedFee: {
    provider?: {
      id: number;
    };
    fee: {
      id: number;
    };
    price: string;
  };
  start?: string;
};

export default function CalendarPage() {
  const initialDate = new Date();
  let from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
    .toISOString()
    .split('T')[0];
  let to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
    .toISOString()
    .split('T')[0];
  const { enqueueSnackbar } = useSnackbar();

  const { themeStretch } = useSettingsContext();

  const dispatch = useDispatch();

  const isDesktop = useResponsive('up', 'sm');

  const calendarRef = useRef<FullCalendar>(null);

  const { events, openModal, selectedRange, selectedEventId } = useSelector(
    (state) => state.calendar
  );

  // let { events } = useSelector(
  //   (state) => state.calendar
  // );

  const selectedEvent = useSelector(() => {
    if (selectedEventId) {
      // console.log(events.find((event) => event?.id?.toString() === selectedEventId?.toString()))
      return events.find((event) => event.id?.toString() === selectedEventId?.toString());
    }

    return null;
  });

  const picker = useDateRangePicker(null, null);

  const [date, setDate] = useState(new Date());

  const [openFilter, setOpenFilter] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [filterEventColor, setFilterEventColor] = useState<string[]>([]);

  const [view, setView] = useState<ICalendarViewValue>(isDesktop ? 'dayGridMonth' : 'listWeek');

  // toolBar
  const [tableData, setTableData] = useState(_userList);

  const [filterName, setFilterName] = useState('');

  const [filterRole, setFilterRole] = useState('');

  const [service, setService] = useState<Service>({
    id: 0,
    name: '',
    subServices: [],
    team: [],
    status: '',
  });

  const [category, setCategory] = useState<Category>({
    id: 0,
    name: '',
    subCategories: [],
  });

  const [provider, setProvider] = useState<Provider>({
    id: 0,
    username: '',
    password: '',
    name: '',
    nameAr: '',
    status: '',
    userRole: '',
  });

  const [filterType, setFilterType] = useState('');

  const [Data_OPTIONS, setDataOptions] = useState<Array<Provider>>([]);

  const [filterData, setFilterData] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('All');
  const [optionsService, setOptionsService] = useState<Array<Service>>([]);

  const [Type_OPTIONS, setTypeOptions] = useState<Array<Category>>([]);

  const isFiltered = filterName !== '' || filterRole !== 'All' || filterStatus !== 'All';

  const STATUS_OPTIONS = ['All', 'Scheduled', 'Attended', 'Cancelled', 'Missed'];

  const ROLE_OPTIONS = ['Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5'];

  // const Type_OPTIONS =[
  //   'Specialist',
  //   'Radiologie',
  //   'Laboratory',
  //   'Surgery'
  // ];

  // const Data_OPTIONS =[
  //   'Specialist 1',
  //   'Specialist 2',
  //   'Specialist 3',
  //   'Specialist 4'
  // ]

  const getAllServices = useCallback(async () => {
    try {
      const data = await handlegetServices();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setOptionsService([...data]);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllCategories = useCallback(async () => {
    try {
      const data = await handlegetCategories();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTypeOptions([...data]);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllProviders = useCallback(async () => {
    try {
      const data = await handlegetProviders();
      setDataOptions([...data]);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterStatus = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    // const d = new Date();
    from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
      .toISOString()
      .split('T')[0];
    to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
      .toISOString()
      .split('T')[0];

    dispatch(getEvents({ from, to }, { status: newValue }));
    setFilterStatus(newValue);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchPatient(event.target.value);
    setFilterName(event.target.value);
    setFilterType('');
    setFilterRole('');
    setFilterData('');
    handleSearchAppointment(event.target.value);
  };

  const handleFilterService = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const handleFilterType = async (event: React.MouseEvent<Element>, c: Category) => {
    // setPage(0);
    setFilterType(c.name);
    setCategory(c);
    // const d = new Date();
    from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
      .toISOString()
      .split('T')[0];
    to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
      .toISOString()
      .split('T')[0];
    dispatch(
      getEvents({ from, to }, { serviceId: service.id, categoryId: c.id, providerId: provider.id })
    );
    // const data = await handlegetProviders();
    // setDataOptions([...data])
    // console.log(data);
  };

  const handleFilterRole = async (event: React.MouseEvent<Element>, s: Service) => {
    // setPage(0);
    handleSearchPatient(s.name);
    setFilterRole(s.name);
    setService(s);
    const data = await handlegetCategoriesByServiceId(s.id);
    setTypeOptions([...data]);
    // const d = new Date();
    from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
      .toISOString()
      .split('T')[0];
    to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
      .toISOString()
      .split('T')[0];
    dispatch(
      getEvents({ from, to }, { serviceId: s.id, categoryId: category.id, providerId: provider.id })
    );
    console.log(Type_OPTIONS);
  };

  const handleFilterData = (event: React.MouseEvent<Element>, p: Provider) => {
    // setPage(0);
    setFilterData(p.name);
    setProvider(p);
    // const d = new Date();
    from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
      .toISOString()
      .split('T')[0];
    to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
      .toISOString()
      .split('T')[0];
    dispatch(
      getEvents({ from, to }, { serviceId: service.id, categoryId: category.id, providerId: p.id })
    );
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterRole('');
    setFilterStatus('All');
    setFilterType('');
    setFilterData('');
    setService({
      id: 0,
      name: '',
      subServices: [],
      team: [],
      status: '',
    });

    setCategory({
      id: 0,
      name: '',
      subCategories: [],
    });

    setProvider({
      id: 0,
      username: '',
      password: '',
      name: '',
      nameAr: '',
      status: '',
      userRole: '',
    });

    getAllServices();
    getAllCategories();
    getAllProviders();
    // const d = new Date();
    from = new Date(initialDate.getFullYear(), initialDate.getMonth(), 2)
      .toISOString()
      .split('T')[0];
    to = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 1)
      .toISOString()
      .split('T')[0];
    if (
      filterStatus !== 'All' ||
      filterRole !== '' ||
      filterName !== '' ||
      filterType !== '' ||
      filterData !== ''
    )
      dispatch(getEvents({ from, to }));
  };
  // end toolbar
  useEffect(() => {
    const d = new Date();
    const beginnig = new Date(d.getFullYear(), d.getMonth(), 2).toISOString().split('T')[0];
    const end = new Date(d.getFullYear(), d.getMonth() + 1, 1).toISOString().split('T')[0];
    // console.log(beginnig, end)
    dispatch(getEvents({ from: beginnig, to: end }, { status: filterStatus }));
    // dispatch(getServices());
  }, [dispatch, filterStatus]);

  useEffect(() => {
    getAllServices();
    getAllCategories();
    getAllProviders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(events.find((event) => event.id === selectedEventId?.toString()))
  // },[events, selectedEventId]);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView: ICalendarViewValue) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      from = new Date(calendarApi.getDate().getFullYear(), calendarApi.getDate().getMonth(), 2)
        .toISOString()
        .split('T')[0];
      to = new Date(calendarApi.getDate().getFullYear(), calendarApi.getDate().getMonth() + 1, 1)
        .toISOString()
        .split('T')[0];
      console.log(from, to);
      dispatch(getEvents({ from, to }, { status: 'All' }));
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      from = new Date(calendarApi.getDate().getFullYear(), calendarApi.getDate().getMonth() + 1, 2)
        .toISOString()
        .split('T')[0];
      to = new Date(calendarApi.getDate().getFullYear(), calendarApi.getDate().getMonth() + 2, 1)
        .toISOString()
        .split('T')[0];
      console.log(from, to);
      dispatch(getEvents({ from, to }, { status: 'All' }));
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = (arg: DateSelectArg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
    dispatch(
      selectRange({
        start: arg.start,
        end: arg.end,
      })
    );
  };

  const handleSelectEvent = (arg: EventClickArg) => {
    dispatch(selectEvent(arg.event.id));
  };

  const handleResizeEvent = async ({ event }: EventResizeDoneArg) => {
    try {
      const e = {
        id: event.id,
        date: event?.start,
      };

      console.log('event', event);
      console.log('e', e);
      dispatch(updateEvent(e));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropEvent = async ({ event }: EventDropArg) => {
    try {
      const e = {
        id: event.id,
        date: event?.start,
      };

      console.log('event', event);
      console.log('e', e);
      dispatch(updateEvent(e, event._def.extendedProps.patient.fullName));
      dispatch(updateEvent(e, event._def.extendedProps.patient.fullName));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => {
    dispatch(onOpenModal());
  };

  const handleCloseModal = () => {
    dispatch(onCloseModal());
  };

  const handleCreateUpdateEvent = (newEvent: EventSubmit, fullName: string) => {
    newEvent.id = selectedEventId;
    if (selectedEventId) {
      dispatch(updateEvent(newEvent, fullName));
      enqueueSnackbar('Update success!');
    } else {
      dispatch(createEvent(newEvent, fullName));
      enqueueSnackbar('Create success!');
    }
  };

  const handleSearchPatient = (search: string) => dispatch(searchPatients(search));
  const handleSearchAppointment = (search: string) => dispatch(searchAppointments(search));
  const handlegetServices = () => dispatch(getServices());
  const handlegetCategoriesByServiceId = (serviceId: number) => dispatch(getCategories(serviceId));
  const handlegetProviders = () => dispatch(getProviders());
  const handlegetCategories = () => dispatch(getCategories());
  const handlegetAcByServiceIdAndCategoryId = (serviceId: number, categoryId: number) =>
    dispatch(searchActByserviceIdAndCategoryId(serviceId, categoryId));
  const handleSearchAct = (search: string) => dispatch(searchActs(search));

  const handleDeleteEvent = async () => {
    try {
      if (selectedEventId) {
        dispatch(deleteEvent(selectedEventId));
        dispatch(getEvents({ from, to }, { status: 'All' }));
        handleCloseModal();
        enqueueSnackbar('Delete success!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterEventColor = (eventColor: string) => {
    const checked = filterEventColor.includes(eventColor)
      ? filterEventColor.filter((value) => value !== eventColor)
      : [...filterEventColor, eventColor];

    setFilterEventColor(checked);
  };

  const dataFiltered = applyFilter({
    inputData: events,
    filterEventColor,
    filterStartDate: picker.startDate,
    filterEndDate: picker.endDate,
    isError: !!picker.isError,
  });

  return (
    <>
      <Helmet>
        <title> Appointements</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          heading="Appointments"
          links={[
            {
              name: 'Appointment',
              href: '',
            },
            {
              name: 'Appointment',
            },
          ]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={handleOpenModal}
            >
              New Appointment
            </Button>
          }
        />

        <Card>
          <Tabs
            value={filterStatus}
            onChange={handleFilterStatus}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Divider />

          <UserTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterRole={filterRole}
            filterType={filterType}
            filterData={filterData}
            optionsRole={optionsService}
            optionsType={Type_OPTIONS}
            optionsData={Data_OPTIONS}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            onFilterType={handleFilterType}
            onFilterData={handleFilterData}
            onResetFilter={handleResetFilter}
          />

          <Divider />

          <StyledCalendar>
            <CalendarToolbar
              date={date}
              view={view}
              onNextDate={handleClickDateNext}
              onPrevDate={handleClickDatePrev}
              onToday={handleClickToday}
              onChangeView={handleChangeView}
              onOpenFilter={handleOpenFilter}
            />
            <FullCalendar
              weekends
              editable
              droppable
              selectable
              allDayMaintainDuration
              eventResizableFromStart
              fixedWeekCount={false}
              showNonCurrentDates={false}
              startParam={from}
              endParam={to}
              events={dataFiltered}
              initialEvents={events}
              ref={calendarRef}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              select={handleSelectRange}
              eventDrop={handleDropEvent}
              eventClick={handleSelectEvent}
              eventResize={handleResizeEvent}
              height={isDesktop ? 720 : 'auto'}
              plugins={[
                listPlugin,
                dayGridPlugin,
                timelinePlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
            />
          </StyledCalendar>
        </Card>
      </Container>

      <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{selectedEvent ? 'Edit Appointment' : 'Add Appointment'}</DialogTitle>

        <CalendarForm
          event={selectedEvent}
          range={selectedRange}
          onCancel={handleCloseModal}
          onCreateUpdateEvent={handleCreateUpdateEvent}
          onSearchPatients={handleSearchPatient}
          onSearchActs={handleSearchAct}
          onCategoriesByServiceId={handlegetCategoriesByServiceId}
          onActsByServiceIdAndCategoryId={handlegetAcByServiceIdAndCategoryId}
          onGetServices={handlegetServices}
          onDeleteEvent={handleDeleteEvent}
          colorOptions={COLOR_OPTIONS}
        />
      </Dialog>

      <CalendarFilterDrawer
        events={events}
        picker={picker}
        open={openFilter}
        onClose={handleCloseFilter}
        colorOptions={COLOR_OPTIONS}
        filterEventColor={filterEventColor}
        onFilterEventColor={handleFilterEventColor}
        onResetFilter={() => {
          const { setStartDate, setEndDate } = picker;
          setFilterEventColor([]);
          if (setStartDate && setEndDate) {
            setStartDate(null);
            setEndDate(null);
          }
        }}
        onSelectEvent={(eventId: string) => {
          console.log('hey');
          if (eventId) {
            handleOpenModal();
            dispatch(selectEvent(eventId));
          }
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  filterEventColor,
  filterStartDate,
  filterEndDate,
  isError,
}: {
  inputData: EventInput[];
  filterEventColor: string[];
  filterStartDate: Date | null;
  filterEndDate: Date | null;
  isError: boolean;
}) {
  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterEventColor.length) {
    inputData = inputData.filter((event: EventInput) =>
      filterEventColor.includes(event.textColor as string)
    );
  }

  if (filterStartDate && filterEndDate && !isError) {
    inputData = inputData.filter(
      (event) =>
        fTimestamp(event?.start as Date) >= fTimestamp(filterStartDate) &&
        fTimestamp(event.end as Date) <= fTimestamp(filterEndDate)
    );
  }

  return inputData;
}
