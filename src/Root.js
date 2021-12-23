import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './common/store';

import { WelcomePage } from './features/home';
import { ProjectsPage, ProjectPage } from './features/dashboard';
import { DesignerPage } from './features/editor';
import { PageNotFound } from './features/common';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/designer">designer</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/designer" element={<DesignerPage/>} />
          <Route path="/project/:id" element={<ProjectPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
