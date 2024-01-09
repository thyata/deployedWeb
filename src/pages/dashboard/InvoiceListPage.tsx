import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Tab,
  Tabs,
  Card,
  Table,
  Stack,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TableCell,
  CircularProgress,
} from '@mui/material';

import axiosInstance from 'src/auth/axios';

import { useEffect,useState } from "react";
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// utils
import { fTimestamp } from '../../utils/formatTime';
// _mock_
import { _invoices } from '../../_mock/arrays';
// @types
import { IInvoice, VaccineType } from '../../@types/vaccine';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import ConfirmDialog from '../../components/confirm-dialog';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../../components/table';
// sections
// import { InvoiceTableRow, InvoiceTableToolbar } from '../../sections/@dashboard/vaccine/list';

// ----------------------------------------------------------------------



const TABLE_HEAD = [
  { id: 'name', label: 'Nom', align: 'left' },
  { id: 'type', label: 'Type', align: 'left' },
  { id: 'administrationMode', label: 'Mode d\'administration', align: 'left' },

  // { id: '' },
];

// ----------------------------------------------------------------------

export default function InvoiceListPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

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
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState<any[]>([]);

  const [filterName, setFilterName] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('all');

  const [filterService, setFilterService] = useState('all');

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
  const [loading,setLoading] = useState(true);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);
  const [list_vaccines,setList_vaccines] = useState([]);


  const [type_options,setTypes] = useState([]);
  const [vaccine_type,setVaccine_type] = useState([]);



// const fetchVaccines=async (page1:number,size:number,search?:string,typeId?:number)=>{
//   console.log("fetch vaccines")
//   setLoading(true);
// try{
//   let url=`/hospital/vaccines/?page=${page1}&size=${size}`;

//   // url_vaccine_type =`/hospital/vaccines/?page=0&size=10&type`
//   const url_types=`/hospital/vaccines/types/?page=${page1}&size=${size}`;
//   const list_types:any= await axiosInstance.get(url_types);

//    if(search)url+=`&search=${search}`
//    if(typeId)url+=`&typeId=${typeId}`
//     const list:any= await axiosInstance.get(url);

//    setLoading(false)
//    setVaccine_type(list_types?.content) // utiliser pour filtreOpetions
//    setList_vaccines(list?.content) // utiliser pour filtreName
//     // console.log(list?.content.type);
//     setTableData(list?.content)
//     setTypes(list_types?.content.map((type:VaccineType)=>(type.name))) // utiliser pour selectionner le type

// } catch(err){
//   setLoading(false)
//   console.log(err);
// }
//  }

// useEffect(() => {
//    fetchVaccines(0,20);

// }, []);

//  useEffect(()=>{
//   if (filterName) {
    
//     setLoading(true)
//     const search_res= list_vaccines.filter(
//         (item) =>
//         Object.values(item).join('').toLowerCase().includes(filterName.toLocaleLowerCase())
//       );
//       setTableData(search_res)
//       console.log('search for',search_res)
//       setLoading(false)
//   };
//   if (filterService !== 'all') {
//     const search_res= vaccine_type.filter(
//       (item) =>
//       Object.values(item).join('').toLowerCase().includes(filterService.toLocaleLowerCase())
//     );
//     const typeID=search_res[0]
//     // console.log('search for',search_res[0]) 
//    // console.log('typeID for',typeID['id']) 

//      setLoading(false)
//      fetchVaccines(0,20,undefined,search_res[0]["id"]);
//   }
//   },[
//     filterName,
//     filterService
//   ]) 
  const dataFiltered = applyFilter({
    inputData: tableData,
    filterName,
    filterService,
  
  });

  const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const denseHeight = dense ? 56 : 76;

  const isFiltered =
    filterStatus !== 'all' ||
    filterName !== '' ||
    filterService !== 'all' ||
    (!!filterStartDate && !!filterEndDate);

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterService) ||
    (!dataFiltered.length && !!filterEndDate) ||
    (!dataFiltered.length && !!filterStartDate);

  const getLengthByStatus = (status: string) =>
    tableData.filter((item) => item.status === status).length;


  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: tableData.length },
    { value: 'disponible', label: 'Disponible', color: 'success', count: getLengthByStatus('paid') },
    { value: 'indisponible', label: 'Indisponible', color: 'warning', count: getLengthByStatus('unpaid') },

  ] as const;

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterStatus = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setPage(0);
    setFilterStatus(newValue);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {

    setPage(0);
    setFilterName(event.target.value);
    

    
  };

  const handleFilterService = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterService(event.target.value);
      
  
     
  };

  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    // setTableData(deleteRow);
    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  const handleDeleteRows = (selectedRows: string[]) => {
    const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
    setSelected([]);
    // setTableData(deleteRows);

    if (page > 0) {
      if (selectedRows.length === dataInPage.length) {
        setPage(page - 1);
      } else if (selectedRows.length === dataFiltered.length) {
        setPage(0);
      } else if (selectedRows.length > dataInPage.length) {
        const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
        setPage(newPage);
      }
    }
  };

  const handleEditRow = (row: any) => {
    navigate(`/dashboard/vaccine/${row.id}`,{
      state:row
    });
  };

  const handleViewRow = (row:any) => {
    
    navigate(`/dashboard/vaccine/${row.id}`,{
      state: {
        name: row.name,
       // email:row.email,
       // body: row.body,
      },
    });
  };

  const handleResetFilter = () => {
    setFilterName('');
   
    setFilterService('all');
   
   // fetchVaccines(0,20); 
   
  };

  return (
    <>
      <Helmet>
        <title> Vaccins: Liste </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="La liste des vaccins"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Vaccins',
              href: PATH_DASHBOARD.vaccine.root,
            },
            {
              name: 'Liste',
            },
          ]}
        action={
         
                 <Button
                 component={RouterLink}
                 to={PATH_DASHBOARD.vaccinCamp.create_vaccine}
                 variant="contained"
                 startIcon={<Iconify icon="eva:plus-fill" />}
               >
                Ajouter un vaccin

               </Button>
        }
        />
        {/* <Card>
          <Tabs
            value={filterStatus}
            onChange={handleFilterStatus}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {TABS.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                icon={
                  <Label color={tab.color} sx={{ mr: 1 }}>
                    {tab.count}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <Divider />

          <InvoiceTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterService={filterService}
            filterEndDate={filterEndDate}
            onFilterName={handleFilterName}
            optionsService={type_options}
            onResetFilter={handleResetFilter}
            filterStartDate={filterStartDate}
            onFilterService={handleFilterService}
            onFilterStartDate={(newValue) => {
              setFilterStartDate(newValue);
            }}
            onFilterEndDate={(newValue) => {
              setFilterEndDate(newValue);
            }}
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
                <Stack direction="row">
                  <Tooltip title="Sent">
                    <IconButton color="primary">
                      <Iconify icon="ic:round-send" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Download">
                    <IconButton color="primary">
                      <Iconify icon="eva:download-outline" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Print">
                    <IconButton color="primary">
                      <Iconify icon="eva:printer-fill" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton color="primary" onClick={handleOpenConfirm}>
                      <Iconify icon="eva:trash-2-outline" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            />

            <Scrollbar>
              <Table  size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}   >
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
                      tableData.map((row) => row.id)
                    )
                  }
                />
        {
          loading ? (<TableBody>
                  
                   
            {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
               <InvoiceTableRow
                 key={row.id}
                 row={row}
                 selected={selected.includes(row.id)}
                 onSelectRow={() => onSelectRow(row.id)}
                 onViewRow={() => handleViewRow(row)}
                 onEditRow={() => handleEditRow(row)}
                 onDeleteRow={() => handleDeleteRow(row.id)}
               />
             ))}

           
<TableCell colSpan={3} align='center'>
  <div style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
  <CircularProgress  />

  </div>
</TableCell>
           
         </TableBody>):(<TableBody>
                  
                   
            {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
               <InvoiceTableRow
                 key={row.id}
                 row={row}
                 selected={selected.includes(row.id)}
                 onSelectRow={() => onSelectRow(row.id)}
                 onViewRow={() => handleViewRow(row)}
                 onEditRow={() => handleEditRow(row)}
                 onDeleteRow={() => handleDeleteRow(row.id)}
               />
             ))}

           <TableEmptyRows
             height={denseHeight}
             emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
           />

           <TableNoData isNotFound={isNotFound} /> 
           
         </TableBody>)
        }
                
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //
            dense={dense}
            onChangeDense={onChangeDense}
          />
        </Card> */}
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
  filterName,
  filterService,

}: {
  inputData: IInvoice[];
  filterName: string;
  filterService: string;

}) {
 /* 
  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

 

  inputData = stabilizedThis.map((el) => el[0]);

  

  
 
  if (filterService !== 'all') {
      inputData = inputData.filter((invoice) =>
      invoice.items.some((c) => c.service === filterService)
    );
  } 
 */


  return inputData;
}
