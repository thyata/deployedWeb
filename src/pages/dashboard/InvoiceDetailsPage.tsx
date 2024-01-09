import { Helmet } from 'react-helmet-async';
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from "react";
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _invoices } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections

import { IInvoice } from '../../@types/vaccine';

// ----------------------------------------------------------------------

export default function InvoiceDetailsPage() {
  const { themeStretch } = useSettingsContext();

  const { id } = useParams();
  const { state } = useLocation();
  console.table(state)


  const [loading,setLoading] = useState(true);
  
 //  console.log(id,name);
  
  const requestAPI = async () => {
    setLoading(true);
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            headers: {},
            params: {}
        });
        setLoading(false)
        setData(res.data);
        console.table(res.data)
    } catch (err) {
        setLoading(false)
        console.log(err);
    }
};
useEffect(() => {
   requestAPI()
}, []);
  const [data, setData] = useState<IInvoice[]>([]);

  const currentInvoice = data.find((row) => row.id === id);
  const handleClick = () => {
    console.log('click')
    return <> 
    <h1>helloooooooo</h1>
     </>
  };
  const [edit,setEdit] = useState(false)
  return (
   
 <>
      <Helmet>
        <title> Invoice: View | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Invoice Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Invoices',
              href: PATH_DASHBOARD.vaccine.root,
            },
            { name: `INV-${currentInvoice?.id}` },
          ]}
        />
            
{/*         <InvoiceDetails invoice={currentInvoice} />
 */}     
    {/* {edit ?(
          


          <Grid container>

            <Grid item xs={12} md={9} sx={{ py: 3 }}>    <Button
              variant="contained"
              color="warning" onClick={handleClick}>
              save
            </Button>
            <Typography variant="subtitle2">Email</Typography>

              <TextField id="standard-basic" defaultValue={state.email} variant="standard" />

              <Divider sx={{ mt: 5 }} />
              <TextField id="standard-basic" label='Name' defaultValue={state.name} variant="standard" 
              onChange={(event)=>{
          prompt('changed',event.target.value)
          
        }}/>
              <Divider sx={{ mt: 5 }} />

              <TextField id="standard-basic" label='Body' defaultValue={state.body} variant="standard" />
              <Divider sx={{ mt: 5 }} />


            </Grid>


          </Grid>
    ):(
            <Grid container>

              <Grid item xs={12} md={9} sx={{ py: 3 }}>    <Button
                variant="contained"
                color="warning" onClick={() => setEdit(true)}>
                Edit
              </Button>
                <Typography variant="subtitle2">{id}</Typography>
                <Divider sx={{ mt: 5 }} />
                <Typography variant="subtitle2"> {state.email}  </Typography>

                <Divider sx={{ mt: 5 }} />

                <Typography variant="subtitle2"> {state.name} </Typography>
                <Divider sx={{ mt: 5 }} />


                <Typography variant="body2"> {state.body} </Typography>
                <Divider sx={{ mt: 5 }} />


              </Grid>


            </Grid>

    )} */}

  </Container>
    </> 
  );
}
