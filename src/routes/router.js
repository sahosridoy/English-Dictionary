import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PublicLayout from '../layouts/PublicLayout';
import About from '../pages/About';
import AZ from '../pages/AZ';
import AZSingle from '../pages/AZSingle';
import Category from '../pages/Category';
import Verb from '../pages/Verb';

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="az" element={<AZ />} />
        <Route path="az/:id" element={<AZSingle />} />
        <Route path="category" element={<Category />} />
        <Route path="verb" element={<Verb />} />
      </Route>
    </Routes>
  );
}
