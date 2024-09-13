import { Button } from '@mui/material';
import React from 'react';

const style = { margin : 5 , backgroundColor:'#dc3332',borderRadius:'25px'} 

const Filter = ({ setFilter }) => {
  return (
    <div>
      <Button 
      style={style}
      onClick={() => setFilter('all')} 
      variant="contained">All
      </Button>

      <Button 
      sx={style} 
      onClick={() => setFilter('completed')} 
      variant="contained">Completed
      </Button>

      <Button 
      sx={style} 
      onClick={() => setFilter('active')} 
      variant="contained">Active
      </Button>
    </div>
  );
};

export default Filter;
