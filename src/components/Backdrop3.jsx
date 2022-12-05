import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import B3Inside from './B3Inside.jsx'; 
import Button from '@mui/material/Button';

export default function SimpleBackdrop3() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="simpleB3">
      <Button onClick={handleToggle}>
        
        <img src = "./public/McDonell_Douglas.jpg"/>
      
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
       
        <B3Inside/>
      </Backdrop>
    </div>
  );
}