import React,{ useState } from 'react';
// @mui
import {
  Link,
  Stack,
  Button,
  TableRow,
  Checkbox,
  MenuItem,
  TableCell,
  IconButton,
} from '@mui/material';
// @types
import { CampagneVaccinationMadelAPI } from '../../../../@types/Campain';
// components
import Label from '../../../../components/label';
import Iconify from '../../../../components/iconify';
import MenuPopover from '../../../../components/menu-popover';
import ConfirmDialog from '../../../../components/confirm-dialog';

// ----------------------------------------------------------------------

type Props = {
  row: CampagneVaccinationMadelAPI;
  selected: boolean;
  onEditRow: VoidFunction;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function VaccinTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  onViewRow,
}: Props) {
  
  const { title, vaccine, locations} = row;
  const pourcentage =60;
  const tauxAbondon =24;

  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
               <Link
              noWrap
              color="inherit"
              variant="subtitle2"
              onClick={onViewRow}
              sx={{ cursor: 'pointer' }}
            >
              {title}
            </Link>
          </Stack>
        </TableCell>

        
        <TableCell>{vaccine.type.name}</TableCell>
        <TableCell>{vaccine.name}</TableCell>
        <TableCell>{locations[0].region.name}</TableCell>
        <TableCell>{locations[0].region.state.name}</TableCell>

        <TableCell align="center">
          <Label
            variant="soft"
            color={
              (pourcentage < 50  && 'error') ||
              (pourcentage > 50 && pourcentage < 90 && 'warning') ||
              'success'
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {`${pourcentage}%`}
          </Label>
        </TableCell>

        <TableCell align="right">{locations[0].audience}</TableCell>

        <TableCell align="center">
          <Label
            variant="soft"
            color={
              (tauxAbondon > 80  && 'error') ||
              (tauxAbondon < 80 && tauxAbondon > 50 && 'warning') ||
              'success'
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {`${tauxAbondon}%`}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton color={openPopover ? 'primary' : 'default'} onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="eva:trash-2-outline" />
          Supprimer
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:edit-fill" />
          Modifier
        </MenuItem>
      </MenuPopover>

      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Supprimer"
        content="Êtes-vous sûr que vous souhaitez supprimer?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Supprimer
          </Button>
        }
      />
    </>
  );
}
