import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
  Card,
  Table,
  Button,
  Tooltip,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  Typography,
  Stack,
} from '@mui/material';

// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import { CampagneVaccinationMadelAPI } from 'src/@types/Campain';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  useTable,
  emptyRows,
  TableNoData,
  TableSkeleton,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ConfirmDialog from 'src/components/confirm-dialog';
// sections
import { VaccinTableRow, VaccinTableToolbar } from 'src/sections/@dashboard/vaccinCampagne/list';
// service
import CampainService from 'src/services/CampainService';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'nom', label: 'Nom de campagne', align: 'left' },
  { id: 'type', label: 'Type de vaccin', align: 'left' },
  { id: 'vaccin', label: 'Vaccin', align: 'left' },
  { id: 'wilaya', label: 'Wilaya', align: 'left' },
  { id: 'moughataa', label: 'Moughataa', align: 'left' },
  { id: 'pourcentage', label: 'Pourcentage', align: 'center', width: 180 },
  { id: 'nombre', label: 'Nombre des personne vacciné', align: 'right' },
  { id: 'taux', label: "Taux d'abondon", align: 'right', width: 180 },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function OldVaccinationListPage() {
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
  } = useTable({
    defaultOrderBy: 'createdAt',
  });

  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

  const [campagnesData, setCampagnesData] = useState<CampagneVaccinationMadelAPI[]>([]);

  const [filterName, setFilterName] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [numberOfLigne, setNumberOfLigne] = useState<string[]>([]);

  const [openConfirm, setOpenConfirm] = useState(false);

  const denseHeight = dense ? 60 : 80;

  const isFiltered = filterName !== '' || !!numberOfLigne.length;

  const isNotFound =
    (!campagnesData.length && !!filterName) || (!isLoading && !campagnesData.length);

  const [searchNmae, setSearch] = useState('');

  useEffect(() => {
    if (isSearch) {
      getAllCampains(0, 25, searchNmae);
    } else {
      getAllCampains(0, 25);
    }
  }, [isSearch, searchNmae]);

  const getAllCampains = (pageNumber: number, size: number, search?: string) => {
    setIsLoading(true);
    CampainService.getAll(pageNumber, size, search)
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
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleDeleteRow = (id: number) => {};

  const handleDeleteRows = (selectedRows: string[]) => {};

  const handleEditRow = (title: string, campain: CampagneVaccinationMadelAPI) => {
    navigate(PATH_DASHBOARD.vaccinCamp.edit(paramCase(title)), {
      state: {
        row: campain,
      },
    });
  };

  const handleViewRow = (id: string, campain: CampagneVaccinationMadelAPI) => {
    navigate(PATH_DASHBOARD.vaccinCamp.edit(paramCase(id)), {
      state: {
        row: campain,
      },
    });
  };

  const handleResetFilter = () => {
    setFilterName('');
    setIsSearch(false);
  };
  const handleSearch = () => {
    setIsSearch(true);
    setSearch(filterName);
  };

  return (
    <>
      <Helmet>
        <title> Campagne: Vaccin Liste | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="élection"
          links={[
            { name: 'Tableau de bord', href: '' },
            {
              name: 'élection',
              href: PATH_DASHBOARD.vaccinCamp.list,
            },
            { name: 'Liste' },
          ]}
          action={
            <Stack>
              <Typography>Total des votes : 14566</Typography>
              <Typography> 56% des personnes adhérees</Typography>
              <Typography>9% des votants</Typography>
            </Stack>
          }
        />

        <Card>
          <VaccinTableToolbar
            filterName={filterName}
            onFilterName={handleFilterName}
            isFiltered={isFiltered}
            onResetFilter={handleResetFilter}
            onSearch={handleSearch}
          />

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={campagnesData.length}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  campagnesData.map((row) => row.id.toString())
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={handleOpenConfirm}>
                    <Iconify icon="eva:trash-2-outline" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={campagnesData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      campagnesData.map((row) => row.id.toString())
                    )
                  }
                />

                <TableBody>
                  {(isLoading ? [...Array(rowsPerPage)] : campagnesData)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) =>
                      row ? (
                        <VaccinTableRow
                          key={row.id}
                          row={row}
                          selected={selected.includes(row.id.toString())}
                          onSelectRow={() => onSelectRow(row.id.toString())}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          onEditRow={() => handleEditRow(row.title, row)}
                          onViewRow={() => handleViewRow(row.title, row)}
                        />
                      ) : (
                        !isNotFound && <TableSkeleton key={index} sx={{ height: denseHeight }} />
                      )
                    )}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, campagnesData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={campagnesData.length}
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
        title="Supprimer"
        content={
          <>
            Êtes-vous sûr que vous souhaitez supprimer <strong> {selected.length} </strong>{' '}
            campagne?
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
            Supprimer
          </Button>
        }
      />
    </>
  );
}
