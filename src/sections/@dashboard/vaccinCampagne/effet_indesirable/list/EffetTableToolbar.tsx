import {useState,useCallback} from 'react';
// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
// components
import Iconify from '../../../../../components/iconify';
// assets
import {Moughataa,states} from '../../../../../assets/data/WilayaAndMoughataa';

// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;

type Props = {
  filterName: string;
  isFiltered: boolean;
  filterWillaya: string;
  filterMougataa:string;
  isError?:boolean;
  filerOptions?:any[];
  filterOption?:string;
  filterStartDate: Date | null;
  filterEndDate: Date | null;
  onResetFilter: VoidFunction;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterWillaya: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterMoughataa: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterOption?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterStartDate: (value: Date | null) => void;
  onFilterEndDate: (value: Date | null) => void;
};

export default function EffetTableToolbar({
  filterName,
  isFiltered,
  filterStartDate,
  filterEndDate,
  filterWillaya,
  filterMougataa,
  isError,
  filerOptions,
  filterOption,
  onFilterOption,
  onResetFilter,
  onFilterName,
  onFilterWillaya,
  onFilterMoughataa,
  onFilterEndDate,
  onFilterStartDate,
}: Props) {

  const [selectedState, setSelectedState] = useState('');

  const handleSelectWilaya = useCallback(
    (option: string) => {
      const state_id = states.find((state) => state.name === option)?.id ?? 'null';
      setSelectedState(state_id);
      
    },
    [setSelectedState]
  );
  

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
      <TextField
        fullWidth
        select
        label="Wilaya"
        value={filterWillaya}
        onChange={onFilterWillaya}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: { maxHeight: 220 },
            },
          },
        }}
        sx={{
          maxWidth: { md: INPUT_WIDTH },
          textTransform: 'capitalize',
        }}
      >
        {states.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            onClick={() => handleSelectWilaya(option.name)}
            sx={{
              mx: 1,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      {filterWillaya && <TextField
        fullWidth
        select
        label="Moughataa"
        value={filterMougataa}
        onChange={onFilterMoughataa}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: { maxHeight: 220 },
            },
          },
        }}
        sx={{
          maxWidth: { md: INPUT_WIDTH },
          textTransform: 'capitalize',
        }}
      >
        {Moughataa.filter((moughataa) => moughataa.state_id === selectedState).map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            sx={{
              mx: 1,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </TextField>}

      {filerOptions && <TextField
        fullWidth
        select
        label="Filter by"
        value={filterOption}
        onChange={onFilterOption}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: { maxHeight: 220 },
            },
          },
        }}
        sx={{
          maxWidth: { md: INPUT_WIDTH },
          textTransform: 'capitalize',
        }}
      >
        {filerOptions.map((option) => (
          <MenuItem
            key={option.id}
            value={option.label}
           // onClick={() => handleSelectWilaya(option.name)}
            sx={{
              mx: 1,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>}

     {!isError && <><DatePicker
        label="Date debut"
        value={filterStartDate}
        onChange={onFilterStartDate}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            sx={{
              maxWidth: { md: INPUT_WIDTH },
            }} />
        )} /><DatePicker
          label="Date fin"
          value={filterEndDate}
          onChange={onFilterEndDate}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              sx={{
                maxWidth: { md: INPUT_WIDTH },
              }} />
          )} /></>}

      <TextField
        fullWidth
        value={filterName}
        onChange={onFilterName}
        placeholder="Rechercher un patient"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />

      {isFiltered && (
        <Button
          color="error"
          sx={{ flexShrink: 0 }}
          onClick={onResetFilter}
          startIcon={<Iconify icon="eva:trash-2-outline" />}
        >
          vider
        </Button>
      )}
    </Stack>
  );
}
