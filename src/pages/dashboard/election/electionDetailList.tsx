import {
  Container,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Card,
  Divider,
  TableContainer,
  Tooltip,
  IconButton,
  Table,
  TableBody,
} from '@mui/material';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { Moughataa } from 'src/assets/data';
import { states } from 'src/assets/data/WilayaAndMoughataa';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  TableSelectedAction,
  emptyRows,
  useTable,
} from 'src/components/table';
import { TABLE_HEAD_ELECTION, statusVote, votants } from 'src/assets/data/gestionData';
import { Vaccine, Voter } from 'src/@types/Campain';
import { Member } from 'src/assets/data/listMembers';
import { PATH_DASHBOARD } from 'src/routes/paths';
import CampainService from 'src/services/CampainService';
import ElectionTableRow from './electionTableRow';

export default function ElectionDetailList() {
  const idParam = useParams();
  const { themeStretch } = useSettingsContext();
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

  const [tableData, setTableData] = useState<Voter[]>([]);

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
    const content = votants;
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
  }, [tableData]);

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
  const navigate = useNavigate();
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
        <title>Election| Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Gestion de l'election"
          links={[
            {
              name: 'Tableau de bord',
              href: '',
            },
            {
              name: 'Election',
              href: '',
            },
            {
              name: 'detail List',
            },
          ]}
        />

        <Card>
          <Divider />

          <Stack
            spacing={2}
            alignItems="center"
            direction={{
              xs: 'column',
              md: 'row',
            }}
            sx={{ px: 2.5, py: 3 }}
          >
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
              {Moughataa.filter((moughataa) => moughataa.code).map((option) => (
                <MenuItem
                  key={option.code}
                  value={option.code}
                  sx={{
                    mx: 1,
                    borderRadius: 0.75,
                    typography: 'body2',
                    textTransform: 'capitalize',
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              select
              label="Statut"
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
              {statusVote.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.label}
                  // onClick={() => handleSelectWilaya(option.name)}

                  sx={{
                    mx: 1,
                    borderRadius: 0.75,
                    typography: 'body2',
                    textTransform: 'capitalize',
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              rowCount={tableData.length}
              numSelected={selected.length}
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
                  headLabel={TABLE_HEAD_ELECTION}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ElectionTableRow
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
    </>
  );
}
