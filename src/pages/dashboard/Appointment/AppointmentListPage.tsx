import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
  Tab,
  Tabs,
  Card,
  Table,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
} from '@mui/material';
// common
import { EventInput } from '@fullcalendar/common';
import { Appointment, Category, EventPage, Service } from 'src/@types/calendar';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import { IUserAccountGeneral } from 'src/@types/user';
// _mock_
import { _userList } from 'src/_mock/arrays';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import ConfirmDialog from 'src/components/confirm-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
// sections
import { UserTableToolbar, UserTableRow } from 'src/sections/@dashboard/appointment/list';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import {
  getEventsPage,
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
  searchAppointments,
  getProviders
} from 'src/redux/slices/calendar';

type Provider = {
  id: number,
  username: string,
  password: string,
  name: string,
  nameAr: string,
  status: string,
  userRole: string
}

// ----------------------------------------------------------------------
const STATUS_OPTIONS = [
  'All', 
  'Scheduled',
  'Attended',
  'Cancelled',
  'Missed'
];

// const ROLE_OPTIONS = [
//   'Service 1',
//   'Service 2',
//   'Service 3',
//   'Service 4',
//   'Service 5'
// ];


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

const TABLE_HEAD = [
  { id: 'patient', label: 'Patient', align: 'left' },
  { id: 'phoneNumber', label: 'Phone Number', align: 'left' },
  { id: 'price', label: 'Price', align: 'left' },
  { id: 'date', label: 'Date', align: 'center' },
  { id: 'service', label: 'Service', align: 'center' },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function AppointmentListPage() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [tableData, setTableData] = useState(_userList);

  const [filterName, setFilterName] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterData, setFilterData] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  
  const [openConfirm, setOpenConfirm] = useState(false);
  const [Data_OPTIONS, setDataOptions] = useState<Array<Provider>>([]);
  
  const [ROLE_OPTIONS, setRoleOptions] = useState<Array<Service>>([]);

  const [Type_OPTIONS, setTypeOptions] = useState<Array<Category>>([]);

  const [service, setService] = useState<Service>({
    id: 0,
    name: '',
    subServices: [],
    team: [],
    status: ''
  })

  const [category, setCategory] = useState<Category>({
    id: 0,
    name: '',
    subCategories: []
  })

  const [provider, setProvider] = useState<Provider>({
    id: 0,
    username: '',
    password: '',
    name: '',
    nameAr: '',
    status: '',
    userRole: ''
  })

  const { eventsPage, openModal, selectedRange, selectedEventId } = useSelector(
    (state) => state.calendar
  );

  const dataFiltered = applyFilter({
    inputData: eventsPage,
    comparator: getComparator(order, orderBy),
    filterName,
    filterRole,
    filterStatus,
  });

  // const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const dataInPage = dataFiltered.content;

  const denseHeight = dense ? 52 : 72;

  const isFiltered = filterName !== '' || filterRole !== 'All' || filterStatus !== 'All';

  const isNotFound =
  (!dataFiltered.content.length)
    // (!dataFiltered.content.length && !!filterName) ||
    // (!dataFiltered.content.length && !!filterRole) ||
    // (!dataFiltered.content.length && !!filterStatus);

    const getAllServices = useCallback( async () => {
      try{
        const data = await dispatch(getServices());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setRoleOptions([...data])
      } catch(err){
        console.log(err)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllCategories = useCallback( async () => {
      try{
        const data = await dispatch(getCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setTypeOptions([...data])
      } catch(err){
        console.log(err)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllProviders = useCallback( async () =>{
      try{
        const data = await handlegetProviders();
        setDataOptions([...data])
      } catch(err){
        console.log(err)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      dispatch(getEventsPage({status: 'All'}));
      console.log(eventsPage)
      // dispatch(getAllServices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      getAllServices()
      getAllCategories()
      getAllProviders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  
  const handleSearchAppointment = (search: string) => dispatch(searchAppointments(search, 5));
  const handleSearchPatient = (search: string) => dispatch(searchPatients(search));
  const handlegetCategoriesByServiceId = (serviceId: number) => dispatch(getCategories(serviceId));
  const handlegetProviders = () => dispatch(getProviders())

  const handleFilterStatus = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    dispatch(getEventsPage({status:newValue}));
    setFilterStatus(newValue);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reload = true
    if(event.target.value !== ''){
      reload = true
      handleSearchPatient(event.target.value)
      setFilterName(event.target.value);
      setFilterType('')
      setFilterRole('')
      setFilterData('')
      handleSearchAppointment(event.target.value)
    } else if(reload === true && event.target.value === '') {
      setFilterName(event.target.value);
      dispatch(getEventsPage({status: 'All'}))
      reload = false
    }
  };

  const handleFilterType = async (event: React.MouseEvent<Element>, c:Category) => {
    setFilterType(c.name);
    setCategory(c)
    const d = new Date();
    // const from = new Date(d.getFullYear(), d.getMonth()+1, 1).toISOString();
    // const to = new Date(d.getFullYear(), d.getMonth()+2, 0).toISOString();
    dispatch(getEventsPage({serviceId: service.id, categoryId: c.id, providerId: provider.id}));
  };

  const handleFilterRole = async (event: React.MouseEvent<Element>, s:Service) => {
    // setPage(0);
    handleSearchPatient(s.name)
    setFilterRole(s.name);
    setService(s)
    const data = await handlegetCategoriesByServiceId(s.id);
    setTypeOptions([...data])
    const d = new Date();
    // const from = new Date(d.getFullYear(), d.getMonth()+1, 1).toISOString();
    // const to = new Date(d.getFullYear(), d.getMonth()+2, 0).toISOString();
    dispatch(getEventsPage({serviceId:s.id, categoryId: category.id, providerId: provider.id}));
    console.log(Type_OPTIONS);
  };

  const handleFilterData = (event: React.MouseEvent<Element>, p: Provider) => {
    // setPage(0);
    setFilterData(p.name);
    setProvider(p)
    const d = new Date();
    // const from = new Date(d.getFullYear(), d.getMonth()+1, 1).toISOString();
    // const to = new Date(d.getFullYear(), d.getMonth()+2, 0).toISOString();
    dispatch(getEventsPage({serviceId: service.id, categoryId: category.id, providerId: p.id}));
  };

  const handleDeleteRow = async (id: string) => {
    try {
      dispatch(deleteEvent(id));
      dispatch(getEventsPage({status: 'All'}))
    } catch (error) {
      console.error(error);
    }
    // const deleteRow = tableData.filter((row) => row.id !== id);
    // setSelected([]);
    // setTableData(deleteRow);

    // if (page > 0) {
    //   if (dataInPage.length < 2) {
    //     setPage(page - 1);
    //   }
    // }
  };

  const handleDeleteRows = (selectedRows: string[]) => {
    const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);

    if (page > 0) {
      if (selectedRows.length === dataInPage.length) {
        setPage(page - 1);
      } else if (selectedRows.length === dataFiltered.content.length) {
        setPage(0);
      } else if (selectedRows.length > dataInPage.length) {
        const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
        setPage(newPage);
      }
    }
  };

  const handleEditRow = (id: string) => {
    navigate(PATH_DASHBOARD.user.edit(paramCase(id)));
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
      status: ''
    })

    setCategory({
      id: 0,
      name: '',
      subCategories: []
    })

    setProvider(({
      id: 0,
      username: '',
      password: '',
      name: '',
      nameAr: '',
      status: '',
      userRole: ''
    }))

    getAllServices()
    getAllCategories()
    getAllProviders()

    if(filterStatus !== 'All' || filterRole !== '' || filterName !== '' || filterType !== '' || filterData !== '')
    dispatch(getEventsPage({status: 'All'}))
  };

  return (
    <>
      <Helmet>
        <title> Appointment List | Yata Medical</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Appointment List"
          links={[
            { name: 'Appointment', href: PATH_DASHBOARD.root },
            { name: 'Appointment List' },
          ]}
          action={
            <Button
              component={RouterLink}
              to={PATH_DASHBOARD.user.new}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
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
            optionsRole={ROLE_OPTIONS}
            optionsType={Type_OPTIONS}
            optionsData={Data_OPTIONS}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            onFilterType={handleFilterType}
            onFilterData={handleFilterData}
            onResetFilter={handleResetFilter}
          />

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={handleOpenConfirm}>
                    <Iconify icon="eva:trash-2-outline" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      dataFiltered.content.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered.content
                    .map((row: Appointment) => (
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.patient.fullName)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.totalElements}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //
            dense={dense}
            onChangeDense={onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows(selected);
              handleCloseConfirm();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
  filterName,
  filterStatus,
  filterRole,
}: {
  // inputData: IUserAccountGeneral[];
  inputData: EventPage;
  comparator: (a: any, b: any) => number;
  filterName: string;
  filterStatus: string;
  filterRole: string;
}) {
  // const stabilizedThis = inputData.map((el: any, index: any) => [el, index] as const);

  // stabilizedThis.sort((a: number[], b: number[]) => {
  //   const order = comparator(a[0], b[0]);
  //   if (order !== 0) return order;
  //   return a[1] - b[1];
  // });

  // inputData = stabilizedThis.map((el: any[]) => el[0]);

  // if (filterName) {
  //   inputData = inputData.filter(
  //     (user: { name: string; }) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
  //   );
  // }

  // if (filterStatus !== 'all') {
  //   inputData = inputData.filter((user: { status: string; }) => user.status === filterStatus);
  // }

  // if (filterRole !== 'all') {
  //   inputData = inputData.filter((user: { role: string; }) => user.role === filterRole);
  // }

  return inputData;
}
