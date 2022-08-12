import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Insurance from '../views/Insurance';
import Terms from '../views/Terms';

const Routes = () => {
  return (
    <Switch>
      <Route exact="true" path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/insurance/:type" element={<Insurance />} />
    </Switch>
  );
};

export default Routes;
