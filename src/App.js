import BillingSystem from './components/Screen01/BillingSystem';
import BillingSystem02 from './components/Screen02/BillingSystem02';
import './App.css';
import 'antd/dist/antd.css';
import './components/Css.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux/es/exports';
import store from './Redux/store';

function App() {
  return (
    
    <Provider store={store}>
      <div className="App">


        <Routes>
          <Route path = '/' element={<BillingSystem/>}/>
          <Route path = '/bill' element={<BillingSystem02/>}/>
        </Routes>


      </div>
    </Provider>
  );
}

export default App;
