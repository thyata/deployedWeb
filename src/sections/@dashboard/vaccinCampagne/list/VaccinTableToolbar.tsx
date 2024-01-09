import React from 'react';
// @mui
import {
  Stack,
  Button,
  TextField,
  FormControl,
  InputAdornment,
} from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

type Props = {
  isFiltered: boolean;
  filterName: string;
  onResetFilter: VoidFunction;
  onSearch:VoidFunction;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function VaccinTableToolbar({
  isFiltered,
  filterName,
  onFilterName,
  onResetFilter,
  onSearch,
}: Props) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ px: 2.5, py: 3 }}
    >
      <FormControl
        sx={{
          width: { xs: 1, md: 600 },
        }}
      >
      <TextField
        fullWidth
        value={filterName}
        onChange={onFilterName}
        placeholder="Recherche..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />
      </FormControl>
      

      <Button
          color="primary"
          sx={{ flexShrink: 0 }}
          onClick={onSearch}
          startIcon={<Iconify icon="eva:search-fill" />}
        >
          Rechercher
        </Button>
         
      {isFiltered && (
        <Button
          color="error"
          sx={{ flexShrink: 0 }}
          onClick={onResetFilter}
          startIcon={<Iconify icon="eva:trash-2-outline" />}
        >
            Vider
          </Button>
        
      )}
    </Stack>
  );
}
