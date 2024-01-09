import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useCallback } from 'react';
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
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// @types
import { ActeFromAPI, Vaccine } from 'src/@types/Campain';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import ConfirmDialog from 'src/components/confirm-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import {
  useTable,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
// sections
import InvoiceAnalytic from 'src/sections/@dashboard/invoice/InvoiceAnalytic';
import {
  ActesTableRow,
  ActesTableToolbar,
} from 'src/sections/@dashboard/vaccinCampagne/Details/list';
// service
import CampainService from 'src/services/CampainService';
import { Member } from 'src/assets/data/listMembers';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'NNI', label: 'NNI', align: 'left' },
  { id: 'Nom', label: 'Nom', align: 'left' },

  { id: 'Point focal', label: 'Point focal', align: 'left' },
  { id: 'Bureau', label: 'Bureau', align: 'left' },

  { id: 'Date', label: 'Date', align: 'left' },
  {},
];

// ----------------------------------------------------------------------

export default function CampainDetailsPage() {
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
    onSelectRow,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState<Member[]>([]);

  const [listOfVaccine, setListOfVaccine] = useState<Vaccine[]>([]);

  const [filterName, setFilterName] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterVaccine, setFilterVaccine] = useState('');

  const [filterWillaya, setFilterWillaya] = useState('');

  const [myRowsPerPage, setMyRowsPerPage] = useState(5);

  const [myPage, setMyPage] = useState(1);

  const [filterMougataa, setFilterMoughataa] = useState('');

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);

  const [filterPointFocal, setFilterPointFocal] = useState('');

  const [filterBureau, setFilterBureau] = useState('');

  const [isClick, setIsClick] = useState(false);

  const getAllActes = useCallback(async (pageNumber: number, sizeToGet: number) => {
    // CampainService.getAllActes(pageNumber, sizeToGet)
    //   .then((response: any) => {
    //     const data = response.data;
    //     const { content } = data;
    //     setTableData(content);
    //     console.log('Data Actes From API :OK', content);
    //   })
    //   .catch((e: Error) => {
    //     console.log(e);
    //   });
    const content = CampainService.getListMembers();
    setTableData(content);
    //     console.log('Data Actes From API :OK', content);
  }, []);

  const getActeByNNI = useCallback(
    async (pageNumber: number, sizeToGet: number, search: string) => {
      CampainService.getAllActes(pageNumber, sizeToGet, search)
        .then((response: any) => {
          const data = response.data;
          const { content } = data;
          setTableData(content);
          console.log('Get Actes by NNI From API :OK', content);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    []
  );
  const getActeByVaccine = useCallback(
    async (pageNumber: number, sizeToGet: number, vaccineId: string) => {
      CampainService.filterActesByVaccine(pageNumber, sizeToGet, vaccineId)
        .then((response: any) => {
          const data = response.data;
          const { content } = data;
          setTableData(content);
          console.log('Get Actes ByVaccine From API :OK', content);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    []
  );

  const filterByDate = useCallback(
    async (pageNumber: number, sizeToGet: number, to?: any, from?: any) => {
      CampainService.filterActesByDate(pageNumber, sizeToGet, to, from)
        .then((response: any) => {
          const data = response.data;
          const { content } = data;
          setTableData(content);
          console.log('Data filterByDate From API :OK', JSON.stringify(content, null, 2));
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    []
  );

  useEffect(() => {
    if (filterName) {
      getActeByNNI(0, 10, filterName);
      return;
    }
    if (filterStartDate && filterEndDate) {
      console.log('from : ', filterStartDate.toISOString().split('T')[0]);
      console.log('to : ', filterEndDate.toISOString().split('T')[0]);
      filterByDate(
        0,
        10,
        filterEndDate.toISOString().split('T')[0],
        filterStartDate.toISOString().split('T')[0]
      );
      return;
    }
    getAllActes(0, 10);
  }, [getAllActes, filterByDate, filterName, filterStartDate, filterEndDate, getActeByNNI]);

  useEffect(() => {
    if (tableData) {
      const vaccines = tableData.map((acte) => acte);
      // setListOfVaccine(vaccines);
      // console.log('Filter Vaccines of actes From dataTable :OK',JSON.stringify(vaccines,null,2));
    }
  }, [tableData, setListOfVaccine]);

  useEffect(() => {
    if (isClick) {
      getActeByVaccine(0, 10, filterVaccine);
    }
  }, [isClick, getActeByVaccine, filterVaccine]);

  const denseHeight = dense ? 56 : 76;

  const isFiltered =
    filterWillaya !== '' ||
    filterMougataa !== '' ||
    filterName !== '' ||
    (!!filterStartDate && !!filterEndDate);

  const isNotFound = false;

  const onChangeMyRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyRowsPerPage(+event.target.value);
  };
  const onChangeMyPage = (event: unknown, newPage: number) => {
    setMyPage(newPage);
  };

  const getLengthByStatus = (status: string) => 1;

  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: 1 },
    {
      value: 'Astrazeneca',
      label: 'Astrazeneca',
      color: 'success',
      count: getLengthByStatus('paid'),
    },
    { value: 'Johnson', label: 'Johnson', color: 'warning', count: getLengthByStatus('unpaid') },
  ] as const;

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterVaccine = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setPage(0);
    setFilterVaccine(newValue);
  };
  const handleOnClick = () => {
    setIsClick(true);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterWillaya = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterWillaya(event.target.value);
  };
  const handleFilterMoughataa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterMoughataa(event.target.value);
  };

  // by thne

  const handleFilterPointFocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterPointFocal(event.target.value);
  };

  const handleFilterBureau = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterBureau(event.target.value);
  };

  // end by thne
  const handleDeleteRow = (id: string) => {};

  const handleEditRow = (id: string) => {
    navigate(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id: string) => {
    navigate(PATH_DASHBOARD.invoice.view(id));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterMoughataa('');
    setFilterWillaya('');
    setFilterBureau('');
    setFilterPointFocal('');
    setFilterEndDate(null);
    setFilterStartDate(null);
  };

  return (
    <>
      <Helmet>
        <title> Campagnes: List | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Adherants"
          links={[
            {
              name: 'Tableaux de bord',
              href: '',
            },
            {
              name: 'Liste des adherants',
              href: PATH_DASHBOARD.vaccinCamp.list,
            },
            {
              name: 'Liste',
            },
          ]}
        />

        <Card sx={{ mb: 5 }}>
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <InvoiceAnalytic
                title="Total votants"
                total={100}
                percent={70}
                price={0}
                icon="ic:people"
                color={theme.palette.info.main}
              />

              <InvoiceAnalytic
                title="Total restants"
                total={900}
                percent={50}
                price={0}
                icon="eva:checkmark-circle-2-fill"
                color={theme.palette.success.main}
              />

              <InvoiceAnalytic
                title="En attentes"
                total={500}
                percent={30}
                price={0}
                icon="eva:clock-fill"
                color={theme.palette.warning.main}
              />
            </Stack>
          </Scrollbar>
        </Card>

        <Card>
          {/* <Tabs
            value={filterVaccine}
            onChange={handleFilterVaccine}
            onClick={handleOnClick}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {listOfVaccine.map((vaccin) => (
              <Tab
                key={vaccin.id}
                value={vaccin.id}
                label={vaccin.name}
                icon={
                  <Label color="success" sx={{ mr: 1 }}>
                    {1}
                  </Label>
                }
              />
            ))}
          </Tabs> */}

          <Divider />

          <ActesTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterWillaya={filterWillaya}
            filterMougataa={filterMougataa}
            onFilterName={handleFilterName}
            onResetFilter={handleResetFilter}
            onFilterWillaya={handleFilterWillaya}
            onFilterMoughataa={handleFilterMoughataa}
            onFilterStartDate={(newValue) => {
              setFilterStartDate(newValue);
            }}
            onFilterEndDate={(newValue) => {
              setFilterEndDate(newValue);
            }}
            filterStartDate={undefined}
            filterEndDate={undefined}

            // by thne
            // filterPointFocal={filterPointFocal}
            // filterBureau={filterBureau}
            // onFilterPointFocal={handleFilterPointFocal}
            // onFilterBureau={handleFilterBureau}
          />

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={1}
              onSelectAllRows={() => null}
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
                  rowCount={1}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={() => null}
                />

                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ActesTableRow
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
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={1}
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
            Êtes-vous sûr que vous souhaitez supprimer <strong> {selected.length} </strong> actes?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              // handleDeleteRows(selected);
              handleCloseConfirm();
            }}
          >
            Supprimer
          </Button>
        }
      />
    </>
  );
}
// ----------------------------------------------------------------------
