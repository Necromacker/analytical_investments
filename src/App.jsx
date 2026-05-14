import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import InsurancePage from './InsurancePage'
import InsuranceDetail from './InsuranceDetail'
import MutualFundsPage from './MutualFundsPage'
import ServicesPage from './ServicesPage'
import WithoutCollateralPage from './WithoutCollateralPage'
import WithCollateralPage from './WithCollateralPage'
import EmiCalculatorPage from './EmiCalculatorPage'
import BlogPage from './BlogPage'
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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/without-collateral" element={<WithoutCollateralPage />} />
        <Route path="/with-collateral" element={<WithCollateralPage />} />
        <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  )
}

export default App
