import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { paramCase } from 'change-case';
// @mui
import {
  Grid,
  Button,
  Container,
  Stack,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  MenuItem,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Tooltip,
} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// @types
import { CampagneVaccinationMadelAPI, Supervisor, Type } from 'src/@types/Campain';
// components
import Iconify from 'src/components/iconify';
import { SkeletonPostItem } from 'src/components/skeleton';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// service
import CampainService from 'src/services/CampainService';
// redux
import { useDispatch, useSelector } from 'src/redux/store';

import { Moughataa, states } from 'src/assets/data/WilayaAndMoughataa';
// assets

import Scrollbar from 'src/components/scrollbar';
import {
  TableSelectedAction,
  TableHeadCustom,
  TableEmptyRows,
  emptyRows,
  TableNoData,
  TablePaginationCustom,
  useTable,
} from 'src/components/table';
import { VaccineTableToolbar, VaccineTableRow } from 'src/sections/@dashboard/vaccine/list';

import { TABLE_HEAD_SUPERVISOR, supervisorList } from 'src/assets/data/gestionData';
import SupervisorTableRow from 'src/sections/@dashboard/paramettre/supervisorTableRow';
import DRASSearch from '../level_1/admin_centrale/List/filter/DRAS_Search';

// others
const TABLE_HEAD = [
  { id: 'id', label: 'Id', align: 'left' },
  { id: 'Nom', label: 'Nom', align: 'left' },
  { id: 'Telephone', label: 'Telephone', align: 'left' },
  {},

  // { id: '' },
];
// ----------------------------------------------------------------------

export default function PointFocal() {
  const { themeStretch } = useSettingsContext();
  const navigate = useNavigate();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(5);

  const handleSizePlus = () => {
    setSize(size + 5);
  };
  const dispatch = useDispatch();

  const getAllCampains = useCallback(async (pageNumber: number, sizeToGet: number) => {
    setIsLoading(true);
    CampainService.getAll(pageNumber, sizeToGet)
      .then((response: any) => {
        setIsLoading(false);
        const data = response.data;
        const { content } = data;
        setCampagnesData(content);
        console.log('Data From API :OK', content);
      })
      .catch((e: Error) => {
        setIsLoading(false);
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getAllCampains(0, size);
  }, [getAllCampains, size]);

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
    const content = supervisorList;
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
    const content = supervisorList;
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
    const content = supervisorList;
    setTableData(content);
  };

  const getVaccine = (search: string) => {
    // setLoading(true);
    // CampainService.getAllVaccineOfType(0, 10, undefined, search)
    //   .then((response: any) => {
    //     setLoading(false);
    //     const data = response.data;
    //     const { conten
    //     setTableData(content);
    //     console.log('Data Vaccine From API :OK', JSON.stringify(content, null, 2));
    //   })
    //   .catch((e: Error) => {
    //     setLoading(false);
    //     console.log(e);
    //   });
    const content = supervisorList;
    setTableData(content);
  };

  useEffect(() => {
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

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Administration centrale | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Gestion de l'effectif"
          links={[
            {
              name: 'Tableau de bord',
              href: '',
            },
            {
              name: 'Parametre',
              href: '',
            },
            {
              name: 'Gestion des points focaux',
            },
          ]}
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <Button
            // component={RouterLink}
            // to={PATH_DASHBOARD.gestionnaireEffectif.centreCreateDRAS}
            variant="contained"
            size="large"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => navigate(PATH_DASHBOARD.gestionnaireEffectif.AgentsCreatePage)}
          >
            Ajouter point focal
          </Button>
        </Stack>
        {/* Model add wilaya */}
        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter point focal</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField
                fullWidth
                select
                label="Wilaya"
                // value={filterWillaya}
                // onChange={onFilterWillaya}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: { maxHeight: 220 },
                    },
                  },
                }}
                sx={{
                  // maxWidth: { md: INPUT_WIDTH },
                  textTransform: 'capitalize',
                }}
              >
                {states.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    // onClick={() => handleSelectWilaya(option.name)}

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

              {/* {filterWillaya && ( */}
              <TextField
                fullWidth
                select
                label="Moughataa"
                // value={filterMougataa}
                // onChange={onFilterMoughataa}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: { maxHeight: 220 },
                    },
                  },
                }}
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {Moughataa.filter((moughataa) => moughataa.state_id).map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
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
            </Stack>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom du responsable" fullWidth />
              <TextField variant="outlined" label="Numéro de téléphone" fullWidth />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>

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
                headLabel={TABLE_HEAD_SUPERVISOR}
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
                      <SupervisorTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id.toString())}
                        onSelectRow={() => onSelectRow(row.id.toString())}
                        onViewRow={() => handleViewRow(row.id.toString())}
                        onEditRow={() => handleEditRow(row.id.toString())}
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
                      <SupervisorTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id.toString())}
                        onSelectRow={() => onSelectRow(row.id.toString())}
                        onViewRow={() => handleViewRow(row.id.toString())}
                        onEditRow={() => handleEditRow(row.id.toString())}
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
      </Container>
    </>
  );
}

function applyFilter({
  inputData,
  filterName,
  filterService,
}: {
  inputData: Supervisor[];
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
