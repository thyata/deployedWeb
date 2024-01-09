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
// _mock_
import { _invoices } from 'src/_mock/arrays';
// @types
import { ActeFromAPI } from 'src/@types/Campain';
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
const FILTER_OPTIONS = [
  { id: 1, label: 'NNI erronés' },
  { id: 2, label: "Duplication d'information" },
  { id: 3, label: 'Conflux' },
];

// ----------------------------------------------------------------------

export default function ErrorCampainDetailsPage() {
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

  const [filterName, setFilterName] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('');

  const [filterWillaya, setFilterWillaya] = useState('');

  const [filterMougataa, setFilterMoughataa] = useState('');

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);

  const [filterOption, setFilterOption] = useState('NNI erronés');

  const [tableData, setTableData] = useState<Member[]>([]);

  const getAllActes = useCallback(async (pageNumber: number, sizeToGet: number, nni?: string) => {
    // CampainService.getAllActes(pageNumber, sizeToGet, nni)
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
  }, []);

  useEffect(() => {
    getAllActes(0, 10);
  }, [getAllActes]);

  const denseHeight = dense ? 56 : 76;

  const isFiltered =
    filterWillaya !== '' ||
    filterMougataa !== '' ||
    filterName !== '' ||
    (!!filterStartDate && !!filterEndDate);

  const isNotFound = false;

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

  const handleFilterWillaya = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterWillaya(event.target.value);
  };
  const handleFilterOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterOption(event.target.value);
  };

  const handleFilterMoughataa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterMoughataa(event.target.value);
  };
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
    setFilterOption('');
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
          heading="Campagnes"
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
              name: 'Listes',
            },
          ]}
        />

        <Card>
          <Divider />

          {/* <ActesTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterWillaya={filterWillaya}
            filterMougataa={filterMougataa}
            filterEndDate={filterEndDate}
            onFilterName={handleFilterName}
            onResetFilter={handleResetFilter}
            filterStartDate={filterStartDate}
            isError
            filerOptions={FILTER_OPTIONS}
            filterOption={filterOption}
            onFilterOption={handleFilterOption}
            onFilterWillaya={handleFilterWillaya}
            onFilterMoughataa={handleFilterMoughataa}
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
                        isError
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
          /> */}
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
                    .map(
                      (row) =>
                        row.statut === 2 && (
                          <ActesTableRow
                            key={row.id}
                            row={row}
                            selected={selected.includes(row.id.toString())}
                            onSelectRow={() => onSelectRow(row.id.toString())}
                            onViewRow={() => handleViewRow(row.id.toString())}
                            onEditRow={() => handleEditRow(row.id.toString())}
                            onDeleteRow={() => handleDeleteRow(row.id.toString())}
                          />
                        )
                    )}

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
