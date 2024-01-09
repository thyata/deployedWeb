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
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// _mock_
import { _invoices } from 'src/_mock/arrays';
// @types
import { Effet } from 'src/@types/Campain';
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
import { StaffTableRow } from 'src/sections/@dashboard/gestion_effectif/Staff/list';
import { listPointFocaux, pointFocal } from 'src/assets/data/listMembers';
import { supervisorList } from 'src/assets/data/gestionData';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'id', align: 'left' },
  { id: 'nom', label: 'nom', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'post', label: 'Post', align: 'center' },
  { id: 'telephone', label: 'Telephone', align: 'center' },
  { id: '' },
];

const actesItems = [
  {
    NNI: 3277833454,
    patient: 'Ali Mohamed',
    type: 'ali@gmail.com',
    vaccin: 'DR',
    lieu: '27666242',
    date: new Date(),
  },
];

// ----------------------------------------------------------------------

export default function PersonnelListPage() {
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

  const [tableData, setTableData] = useState<pointFocal[]>([]);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [myRowsPerPage, setMyRowsPerPage] = useState(5);

  const [myPage, setMyPage] = useState(1);

  useEffect(() => {
    setTableData(supervisorList);
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

  return (
    <>
      <Helmet>
        <title> Liste des personnels | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Liste des personnels"
          links={[
            {
              name: 'Tableaux de bord',
              href: '',
            },
            {
              name: 'Direction regionale',
              href: PATH_DASHBOARD.gestionnaireEffectif.RegionHomePage,
            },
            {
              name: 'Liste des personnels',
            },
          ]}
          action={
            <Button
              component={RouterLink}
              to={PATH_DASHBOARD.gestionnaireEffectif.RegionCreatePersonnel}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Ajouter un personnel
            </Button>
          }
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
                      <StaffTableRow
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
