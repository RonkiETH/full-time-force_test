import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Commits from './components/Commits'
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Header />
        <div className="flex-grow">
          <Commits />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App