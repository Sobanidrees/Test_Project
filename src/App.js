import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { Backdrop } from "@mui/material";
import Main from './Components/Main/Main';
import { Route,Routes } from 'react-router';
import './App.css';
import Login from './Components/Login/Login';
function App() {
  const [loading, setloading] = useState(false);

  return (
    <div className="App">
       {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
<Routes>
        <Route path='/' element={<Login setloading={setloading}/>}></Route>
        <Route path='/dash-board' element={<Main setloading={setloading}/>}></Route>
</Routes>
    </div>
  );
}

export default App;
