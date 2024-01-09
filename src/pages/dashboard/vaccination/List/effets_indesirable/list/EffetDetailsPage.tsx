import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

import { Link as RouterLink, useParams } from 'react-router-dom';
// @mui
import {
  Container,
  Tab,
  Tabs,
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Tooltip,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';

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
import { EffetTableRow } from 'src/sections/@dashboard/vaccinCampagne/effet_indesirable/list';
import { Effet } from 'src/@types/Campain';

// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { id: 'NNI', label: 'NNI', align: 'left' },
  { id: 'Patient', label: 'Patient', align: 'left' },
  { id: 'Type', label: 'Type du vaccin', align: 'left' },
  { id: 'Vaccin', label: 'Vaccin', align: 'center' },
  { id: 'Lieu', label: 'Lieu', align: 'center' },
  { id: 'Date', label: 'Date', align: 'left' },
  { id: '' },
];

const actesItems = [
  {
    NNI: 3277833454,
    patient: 'Ali Mohame',
    type: 'Type 1',
    vaccin: 'Vaccin 1',
    lieu: 'Nouakchott,Mauritanie',
    date: new Date(),
  },
  {
    NNI: 3277833454,
    patient: 'Ali Mohame',
    type: 'Type 1',
    vaccin: 'Vaccin 1',
    lieu: 'Nouakchott,Mauritanie',
    date: new Date(),
  },
  {
    NNI: 3277833454,
    patient: 'Ali Mohame',
    type: 'Type 1',
    vaccin: 'Vaccin 1',
    lieu: 'Nouakchott,Mauritanie',
    date: new Date(),
  },
];

export default function EffetDetailsPage() {
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
    onSelectRow,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState<Effet[]>([]);

  const [filterName, setFilterName] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('');

  const [filterWillaya, setFilterWillaya] = useState('');

  const [myRowsPerPage, setMyRowsPerPage] = useState(5);

  const [myPage, setMyPage] = useState(1);

  const [filterMougataa, setFilterMoughataa] = useState('');

  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);

  useEffect(() => {
    setTableData(actesItems);
    console.log('row par page', myRowsPerPage);
    console.log('page ', myPage);
  }, [myRowsPerPage, myPage]);

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

  const TABS = [{ value: 'all', label: 'All', color: 'info', count: 1 }] as const;

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
  const handleFilterMoughataa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterMoughataa(event.target.value);
  };
  const handleDeleteRow = (id: string) => {};

  const handleEditRow = (id: string) => {
    // navigate(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id: string) => {
    // navigate(PATH_DASHBOARD.invoice.view(id));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterMoughataa('');
    setFilterWillaya('');
    setFilterEndDate(null);
    setFilterStartDate(null);
  };

  return (
    <>
      <Helmet>
        <title> Effet detail | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Detail"
          links={[
            { name: 'Tableau de bord' },
            { name: 'Listes superviseur', href: PATH_DASHBOARD.vaccinCamp.listEffet },
            { name: 'Détails' },
          ]}
          // action={
          //   <Button
          //     component={RouterLink}
          //     to={PATH_DASHBOARD.vaccinCamp.createEffet}
          //     variant="contained"
          //     size='large'
          //     startIcon={<Iconify icon="eva:plus-fill" />}
          //   >
          //     Ajouter un effet
          //   </Button>
          // }
        />
        <Card>
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
                      <EffetTableRow
                        key={row.NNI}
                        row={row}
                        selected={selected.includes(row.NNI.toString())}
                        onSelectRow={() => onSelectRow(row.NNI.toString())}
                        onViewRow={() => handleViewRow(row.NNI.toString())}
                        onEditRow={() => handleEditRow(row.NNI.toString())}
                        onDeleteRow={() => handleDeleteRow(row.NNI.toString())}
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
