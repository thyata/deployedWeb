
import { useCallback,useState,useEffect} from 'react';
// form
import { useFormContext, useFieldArray} from 'react-hook-form';
// @mui
import { Box, Stack, Button, Divider, Typography, MenuItem, TextField } from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers';

import { fData } from 'src/utils/formatNumber';
// types 
import {Type,Vaccine} from 'src/@types/Campain';

// components
import Iconify from 'src/components/iconify';
import { RHFEditor, RHFSelect, RHFTextField, RHFUploadAvatar } from 'src/components/hook-form';
// assets
import {Moughataa,states} from 'src/assets/data/WilayaAndMoughataa';
// services
import CampainService from 'src/services/CampainService';
// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  selectedsState?:string[];
  idType?:number;
  ExistStartDate?:Date | null;
  ExistEndDate?:Date | null;
};


export default function Form({ isEdit ,selectedsState,idType,ExistStartDate,ExistEndDate}: Props) {

  const { control,setValue} = useFormContext();
  const [typeVaccinList, setTypeVaccinList] = useState<Type[]>([]);
  const [vaccinsOfTypeList, setVaccinsOfTypeList] = useState<Vaccine[]>([]);
  const [selectedState, setSelectedState] = useState<string []>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locations',
  });

  const handleAdd = () => {
    append({
      region: {id:0}, quantity: 0, audience: 0
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    getAllTypeVaccin();
    if(isEdit && selectedsState&&idType){
      const states_selectes = selectedsState ?? ['null'];
      setSelectedState(states_selectes);
      getAllVaccinOfType(idType);
      const start = ExistStartDate ?? new Date();
      setStartDate(start);
      const end = ExistEndDate ?? new Date();
      setEndDate(end);
    }
  }, [isEdit,selectedsState,idType,ExistStartDate,ExistEndDate]);


  const getAllTypeVaccin = () => {
      CampainService.getAllVaccineType(0,5)
        .then((response: any) => {
          const data = response.data;
          const {content} =data;
          setTypeVaccinList(content);
          console.log('Data Type From API :OK',content);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  

  const getAllVaccinOfType = (id: number) => {
      CampainService.getAllVaccineOfType(0,10,id)
        .then((response: any) => {
          const data = response.data;
          const {content} =data;
          setVaccinsOfTypeList(content);
          console.log('Data Vaccine From API :OK',JSON.stringify(content,null,2));
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
 
  const handleSelectWilaya = useCallback(
    (option: string) => {
      const state_id = states.find((state) => state.name === option)?.id ?? 'null';
      setSelectedState(prevState => [...prevState, state_id]);
      
    },
    [setSelectedState]
  );
  const handleSelectMoughataa = useCallback(
    (index: number, option: string) => {
      setValue(
        `locations[${index}].region.id`,
        Moughataa.find((moughataa) => moughataa.name === option)?.id
      );
      
    },
    [setValue]
  );

  const handleChangeAffecterQuantite = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
      setValue(`locations[${index}].quantity`, Number(event.target.value));
    },
    [setValue]
  );

  const handleChangePopulaireCible = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
      setValue(`locations[${index}].audience`, Number(event.target.value));
    },
    [setValue]
  );

  const handleSelectVaccine = useCallback(
    (option: Vaccine) => {
      setValue(
        'vaccine',
        option
      );
    },
    [setValue]
  );


 const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('url', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );


  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
       Créer un campagne de vaccination :
      </Typography>
       <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        <Stack alignItems="flex-end" spacing={1.5}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
             <RHFTextField
                size="medium"
                name="title"
                label="Nom de campagne"
                InputLabelProps={{ shrink: true }}
                
              />
             <RHFSelect
              name="type"
              size="medium"
              label="Type de vaccine"
              InputLabelProps={{ shrink: true }}
            >
              <Divider />
              {typeVaccinList.map((type) => (
                <MenuItem
                  key={type.id}
                  value={type.name}
                  onClick={() => getAllVaccinOfType(type.id)}
                >
                  {type.name}
                </MenuItem>
              ))}
            </RHFSelect>
            <RHFSelect
                name="Vaccine"
                size="medium"
                label="Vaccines"
              >
            <Divider />
            {vaccinsOfTypeList.map((vaccin) => (
              <MenuItem
                key={vaccin.id}
                value={vaccin.name}
                onClick={()=> handleSelectVaccine(vaccin)}
              >
                {vaccin.name}
              </MenuItem>
              ))}
            </RHFSelect>
            <DatePicker
                label="Date lancement"
                value={startDate}
                onChange={(newValue) => {
                     setStartDate(newValue);
                     setValue('startDate',newValue?.toISOString().split('T')[0]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{
                      maxWidth: { md: 165 },
                    }} />
                )}   
              />
               <DatePicker
                label="Date fin"
                value={endDate}
                onChange={(newValue) => {
                     setEndDate(newValue);
                     setValue('endDate',newValue?.toISOString().split('T')[0]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{
                      maxWidth: { md: 160 },
                    }} />
                )}   
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Description
                </Typography>
                <RHFEditor simple name="description" />
          </Stack>
           <Stack spacing={1} sx={{ mt: 3 }}>
              <RHFUploadAvatar
                name="url"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                   Format acceptable *.jpeg, *.jpg, *.png, *.gif
                    <br /> Taille maximale {fData(3145728)}
                  </Typography>
                }
              />
              </Stack>
             
      </Stack>
      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
      <Typography variant="h6" sx={{mb: 3 }}>
       Sélection du lieu :
      </Typography>
      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack key={item.id} direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
              <RHFSelect
                name={`locations[${index}].region.state.name`}
                size="medium"
                label="Wilaya"
                sx={{ maxWidth: { md: 160 } }}
              >
              <Divider />

              {states.map((state) => (
                <MenuItem
                  key={state.id}
                  value={state.name}
                  onClick={() => handleSelectWilaya(state.name)}
                >
                  {state.name}
                </MenuItem>
                ))}
              </RHFSelect>
             
               {selectedState[index] && <RHFSelect
                name={`locations[${index}].region.name`}
                size="medium"
                label="Moughataa"
                InputLabelProps={{ shrink: true }}
                sx={{ maxWidth: { md: 160 } }}
              >
              <Divider />
               {Moughataa.filter((moughataa) => moughataa.state_id === selectedState[index]).map((moughataa) => (
              <MenuItem
                key={moughataa.id}
                value={moughataa.name}
                onClick={() => handleSelectMoughataa(index, moughataa.name)}
              >
                {moughataa.name}
              </MenuItem>
                ))}
              </RHFSelect>}
                <RHFTextField
                size="medium"
                type="number"
                name={`locations[${index}].audience`}
                label="Populaire cible"
                onChange={(event) => handleChangePopulaireCible(event, index)}
                InputLabelProps={{ shrink: true }}
              />
              <RHFTextField
                size="medium"
                type="number"
                name={`locations[${index}].quantity`}
                onChange={(event) => handleChangeAffecterQuantite(event, index)}
                label="Affecter un quantité"
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
            <Button
              size="medium"
              color="error"
              startIcon={<Iconify icon="eva:trash-2-outline" />}
              onClick={() => handleRemove(index)}
            >
              Retirer
            </Button>
          </Stack>
        ))}
        <Stack
        spacing={2}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Button
          size="large"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Ajouter
        </Button>
      </Stack>
      </Stack>     
    </Box>
  );
}
