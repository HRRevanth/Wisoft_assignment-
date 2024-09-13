import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Button, Checkbox, Modal,Box, TextField, Typography } from '@mui/material';

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

const outerBox = {display:'flex', width:'100%'}
const innerBox = {display:'flex', alignItems:'center',width:'20%'}
const buttonStyle = {backgroundColor:'#dc3332', borderRadius:'25px', width:120}
const descStyle ={textAlign:'center', width:'60%', p:2}
const sideBox = {display:'flex', alignItems:'center', justifyContent:'space-around',  width:'20%'}
const popupStyle= {backgroundColor:'white',paddingTop:2,paddingRight:2,height:'100%', alignContent:'center'}
const closeStyle ={float:'right',bgcolor:'#dc3332',borderRadius: '25px'}
const PopupBoxStyle ={display:'grid',justifyContent:'center', alignContent:'center',paddingLeft:8, height:'100%'}




const Task = ({ task }) => {

  const { description, title} = task;

  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const { dispatch } = useContext(TaskContext);
  const [newTitle, setNewTitle] = useState(task.title);


  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { ...task, title: newTitle ,description: newDescription }
      });
    }
  };

  return (
    <>
    <Box>
    <li>
      <Box sx={outerBox}>
      <Box sx={innerBox}>
        <Checkbox 
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
        />
        <Typography variant="body1" fontSize={22}>{task.title}</Typography>
        </Box>
      <Box sx={descStyle} >
       <p><span>{task.description}</span></p>
       </Box>
       <Box sx={sideBox}>
      <Button 
      sx={buttonStyle} 
      onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}      variant="contained">Delete
      </Button>

      <Button 
      sx={buttonStyle} 
      onClick={()=> setOpen(true)}
      variant="contained">Edit
      </Button>
      </Box>
      </Box>
    </li>
    </Box>
<Modal open={open} style={style}>
<Box sx={popupStyle} >
  <Button variant="contained"  
  sx={closeStyle} 
  onClick={()=> setOpen(false)}>close</Button>
      <Box sx={PopupBoxStyle}>
      <TextField id="outlined-basic"  label="Task Title" variant="outlined" type="text" value={newTitle}
       onChange={(e) => setNewTitle(e.target.value)}
      />
      <TextField id="outlined-basic" label="Description" sx={{mt:5}} variant="outlined" type="text" value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
      />

<Button type="submit" variant="contained" color='primary' sx={{width:240,mt:3}} onClick={handleSave}>Update</Button>
      </Box>
      </Box>
     
</Modal>
</>
  );
};

export default Task;
