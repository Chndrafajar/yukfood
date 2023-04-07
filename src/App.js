import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import DetailPages from 'pages/DetailPages';
import Checkout from 'pages/Checkout';
// import NotFound from 'pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/detail/:id" component={DetailPages} />
        <Route path="/checkout" component={Checkout} />
        {/* <Route path="*" component={NotFound} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
