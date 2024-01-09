import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { roleList } from 'src/assets/data/gestionData';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectRole() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }} fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Selectionner les roles</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selectionner les roles" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {roleList.map((item) => (
            <MenuItem key={item.id} value={item.roleName}>
              <Checkbox checked={personName.indexOf(item.roleName) > -1} />
              <ListItemText primary={item.roleName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
