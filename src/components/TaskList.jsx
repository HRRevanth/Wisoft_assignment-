import React, { useContext, useEffect, useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import Filter from './Filter';
import { TaskContext } from '../context/TaskContext';
import { Box, Typography } from '@mui/material';

const outerBox = { p: 2 }
const innerBox = {width:'100%', height:'auto'}
const titleStyle = {width:'20%', textAlign:'center', fontSize:28,color:'white'}
const descStyle = {width:'60%', textAlign:'center', fontSize:28,color:'white'}
const editStyle = {width:'20%', textAlign:'center', fontSize:28,color:'white'}



const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/data/tasks.json');
      const data = await response.json();
      data.forEach(task => dispatch({ type: 'ADD_TASK', payload: task }));
    };
    fetchTasks();
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <Box component="section" sx={outerBox}>
    <div>
      <Filter setFilter={setFilter} />
      <Box sx={innerBox}>
<Box sx={{display:'flex', width:'100%', backgroundColor:'black',p:'5px 0 2px 0'}}>
  <Typography variant="h4" sx={titleStyle}>Title</Typography>
  <Typography variant="h4" sx={descStyle}>Description</Typography>
  <Typography variant="h4" sx={editStyle}>Edit/Delete</Typography>
</Box>
      <ul>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
      </Box>
    </div>
        </Box>
  );
};

export default TaskList;
