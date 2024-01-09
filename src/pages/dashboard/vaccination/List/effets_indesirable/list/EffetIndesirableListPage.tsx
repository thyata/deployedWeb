import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
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
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// _mock_
import { _invoices } from 'src/_mock/arrays';
// @types
import { Effet, Supervisor } from 'src/@types/Campain';
// components
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
import { EffetTableRow } from 'src/sections/@dashboard/vaccinCampagne/effet_indesirable/list';
import SupervisorTableRow from 'src/sections/@dashboard/paramettre/supervisorTableRow';
import { TABLE_HEAD_SUPERVISOR, supervisorList } from 'src/assets/data/gestionData';
import SvgIcon from '@mui/material/SvgIcon';

import SelectRole from 'src/sections/@dashboard/paramettre/multiSelectList';
import { el } from 'date-fns/locale';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function EffetIndesirableListPage() {
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
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState<Supervisor[]>([]);

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
    setTableData(supervisorList);
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
    navigate(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id: string) => {
    navigate(PATH_DASHBOARD.invoice.view(id));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterMoughataa('');
    setFilterWillaya('');
    setFilterEndDate(null);
    setFilterStartDate(null);
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalList, setOpenModalList] = useState(false);
  const [selectedSupervisor, setSelectedSupervisor] = useState<Supervisor[]>([]);

  const getSupervisorName = (elm: any) => {
    if (elm.length !== 0) {
      console.log(supervisorList);
      console.log(elm);

      let usernameList: Supervisor;

      console.log('====>2');
      elm.forEach((item: string) => {
        usernameList = supervisorList.find((list) => list.id === item);
      });

      console.log(usernameList);
      return `${usernameList.nom}`;
    }
    return '';
  };

  return (
    <>
      <Helmet>
        <title> Superviseur: List | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Listes des acteurs politiques"
          links={[
            {
              name: 'Tableaux de bord',
              href: '',
            },
            {
              name: 'Listes',
            },
          ]}
        />
        <Stack
          mb={5}
          direction="row"
          // sx={{ right: 10, position: 'absolute', top: '-20' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => setOpenModal(true)}
          >
            Ajouter un acteur politique
          </Button>
        </Stack>

        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter un acteur politique</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom complet" fullWidth />
              <TextField variant="outlined" label="Numéro de téléphone" fullWidth />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openModalList}
          onClose={() => setOpenModalList(false)}
        >
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>
              Attribuer des permission a {getSupervisorName(selected).toString()}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <SelectRole />
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => {}}>
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>

        <Card>
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={1}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Stack direction="row">
                  <Tooltip title="Grant permission">
                    <IconButton color="primary" onClick={() => setOpenModalList(true)}>
                      <Iconify icon="ic:settings" />
                    </IconButton>
                  </Tooltip>

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
                  rowCount={1}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={() => null}
                />

                <TableBody>
                  {tableData
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
