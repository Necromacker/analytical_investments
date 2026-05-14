import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import InsurancePage from './InsurancePage'
import InsuranceDetail from './InsuranceDetail'
import MutualFundsPage from './MutualFundsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/insurance/:type" element={<InsuranceDetail />} />
        <Route path="/mutual-funds" element={<MutualFundsPage />} />
      </Routes>
    </Router>
  )
}

export default App
