// src/components/SearchBar.jsx
import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    <TextField
      fullWidth
      placeholder="Search by skill..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <Button variant="contained">Search</Button>
  </div>
);

export default SearchBar;