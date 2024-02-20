import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Auth from './pages/Auth';
import LayoutNoHeader from './layouts/LayoutNoHeader';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Main />} />} />
        <Route path="/favorite" element={<Layout children={<Favorites />} />} />
        <Route path="/auth" element={<LayoutNoHeader children={<Auth />} />} />
        <Route path="/offer">
          <Route path=":id" element={<Layout children={<Offer />} />} />
        </Route>
        <Route path="*" element={<Layout children={<Error />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
