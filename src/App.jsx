import './App.css';
import { useState } from 'react';
import Search from "../src/components/search"
import AppTable from "../src/components/Table"
import { Box } from '@mui/material';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
 

  return (
    <>
     <Box>
      <Search onSearch={setSearchQuery} />
      <AppTable searchQuery={searchQuery} /> 
    </Box>
    </>
  )
}

export default App
