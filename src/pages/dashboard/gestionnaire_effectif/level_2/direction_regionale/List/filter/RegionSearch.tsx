import { useState } from 'react';
import { paramCase } from 'change-case';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Typography, Autocomplete, InputAdornment } from '@mui/material';

// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import {CampagneVaccinationMadelAPI} from 'src/@types/Campain';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { CustomTextField } from 'src/components/custom-input';
import SearchNotFound from 'src/components/search-not-found';
// service
import CampainService from 'src/services/CampainService';
// ----------------------------------------------------------------------

export default function RegionSearch() {
  const navigate = useNavigate();

  const [searchCampains, setSearchCampains] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchCampains = async (value: string) => {
    try {
      setSearchCampains(value);
      if (value) {
        CampainService.getAll(0,25,value)
        .then((response: any) => {
          const data = response.data;
          const {content} =data;
          setSearchResults(content);
          console.log('Data From API :OK',content);
        })
        .catch((e: Error) => {
          console.log(e);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = (title: string) => {
     navigate(PATH_DASHBOARD.vaccinCamp.view(paramCase(title)));
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick(searchCampains);
    }
  };

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      options={searchResults}
      onInputChange={(event, value) => handleSearchCampains(value)}
      getOptionLabel={(campain: CampagneVaccinationMadelAPI) => campain.title}
      noOptionsText={<SearchNotFound query={searchCampains} />}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      componentsProps={{
        popper: {
          sx: {
            width: `280px !important`,
          },
        },
        paper: {
          sx: {
            '& .MuiAutocomplete-option': {
              px: `8px !important`,
            },
          },
        },
      }}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          width={220}
          placeholder="Rechercher..."
          onKeyUp={handleKeyUp}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, campain, { inputValue }) => {
        const { title } = campain;
        const cover ='cover';
        const matches = match(title, inputValue);
        const parts = parse(title, matches);

        return (
          <li {...props}>
            <Image
              alt={cover}
              src={cover}
              sx={{ width: 48, height: 48, borderRadius: 1, flexShrink: 0, mr: 1.5 }}
            />

            <Link underline="none" onClick={() => handleClick(title)}>
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? 'primary' : 'textPrimary'}
                >
                  {part.text}
                </Typography>
              ))}
            </Link>
          </li>
        );
      }}
    />
  );
}
