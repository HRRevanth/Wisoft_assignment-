import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Box, TextField, Typography } from '@mui/material';
import {Input, Button} from '@mui/material';

const outerBox ={
  height:'100%',
  width:'100%', 
  display:"grid",
  padding:4,
  background:'white',
  justifyContent:'center', 
  alignContent:'center' 
}
const addTask ={fontSize:35, textAlign:'center',fontWeight:'bold'}
const addTaskStyle = {width:240,mt:3}


const styleIn ={
  height:60,
}


const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTitle('');
    setDescription('');
  };

  return (
    <>
   <Box sx={outerBox} 
   component="form" 
   onSubmit={handleSubmit}>
     <Typography variant="h3" sx={addTask}> Add Task</Typography>
      <TextField id="outlined-basic" sx={{mt:5}} label="Task Title" variant="outlined" type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required/>

<TextField id="outlined-basic" sx={{mt:3}} multiline label="Task description" variant="outlined" type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required/>
<Button type="submit" variant="contained" color='primary' sx={addTaskStyle}>Add Task</Button>
   </Box>
   </>
  );
};

export default TaskForm;
