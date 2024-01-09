
import { useCallback,useState} from 'react';
// form
import { useFormContext} from 'react-hook-form';
// @mui
import { Box, Divider, Typography, MenuItem, TextField, Grid, Card } from '@mui/material';
import { fData } from 'src/utils/formatNumber';

// components
import {RHFTextField, RHFUploadAvatar } from 'src/components/hook-form';
// assets
import {Moughataa,states} from 'src/assets/data/WilayaAndMoughataa';

// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
};


export default function Form({ isEdit}: Props) {

  const { watch,setValue} = useFormContext();
  const values = watch();
  const {responsable,location} = values;
  const [selectedState, setSelectedState] = useState('');

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('imgUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleSelectWilaya = useCallback(
    (option: string) => {
      const state_id = states.find((state) => state.name === option)?.id ?? 'null';
      setSelectedState(state_id);
      
    },
    [setSelectedState]
  );


 return (  
    <Box sx={{ p: 3 }}>  
        <Grid item xs={24} md={8}>
          <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
          <Typography variant="h6" sx={{mb: 3 }}>
              Etablissement :
          </Typography>
          <Card sx={{ p: 3 }}>
             <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                }}
              >
                <RHFTextField name="nom" label="Nom d'établissement" />
                <TextField
                  fullWidth
                  select
                  name="wilaya"
                  label="Wilaya"
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: { maxHeight: 220 },
                      },
                    },
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
                  {selectedState && <TextField
                    fullWidth
                    select
                    label="Moughataa"
                    name={location.region.id}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: { maxHeight: 220 },
                        },
                      },
                    }}
                >
                  {Moughataa.filter((moughataa) => moughataa.state_id === selectedState).map((option) => (
                    <MenuItem
                      key={option.id} 
                      value={option.name} 
                      onClick={() =>setValue(`location.region.id`,option.id)}
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
              </Box>
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                }}
              >
              <RHFUploadAvatar
                  name="imgUrl"
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
                      Allowed *.jpeg, *.jpg, *.png, *.gif
                      <br /> max size of {fData(3145728)}
                    </Typography>
                  }
                />
              </Box>
            </Box>
          </Card>
          <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
          <Typography variant="h6" sx={{mb: 3 }}>
            Les informatios de responsable :
          </Typography>
        
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name={responsable.nom} label="Nom" onChange={(event)=>setValue(`responsable.nom`,event.target.value)} />
              <RHFTextField name={responsable.post} label="Poste de travail" onChange={(event)=>setValue(`responsable.post`,event.target.value)} />
              <RHFTextField name={responsable.email} label="Adresse E-mail" onChange={(event)=>setValue(`responsable.email`,event.target.value)} />
              <RHFTextField name={responsable.password} type="password" label="Mot de passe"  onChange={(event)=>setValue(`responsable.password`,event.target.value)}/>
              <RHFTextField name={responsable.telephone} label="Numéro du téléphone" type="number" onChange={(event)=>setValue(`responsable.telephone`,event.target.value)}/>
            </Box>
          </Card>
            <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
        </Grid>
      </Box>
  );
}
 