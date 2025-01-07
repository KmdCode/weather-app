import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'left', p: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Search City"
        sx={{ width: '100%', maxWidth: 400 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;