import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paramCase } from 'change-case';
// @mui
import {
  Link,
  Stack,
  Button,
  Divider,
  Checkbox,
  TableRow,
  MenuItem,
  TableCell,
  IconButton,
  Typography,
} from '@mui/material';

import { pointFocal } from 'src/assets/data/listMembers';
// utils
import { frDate } from '../../../../../utils/formatTime';
// @types
import { Effet } from '../../../../../@types/Campain';
// routes
import { PATH_DASHBOARD } from '../../../../../routes/paths';
// components
import Label from '../../../../../components/label';
import Iconify from '../../../../../components/iconify';
import { CustomAvatar } from '../../../../../components/custom-avatar';
import MenuPopover from '../../../../../components/menu-popover';
import ConfirmDialog from '../../../../../components/confirm-dialog';

// ----------------------------------------------------------------------

type Props = {
  row: pointFocal;
  selected: boolean;
  isError?: boolean;
  onSelectRow: VoidFunction;
  onViewRow: VoidFunction;
  onEditRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function StaffTableRow({
  row,
  selected,
  isError,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
}: Props) {
  const { id, nom, username, telephone } = row;

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
  const navigate = useNavigate();

  const handleViewRow = () => {
    if (isError) {
      console.log('isError');
    } else {
      navigate(PATH_DASHBOARD.vaccinCamp.effetDetails);
    }
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} />
        </TableCell>

        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
            <div>
              <Typography variant="subtitle2" noWrap>
                <Link sx={{ color: isError ? 'red' : 'inherit' }}>{id}</Link>
              </Typography>
            </div>
          </Stack>
        </TableCell>

        <TableCell align="left" sx={{ color: isError ? 'red' : 'inherit' }}>
          {nom}
        </TableCell>

        <TableCell align="left" sx={{ color: isError ? 'red' : 'inherit' }}>
          {username}
        </TableCell>

        <TableCell align="left" sx={{ color: isError ? 'red' : 'inherit' }}>
          {telephone}
        </TableCell>

        <TableCell align="right">
          <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            navigate(PATH_DASHBOARD.gestionnaireEffectif.AgentsCreatePage);
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:edit-fill" />
          Modifier
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            // handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="eva:trash-2-outline" />
          Supprimer
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
