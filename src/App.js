import React from 'react';
import Marquee from 'react-fast-marquee';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Typography variant="h4" align="center">randomphotocontest</Typography>
      </header>
      <div className="content">
        <div className="banner">
          <Marquee autoFill speed={100}>
            <Typography variant="h1"> Mac Wins! Mac Wins! </Typography>
          </Marquee>
          <Typography variant="body1" align="center">He dug a big hole</Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
