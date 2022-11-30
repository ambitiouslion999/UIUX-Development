import React from 'react';
import './App.css';
import AnimeList from './components/AnimeList';
import { Box} from '@material-ui/core'
import Header from './components/Header';

function App() {

  return (

    <Box mt={2}>

    <Header/>
    <div className='row'> 
    
    <AnimeList/> 
    
    </div>


    </Box>
  );
  
}

export default App;
