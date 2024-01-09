// import * as Yup from 'yup';
// import { useCallback, useEffect, useMemo ,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// // form
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// // @mui
// import { LoadingButton } from '@mui/lab';
// import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
// // utils
// import { fData } from '../../../utils/formatNumber';
// // routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
// // @types
// import { CampagneVaccination} from '../../../@types/CampagneDeVaccination';
// // assets
// import {Type_de_vaccination,Vaccin,Willaya,Moughataa} from '../../../assets/data';
// // components
// import Label from '../../../components/label';
// import { CustomFile } from '../../../components/upload';
// import { useSnackbar } from '../../../components/snackbar';
// import FormProvider, {
//   RHFEditor,
//   RHFSelect,
//   RHFTextField,
// } from '../../../components/hook-form';


// // ----------------------------------------------------------------------

// interface FormValuesProps extends Omit<CampagneVaccination, 'avatarUrl'> {
//   avatarUrl: CustomFile | string | null;
// }

// type Props = {
//   isEdit?: boolean;
//   campagneVaccination?: CampagneVaccination;
// };


// export default function CampagneNewEditForm({ isEdit = false, campagneVaccination }: Props) {
//   const navigate = useNavigate();

//   const { enqueueSnackbar } = useSnackbar();
//   const [campagnes, setCampagnes] = useState<CampagneVaccination[]>([]);
//   const [nameCampain,setNameCampain] = useState('Nom de Campagne');
 
  

//   const NewCampagneSchema = Yup.object().shape({
//     nomCampagne: Yup.string().required('nomCampagne is required'),
//     typeVaccin: Yup.string().required('typeVaccin is required'),
//     vaccin: Yup.string().required('vaccin is required'),
//     wilaya: Yup.string().required('wilaya is required'),
//     moughataa: Yup.string().required('moughataa is required'),
//     populaireCible: Yup.string().required('populaireCible is required'),
//     AffecterQuantite: Yup.string().required('AffecterQuantite is required'),
//     description: Yup.string().required('Description is required'),
//   });

//   const defaultValues = useMemo(
//     () => ({
//       idCampagne:'f',
//       nomCampagne: campagneVaccination?.nomCampagne || '',
//       typeVaccin: campagneVaccination?.typeVaccin || '',
//       vaccin: campagneVaccination?.vaccin || '',
//       wilaya: campagneVaccination?.wilaya || '',
//       moughataa: campagneVaccination?.moughataa || '',
//       populaireCible: campagneVaccination?.populaireCible || 0,
//       AffecterQuantite: campagneVaccination?.AffecterQuantite || 0,
     
//     }),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [campagneVaccination]
//   );
 


//   const methods = useForm<FormValuesProps>({
//     resolver: yupResolver(NewCampagneSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     watch,
//     control,
//     setValue,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;

//   const values = watch();


//   useEffect(() => {
//       console.log('campagnes ', campagnes);
//    }, [campagnes]);


//   useEffect(() => {
//     if (isEdit && campagneVaccination) {
//       reset(defaultValues);
//     }
//     if (!isEdit) {
//       reset(defaultValues);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isEdit, campagneVaccination]);

//   const onSubmit = async (data: FormValuesProps) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       reset();
//       enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
//       console.log('DATA', data);
//       setNameCampain(data.nomCampagne);
//       setCampagnes([...campagnes, data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       const file = acceptedFiles[0];

//       const newFile = Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       });

//       if (file) {
//         setValue('avatarUrl', newFile, { shouldValidate: true });
//       }
//     },
//     [setValue]
//   );

//   return (
//     <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={15}>
//           <Card sx={{ p: 3 }}>
//             <Box
//               rowGap={3}
//               columnGap={2}
//               display="grid"
//               gridTemplateColumns={{
//                 xs: 'repeat(1, 1fr)',
//                 sm: 'repeat(2, 1fr)',
//               }}
//             >
//               <RHFTextField name="nomCampagne" label="Nom de Campagne" />
             
//               <RHFSelect native name="typeVaccin" label="Type de vaccination" placeholder="Type de vaccination">
//                 <option value="" />
//                 {Type_de_vaccination.map((type) => (
//                   <option key={type.code} value={type.label}>
//                     {type.label}
//                   </option>
//                 ))}
//               </RHFSelect>
//               <RHFSelect native name="vaccin" label="Vaccin" placeholder="Vaccin">
//                 <option value="" />
//                 {Vaccin.map((vaccin) => (
//                   <option key={vaccin.code} value={vaccin.label}>
//                     {vaccin.code}
//                   </option>
//                 ))}
//               </RHFSelect>
//                <Stack spacing={1}>
//                 <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
//                   Description
//                 </Typography>

//                 <RHFEditor simple name="description" />
//               </Stack>
              
//                <RHFSelect native name="wilaya" label="Willaya" placeholder="Willaya">
//                     <option value="" />
//                     {Willaya.map((willaya) => (
//                       <option key={willaya.code} value={willaya.label}>
//                         {willaya.label}
//                       </option>
//                     ))}
//                   </RHFSelect>
//                   <RHFSelect native name="moughataa" label="Moughataa" placeholder="Moughataa">
//                     <option value="" />
//                     {Moughataa.map((moughataa) => (
//                       <option key={moughataa.code} value={moughataa.label}>
//                         {moughataa.label}
//                       </option>
//                     ))}
//                   </RHFSelect>

//                   <RHFTextField name="populaireCible" label="Populaire cible" type='number'/>
//                   <RHFTextField name="AffecterQuantite" label="Affecter un quantité" type='number'/>

//               {/* {campagnesVaccination.Lieu.map((lieu, index) => (
//                 <div key={index}>
//                   <RHFSelect native name="wilaya" label="Willaya" placeholder="Willaya">
//                     <option value="" />
//                     {Willaya.map((willaya) => (
//                       <option key={willaya.code} value={willaya.label}>
//                         {willaya.label}
//                       </option>
//                     ))}
//                   </RHFSelect>
//                   <RHFSelect native name="moughataa" label="Moughataa" placeholder="Moughataa">
//                     <option value="" />
//                     {Moughataa.map((moughataa) => (
//                       <option key={moughataa.code} value={moughataa.label}>
//                         {moughataa.label}
//                       </option>
//                     ))}
//                   </RHFSelect>

//                   <RHFTextField name="populaireCible" label="Populaire cible" type='number'/>
//                   <RHFTextField name="AffecterQuantite" label="Affecter un quantité" type='number'/>
//                 </div>
//               ))
//               } */}



//             </Box>
//             <Stack alignItems="flex-start" sx={{ mt: 3}}>
//               <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
//                +
//               </LoadingButton>
//             </Stack>

//             <Stack alignItems="flex-end" sx={{ mt: 3 }}>
//               <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
//                 {!isEdit ? 'Ajouter compagnes' : 'Modifier compagne'}
//               </LoadingButton>
//             </Stack>
//           </Card>
//         </Grid>
//       </Grid>
//     </FormProvider>
//   );
// }
export function a (){}
