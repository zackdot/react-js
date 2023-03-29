
import  React from 'react';
import './App.css';
import Header from './component/Header/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Watchlist from './component/Watchlist';
import Watched from './component/Watched'
import Add from './component/Add/Add';
import ContextProvider from './component/context/GlobalContext';



function App() {
  
    return (
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Watchlist/>}/>
            <Route path='/watched' element={<Watched/>}/>
            <Route path='/add' element={<Add/>}/>
          </Routes>
          </ContextProvider>
      </Router>

      

  );
}

export default App;
