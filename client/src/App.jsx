import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Commits from './components/Commits'
import './index.css'
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Commits />
    </BrowserRouter>
  )
}

export default App