import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import B4Inside from './B4Inside.jsx'; 
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
    <div className="simpleB4">
      <Button onClick={handleToggle}>
        
        <img src = "./public/Bell_212.jpg"/>
      
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
       
        <B4Inside/>
      </Backdrop>
    </div>
  );
}