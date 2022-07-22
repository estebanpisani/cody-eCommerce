import * as React from 'react';
import '../styles/Events.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function NoEvents() {


  return (
<>
<Card sx={{ minWidth: '50vw', maxWidth: '50vw', marginY:'0.5rem', bgcolor:'#eeeeee' }}>

<CardContent>
    <Typography variant="body2" color="text.secondary">
    <div className='div-text-NOevents'>
    No hay eventos disponibles aun!
    </div>
  </Typography>
  </CardContent>

</Card>


</>    
   
  )

};