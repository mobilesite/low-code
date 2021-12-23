import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import App from './App';
import Projects from './Projects';
import Editor from './Editor';
import Project from './Project';

function Root() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/editor">Editor</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/editor" element={<Editor/>} />
        <Route path="/project/:id" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
