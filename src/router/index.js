import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Insurance from '../views/Insurance';

const Routes = () => {
  return (
    <Switch>
      <Route exact="true" path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/insurance/:id" element={<Insurance />} />
    </Switch>
  );
};

export default Routes;
