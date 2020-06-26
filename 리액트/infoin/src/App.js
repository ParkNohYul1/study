import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
import Protfolio from './pages/Protfolio';
import QnA from './pages/QnA';
import Work from './pages/Work';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="containerBox">
      <Route component={MainPage} path="/" exact />
      <Route component={AboutUs} path="/aboutUs" />
      <Route component={Work} path="/work" />
      <Route component={Protfolio} path="/protfolio" />
      <Route component={QnA} path="/qna" />
      <Route component={Content} path="/content" />
    </div>
  );
}

export default App;
