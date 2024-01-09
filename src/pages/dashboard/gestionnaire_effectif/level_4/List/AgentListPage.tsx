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
import SvgIcon from '@mui/material/SvgIcon';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// _mock_
import { _invoices } from 'src/_mock/arrays';
// @types
import { Effet, Role, Supervisor } from 'src/@types/Campain';
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

import RoleTableRow from 'src/sections/@dashboard/paramettre/roleTableRow';
import {
  TABLE_HEAD_ROLE,
  TABLE_HEAD_SUPERVISOR,
  roleList,
  supervisorList,
} from 'src/assets/data/gestionData';
import SelectRole from 'src/sections/@dashboard/paramettre/multiSelectList';
// assests
import { ReactComponent as user } from '../../assets/user.svg';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AgentListPage() {
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

  const [tableData, setTableData] = useState<Role[]>([]);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [myRowsPerPage, setMyRowsPerPage] = useState(5);

  const [myPage, setMyPage] = useState(1);

  useEffect(() => {
    setTableData(roleList);
    console.log('row par page', myRowsPerPage);
    console.log('page ', myPage);
  }, [myRowsPerPage, myPage]);

  const denseHeight = dense ? 56 : 76;

  const isNotFound = false;

  const TABS = [{ value: 'all', label: 'All', color: 'info', count: 1 }] as const;

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleDeleteRow = (id: string) => {};

  const handleEditRow = (id: string) => {};

  const handleViewRow = (id: string) => {};

  const [openModal, setOpenModal] = useState(false);
  const [openModalList, setOpenModalList] = useState(false);

  return (
    <>
      <Helmet>
        <title> Liste des agents | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Liste des roles"
          links={[
            {
              name: 'Tableaux de bord',
              href: '',
            },
            {
              name: 'Parametre',
              href: PATH_DASHBOARD.gestionnaireEffectif.PointHomePage,
            },
            {
              name: 'Liste des roles',
            },
          ]}
        />
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => setOpenModal(true)}
          >
            Ajouter un role
          </Button>
        </Stack>

        <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle sx={{ pb: 2 }}>
            <Typography>Ajouter role</Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={1} margin={1} direction="row">
              <TextField variant="outlined" label="Nom du role" fullWidth />
            </Stack>
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
              rowCount={tableData.length}
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
                      <Iconify icon="ic:round-send" />
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
                  headLabel={TABLE_HEAD_ROLE}
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

                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <RoleTableRow
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
            Êtes-vous sûr que vous souhaitez supprimer <strong> {selected.length} </strong> ?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
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
