import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/HomePage'));
// import HomePage from './pages/HomePage';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement,
);
