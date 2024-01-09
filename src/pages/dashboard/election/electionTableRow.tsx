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
import { Member } from 'src/assets/data/listMembers';
import { PATH_DASHBOARD } from 'src/routes/paths';
import ConfirmDialog from 'src/components/confirm-dialog';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import MenuPopover from 'src/components/menu-popover';
import { frDate } from 'src/utils/formatTime';
import { Voter } from 'src/@types/Campain';
// utils

// ----------------------------------------------------------------------

type Props = {
  row: Voter;
  selected: boolean;
  isError?: boolean;
  onSelectRow: VoidFunction;
  onViewRow: VoidFunction;
  onEditRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function ElectionTableRow({
  row,
  selected,
  isError,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
}: Props) {
  const { id, nni, fullName, phone, bureau, statut } = row;

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
      navigate(PATH_DASHBOARD.vaccinCamp.acteDetail(paramCase('title')), {
        state: {
          row,
        },
      });
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
                <Link sx={{ color: isError ? 'red' : 'inherit' }} onClick={handleViewRow}>
                  {nni}
                </Link>
              </Typography>
            </div>
          </Stack>
        </TableCell>

        <TableCell align="left">{fullName}</TableCell>

        <TableCell align="left">{phone}</TableCell>

        <TableCell align="left">{bureau}</TableCell>

        <TableCell align="left">
          {' '}
          <Label variant="soft" color="default">
            {statut}
          </Label>{' '}
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
            handleViewRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:eye-fill" />
          Voir
        </MenuItem>

        <MenuItem
          onClick={() => {
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
