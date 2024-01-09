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
  Grid,
  Link,
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
import { CeniBureauVote, CeniMoughataa, CeniWilaya } from 'src/_mock/ceni_data/ceniRecords';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'Id', align: 'left' },
  { id: 'Nom', label: 'Nom', align: 'left' },
  {},

  // { id: '' },
];

// ----------------------------------------------------------------------

export default function VaccineListPage() {
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

  const openModalBasedValue = (base: string) => {
    setOpenModal(true);
    if (base === 'import') {
      setImportExcel(true);
    }
  };

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

  const [WILLM, setWILLM] = useState<string>('wilaya');

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
        <title> Vaccins: Liste </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Gestion de l'election"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.general.statistique,
            },
            {
              name: 'Parametre',
              href: '',
            },
            {
              name: 'Listes',
            },
          ]}
          action={
            <Stack>
              <Button
                // component={RouterLink}
                // to={PATH_DASHBOARD.vaccinCamp.create_vaccine}
                variant="contained"
                startIcon={<Iconify icon="eva:upload-fill" />}
                onClick={() => {
                  openModalBasedValue('import');
                }}
              >
                Importer excel
              </Button>
            </Stack>
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

          {WILLM === 'wilaya' && (
            <>
              <Stack
                mb={5}
                margin={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextField
                  style={{ width: 200 }}
                  select
                  label="Filtre par wilaya"
                  // value={filterWillaya}
                  // onChange={onFilterWillaya}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: { maxHeight: 200 },
                      },
                    },
                  }}
                  sx={{
                    // maxWidth: { md: INPUT_WIDTH },
                    textTransform: 'capitalize',
                  }}
                >
                  {CeniWilaya.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option.Wilaya_fr}
                      // onClick={() => handleSelectWilaya(option.name)}

                      sx={{
                        mx: 1,
                        borderRadius: 0.75,
                        typography: 'body2',
                        textTransform: 'capitalize',
                      }}
                    >
                      {option.Wilaya_fr}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Grid container spacing={3}>
                {CeniWilaya.map((wilaya) => (
                  <Grid px={5} key={wilaya.id} item xs={12} sm={6} md={3} spacing={1} py={2}>
                    <Card>
                      <Link
                        onClick={() => {
                          setWILLM('moughata');
                          // navigate(PATH_DASHBOARD.gestionnaireEffectif.AgentsListe)
                        }}
                      >
                        <CardContent>
                          <Typography pt={5} variant="h6" align="center">
                            {wilaya.Wilaya_fr}
                          </Typography>
                          {/* <Divider />
                    <Typography>Bureaux : 80</Typography>
                    <Typography> Moughataa:13</Typography>
                    <Typography>Commune : 28</Typography> */}
                        </CardContent>
                      </Link>
                      <CardActions>
                        {/* <FormControlLabel
                          key={wilaya.id}
                          control={
                            <Switch
                              checked={preview}
                              onChange={(event) => setPreview(event.target.checked)}
                            />
                          }
                          label={preview ? 'Desactiver' : 'Activer'}
                        /> */}
                        <Button variant="outlined" onClick={() => setPreview(true)}>
                          preview ? Desactiver :Activer
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {WILLM === 'moughata' && (
            <>
              <Stack
                mb={5}
                margin={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextField
                  style={{ width: 200 }}
                  select
                  label="Filtre par moughataa"
                  // value={filterWillaya}
                  // onChange={onFilterWillaya}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: { maxHeight: 200 },
                      },
                    },
                  }}
                  sx={{
                    // maxWidth: { md: INPUT_WIDTH },
                    textTransform: 'capitalize',
                  }}
                >
                  {CeniMoughataa.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option.moughata_fr}
                      // onClick={() => handleSelectWilaya(option.name)}

                      sx={{
                        mx: 1,
                        borderRadius: 0.75,
                        typography: 'body2',
                        textTransform: 'capitalize',
                      }}
                    >
                      {option.moughata_fr}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Grid container spacing={3}>
                {CeniMoughataa.map((wilaya) => (
                  <Grid px={5} key={wilaya.id} item xs={12} sm={6} md={3} spacing={1} py={2}>
                    <Card>
                      <Link
                        onClick={() => {
                          setWILLM('bureau');
                          // navigate(PATH_DASHBOARD.gestionnaireEffectif.AgentsListe)
                        }}
                      >
                        <CardContent>
                          <Typography pt={5} variant="h6" align="center">
                            {wilaya.moughata_fr}
                          </Typography>
                          {/* <Divider />
                    <Typography>Bureaux : 80</Typography>
                    <Typography> Moughataa:13</Typography>
                    <Typography>Commune : 28</Typography> */}
                        </CardContent>
                      </Link>
                      <CardActions>
                        <FormControlLabel
                          key={wilaya.id}
                          control={
                            <Switch
                              checked={preview}
                              onChange={(event) => setPreview(event.target.checked)}
                            />
                          }
                          label={preview ? 'Desactiver' : 'Activer'}
                        />
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {WILLM === 'bureau' && (
            <>
              <Stack
                mb={5}
                margin={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextField
                  style={{ width: 200 }}
                  select
                  label="Filtre par bureau"
                  // value={filterWillaya}
                  // onChange={onFilterWillaya}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: { maxHeight: 200 },
                      },
                    },
                  }}
                  sx={{
                    // maxWidth: { md: INPUT_WIDTH },
                    textTransform: 'capitalize',
                  }}
                >
                  {CeniBureauVote.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option.bureau_fr}
                      // onClick={() => handleSelectWilaya(option.name)}

                      sx={{
                        mx: 1,
                        borderRadius: 0.75,
                        typography: 'body2',
                        textTransform: 'capitalize',
                      }}
                    >
                      {option.bureau_fr}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Grid container spacing={3}>
                {CeniBureauVote.map((wilaya) => (
                  <Grid px={5} key={wilaya.id} item xs={12} sm={6} md={3} spacing={1} py={2}>
                    <Card>
                      <Link
                        onClick={() => navigate(PATH_DASHBOARD.gestionnaireEffectif.AgentsListe)}
                      >
                        <CardContent>
                          <Typography pt={5} variant="h6" align="center">
                            {wilaya.bureau_fr}
                          </Typography>
                          {/* <Divider />
                    <Typography>Bureaux : 80</Typography>
                    <Typography> Moughataa:13</Typography>
                    <Typography>Commune : 28</Typography> */}
                        </CardContent>
                      </Link>
                      <CardActions>
                        <Stack justifyContent="space-between" direction="row">
                          <FormControlLabel
                            key={wilaya.id}
                            control={
                              <Switch
                                checked={preview}
                                onChange={(event) => setPreview(event.target.checked)}
                              />
                            }
                            label={preview ? 'Desactiver' : 'Activer'}
                          />
                          <IconButton
                            onClick={() => setOpenModal(true)}
                            sx={{
                              right: 2,

                              position: 'absolute',
                            }}
                          >
                            <Iconify icon="eva:more-vertical-fill" />
                          </IconButton>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Card>
      </Container>

      <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
        {importExcel ? (
          <Card>
            <CardHeader
              title="Importer fichiers"
              action={
                <FormControlLabel
                  control={
                    <Switch
                      checked={preview}
                      onChange={(event) => setPreview(event.target.checked)}
                    />
                  }
                  label="Show Thumbnail"
                />
              }
            />
            <CardContent>
              <Upload
                multiple
                thumbnail={preview}
                files={files}
                onDrop={handleDropMultiFile}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.log('ON UPLOAD')}
              />
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader title="Ajouter un bureau" />
            <CardContent>
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
              </Stack>
            </CardContent>
          </Card>
        )}
        <DialogActions>{!importExcel && <Button variant="outlined">Ajouter</Button>}</DialogActions>
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
