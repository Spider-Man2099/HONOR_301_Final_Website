import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import B2Inside from './B2Inside.jsx'; 
import Button from '@mui/material/Button';

export default function SimpleBackdrop2() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="simpleB2">
      <Button onClick={handleToggle}>
        
        <img src = "./public/lifelion-blog.jpg"/>
      
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
       
        <B2Inside/>
      </Backdrop>
    </div>
  );
}