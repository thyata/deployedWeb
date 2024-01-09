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
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TableCell,
  CircularProgress,
  Dialog,
  DialogTitle,
  Modal,
  TextField,
  MenuItem,
  DialogActions,
  Typography,
  Divider,
  CardHeader,
  CardContent,
  FormControlLabel,
  Switch,
  CardActions,
} from '@mui/material';

import { useCallback, useEffect, useState } from 'react';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// _mock_
import { _invoices } from 'src/_mock/arrays';
// @types
import { IInvoice } from 'src/@types/vaccine';
// components
import Label from 'src/components/label';
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
import { VaccineTableRow, VaccineTableToolbar } from 'src/sections/@dashboard/vaccine/list';
// types
import { Type } from 'src/@types/Campain';
// services
import CampainService from 'src/services/CampainService';
import { Moughataa, states } from 'src/assets/data/WilayaAndMoughataa';
import { DialogContent } from '@material-ui/core';
import { RHFSelect } from 'src/components/hook-form/RHFSelect';
import { Upload, UploadBox } from 'src/components/upload';
import DemoUploadPage from 'src/pages/components/extra/DemoUploadPage';
import { Bureau, listBureaux } from 'src/assets/data/listMembers';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'Id', align: 'left' },
  { id: 'Nom', label: 'Nom', align: 'left' },
  {},

  // { id: '' },
];

// ----------------------------------------------------------------------

export default function ActeurPolitique() {
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

  const [filterService, setFilterService] = useState('');

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);

  const [type_options, setTypes] = useState<Type[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [importExcel, setImportExcel] = useState(false);

  const getAllTypeVaccin = () => {
    // CampainService.getAllVaccineType(0, 5)
    //   .then((response: any) => {
    //     const data = response.data;
    //     const { content } = data;
    //     setTypes(content);
    //     console.log('Data Type From API :OK', content);
    //   })
    //   .catch((e: Error) => {
    //     console.log(e);
    //   });
    const content = listBureaux;
    setTableData(content);
  };

  const getAllVaccin = () => {
    // setLoading(true);
    // CampainService.getAllVaccineOfType(0, 10)
    //   .then((response: any) => {
    //     setLoading(false);
    //     const data = response.data;
    //     const { content } = data;
    //     setTableData(content);
    //     console.log('Data Vaccine From API :OK', JSON.stringify(content, null, 2));
    //   })
    //   .catch((e: Error) => {
    //     setLoading(false);
    //     console.log(e);
    //   });
    const content = listBureaux;
    setTableData(content);
  };

  const getAllVaccinOfType = (id: number) => {
    // setLoading(true);
    // CampainService.getAllVaccineOfType(0, 10, id)
    //   .then((response: any) => {
    //     setLoading(false);
    //     const data = response.data;
    //     const { content } = data;
    //     setTableData(content);
    //     console.log('Data Vaccine From API :OK', JSON.stringify(content, null, 2));
    //   })
    //   .catch((e: Error) => {
    //     setLoading(false);
    //     console.log(e);
    //   });
    const content = listBureaux;
    setTableData(content);
  };

  const getVaccine = (search: string) => {
    // setLoading(true);
    // CampainService.getAllVaccineOfType(0, 10, undefined, search)
    //   .then((response: any) => {
    //     setLoading(false);
    //     const data = response.data;
    //     const { content } = data;
    //     setTableData(content);
    //     console.log('Data Vaccine From API :OK', JSON.stringify(content, null, 2));
    //   })
    //   .catch((e: Error) => {
    //     setLoading(false);
    //     console.log(e);
    //   });
    const content = listBureaux;
    setTableData(content);
  };

  useEffect(() => {
    getAllTypeVaccin();
    getAllVaccin();
  }, []);

  useEffect(() => {
    if (filterService) {
      getAllVaccinOfType(+filterService);
    }
  }, [filterService]);

  useEffect(() => {
    if (filterName) {
      getVaccine(filterName);
    }
  }, [filterName]);

  const dataFiltered = applyFilter({
    inputData: tableData,
    filterName,
    filterService,
  });

  const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const denseHeight = dense ? 56 : 76;

  // const [file, setFile] = useState<any>('');

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
    {
      value: 'disponible',
      label: 'Disponible',
      color: 'success',
      count: getLengthByStatus('paid'),
    },
    {
      value: 'indisponible',
      label: 'Indisponible',
      color: 'warning',
      count: getLengthByStatus('unpaid'),
    },
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
    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  const handleDeleteRows = (selectedRows: string[]) => {
    const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
    setSelected([]);

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
    navigate(`/dashboard/vaccine/${row.id}`, {
      state: row,
    });
  };

  const handleViewRow = (row: any) => {
    navigate(`/dashboard/vaccine/${row.id}`, {
      state: {
        name: row.name,
      },
    });
  };

  const handleResetFilter = () => {
    setFilterName('');

    setFilterService('all');
    getAllVaccin();
  };

  const [preview, setPreview] = useState(false);

  const [files, setFiles] = useState<(File | string)[]>([]);
  const handleDropMultiFile = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((newFile) =>
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        ),
      ]);
    },
    [files]
  );
  const handleRemoveFile = (inputFile: File | string) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles([...files, ...newFiles]);
    },
    [files]
  );

  return (
    <>
      <Helmet>
        <title>Acteurs politiques</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="La liste des acteurs politiques"
          links={[
            {
              name: 'Dashboard',
            },
            {
              name: 'Parametre',
              href: '',
            },
            {
              name: 'Listes ',
            },
          ]}
          action={
            <Button
              // component={RouterLink}
              // to={PATH_DASHBOARD.vaccinCamp.create_vaccine}
              variant="contained"
              startIcon={<Iconify icon="eva:plus" />}
              onClick={() => setOpenModal(true)}
            >
              Ajouter un agent
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

          <VaccineTableToolbar
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
                      tableData.map((row) => row.id)
                    )
                  }
                />
                {loading ? (
                  <TableBody>
                    {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <VaccineTableRow
                          key={row.id}
                          row={row}
                          selected={selected.includes(row.id.toString())}
                          onSelectRow={() => onSelectRow(row.id.toString())}
                          onViewRow={() => handleViewRow(row)}
                          onEditRow={() => handleEditRow(row)}
                          onDeleteRow={() => handleDeleteRow(row.id.toString())}
                        />
                      ))}

                    <TableCell colSpan={3} align="center">
                      <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <CircularProgress />
                      </div>
                    </TableCell>
                  </TableBody>
                ) : (
                  <TableBody>
                    {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <VaccineTableRow
                          key={row.id}
                          row={row}
                          selected={selected.includes(row.id.toString())}
                          onSelectRow={() => onSelectRow(row.id.toString())}
                          onViewRow={() => handleViewRow(row)}
                          onEditRow={() => handleEditRow(row)}
                          onDeleteRow={() => handleDeleteRow(row.id.toString())}
                        />
                      ))}

                    <TableEmptyRows
                      height={denseHeight}
                      emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                    />

                    <TableNoData isNotFound={isNotFound} />
                  </TableBody>
                )}
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
        </Card>
      </Container>

      <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
        <Card>
          <CardHeader title="Ajouter un bureau" />
          <CardContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom du responsable" fullWidth />
              <TextField variant="outlined" label="Numero de telephone" fullWidth />
            </Stack>
          </CardContent>
        </Card>

        <DialogActions>
          {' '}
          <Button variant="outlined">Ajouter</Button>
        </DialogActions>
      </Dialog>

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
  inputData: Bureau[];
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
