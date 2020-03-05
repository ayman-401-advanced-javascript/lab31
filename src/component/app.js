/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import ToDo from './todo.js';
import Header from './header.js';
import Footer from './footer.js';

function App (){

  return (
    <React.Fragment>
      <Header />
      <ToDo />
      <Footer />
    </React.Fragment>
  );
}
export default App;