// src/components/Pagination/Pagination.jsx
import React from 'react';
import { Box, Button } from '@mui/material';

const Pagination = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      {[1, 2, 3, 4, 5, 6, 7].map(page => (
        <Button 
          key={page} 
          sx={{ mx: 0.5, minWidth: '32px' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;