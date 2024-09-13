import React from 'react';
import { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '600px',
  background: '#f9f9f9'        
};

const tasklistStyle ={ margin : 5 , 
  backgroundColor:'#dc3332',
  borderRadius:'25px'
}

const outerBox = {backgroundColor:'white',paddingTop:2,paddingRight:2 }
const closeButton = {float:'right',
  bgcolor:'#dc3332',
  borderRadius: '25px'
  }

const PopupButton = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true)
  };

  return (
    <>
      <Button 
      sx={tasklistStyle} 
      variant="contained"
      className="popup-button" onClick={handleClick}>
      Tasklist Pop Up
      </Button>
    <Modal open={open} style={style}>
      <Box sx={outerBox}>
        <Button variant="contained"  
        sx={closeButton} onClick={()=> setOpen(false)}>close</Button>
            <TaskForm />
            </Box>
    </Modal>
    </>
  );
};

export default PopupButton;
