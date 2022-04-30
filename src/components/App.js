import React from 'react';
import {
  BroswerRouter,
  Route,
  BrowserRouter
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers.js';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <About title='About' />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;