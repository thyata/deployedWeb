// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

type Props = {
  filterName: string;
  filterRole: string;
  filterType: string;
  filterData: string;
  optionsType: Array<Category>;
  isFiltered: boolean;
  optionsRole: Array<Service>;
  optionsData: Array<Provider>;
  onResetFilter: VoidFunction;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterRole: (event: React.MouseEvent<Element>,s: Service) => void;
  onFilterType: (event: React.MouseEvent<Element>,c: Category) => void;
  onFilterData: (event: React.MouseEvent<Element>, p: Provider) => void;
};

type Patient = {
  age: string,
  birthDate: string,
  doctors: [],
  fullName: string,
  gender: string,
  id: number,
  identification: string,
  lastUpdate: string,
  phoneNumber: string,
  title?: string,
};

type Service = {
  id: number,
  name: string,
  subServices: [],
  team: [],
  status: string
}

type Category = {
  id: number,
  name: string,
  subCategories: [],
}

type Act = {
  id: number,
  name: string,
  service: Service,
  reference: string,
  defaultPrice: number,
  basePrice: number,
  type: string,
  category: Category,
  providers: [
    {
      id: number,
      user: {
          id: number,
          username: string,
          name: string,
          nameAr: string,
          status: string,
          userRole: string
      },
      basePrice: number,
      priceVariations: [
          {
              id: number,
              name: string,
              price: number
          }
      ]
    }
  ]
}

type Provider = {
  id: number,
  username: string,
  password: string,
  name: string,
  nameAr: string,
  status: string,
  userRole: string
}

export default function UserTableToolbar({
  isFiltered,
  filterName,
  filterRole,
  optionsRole,
  filterType,
  optionsType,
  filterData,
  optionsData,
  onFilterName,
  onFilterRole,
  onFilterType,
  onResetFilter,
  onFilterData
}: Props) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      sx={{ px: 2.5, py: 3 }}
    >
      <TextField
        fullWidth
        select
        label="Service"
        value={filterRole}
        // onChange={}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 260,
              },
            },
          },
        }}
        sx={{
          maxWidth: { sm: 240 },
          textTransform: 'capitalize',
        }}
      >
        {optionsRole.map((option, i) => (
          <MenuItem
            key={i}
            value={option.name}
            onClick={(e) => onFilterRole(e,option)}
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

      <TextField
        fullWidth
        select
        label="Category"
        value={filterType}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 260,
              },
            },
          },
        }}
        sx={{
          maxWidth: { sm: 240 },
          textTransform: 'capitalize',
        }}
      >
        {optionsType.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            onClick={(e) => onFilterType(e, option)}
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

      <TextField
        fullWidth
        select
        label='Providers'
        value={filterData}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 260,
              },
            },
          },
        }}
        sx={{
          maxWidth: { sm: 240 },
          textTransform: 'capitalize',
        }}
      >
        {optionsData.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            onClick={(e) => onFilterData(e,option)}
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

      <TextField
        fullWidth
        value={filterName}
        onChange={onFilterName}
        placeholder="Search..."
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
          Clear
        </Button>
      )}
    </Stack>
  );
}
