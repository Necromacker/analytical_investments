import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmiCalculatorPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const EmiCalculatorPage = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [amount, setAmount] = useState(5000000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState('Yr');

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [schedule, setSchedule] = useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'Home') {
      setAmount(5000000);
      setInterest(8.5);
      setTenure(20);
      setTenureType('Yr');
    } else if (tab === 'Personal') {
      setAmount(500000);
      setInterest(12);
      setTenure(5);
      setTenureType('Yr');
    } else if (tab === 'Car') {
      setAmount(1000000);
      setInterest(9.5);
      setTenure(5);
      setTenureType('Yr');
    }
  };

  useEffect(() => {
    const P = amount;
    const R = interest / 12 / 100;
    const N = tenureType === 'Yr' ? tenure * 12 : tenure;

    if (P > 0 && R > 0 && N > 0) {
      const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPay = emiVal * N;
      const totalInt = totalPay - P;

      setEmi(Math.round(emiVal));
      setTotalPayment(Math.round(totalPay));
      setTotalInterest(Math.round(totalInt));

      // Calculate Yearly Schedule
      let currentBalance = P;
      let yearlySchedule = [];
      let currentYear = new Date().getFullYear();
      
      let yearPrincipal = 0;
      let yearInterest = 0;
      let totalPrincipalPaid = 0;

      for (let month = 1; month <= N; month++) {
        let interestForMonth = currentBalance * R;
        let principalForMonth = emiVal - interestForMonth;
        
        currentBalance -= principalForMonth;
        yearPrincipal += principalForMonth;
        yearInterest += interestForMonth;
        totalPrincipalPaid += principalForMonth;

        // Group by 12 months or if it's the last month
        if (month % 12 === 0 || month === N) {
          yearlySchedule.push({
            year: currentYear,
            principal: Math.round(yearPrincipal),
            interest: Math.round(yearInterest),
            totalPayment: Math.round(yearPrincipal + yearInterest),
            balance: Math.round(Math.max(0, currentBalance)),
            paidPercentage: ((totalPrincipalPaid / P) * 100).toFixed(2) + '%'
          });
          currentYear++;
          yearPrincipal = 0;
          yearInterest = 0;
        }
      }
      setSchedule(yearlySchedule);
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
      setSchedule([]);
    }
  }, [amount, interest, tenure, tenureType]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const interestRatio = (totalInterest / totalPayment) * 100 || 0;
  
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`EMI Schedule (${activeTab} Loan)`, 14, 15);
    
    doc.setFontSize(10);
    doc.text(`Loan Amount: ${formatCurrency(amount)}`, 14, 25);
    doc.text(`Interest Rate: ${interest}%`, 80, 25);
    doc.text(`Tenure: ${tenure} ${tenureType}`, 140, 25);
    doc.text(`Monthly EMI: ${formatCurrency(emi)}`, 14, 32);

    const tableColumn = ["Year", "Principal", "Interest", "Total Payment", "Balance", "Paid %"];
    const tableRows = [];

    schedule.forEach(row => {
      tableRows.push([
        row.year,
        formatCurrency(row.principal),
        formatCurrency(row.interest),
        formatCurrency(row.totalPayment),
        formatCurrency(row.balance),
        row.paidPercentage
      ]);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: 'striped',
      headStyles: { fillColor: [94, 23, 235] }
    });

    doc.save('EMI_Schedule.pdf');
  };

  const handleDownloadExcel = () => {
    const wsData = [
      ["EMI Schedule Summary"],
      [`Loan Type`, `${activeTab} Loan`],
      [`Loan Amount`, amount],
      [`Interest Rate`, `${interest}%`],
      [`Tenure`, `${tenure} ${tenureType}`],
      [`Monthly EMI`, emi],
      [],
      ["Year", "Principal", "Interest", "Total Payment", "Balance", "Paid %"]
    ];

    schedule.forEach(row => {
      wsData.push([row.year, row.principal, row.interest, row.totalPayment, row.balance, row.paidPercentage]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "EMI Schedule");

    XLSX.writeFile(wb, "EMI_Schedule.xlsx");
  };

  return (
    <div className="emi-calculator-page">
      <TopBar />
      <Navbar activePage="emi" />

      <header className="emi-hero">
        <div className="container">
          <h1 className="emi-hero-title">EMI CALCULATOR</h1>
          <p className="emi-quote">
            We turn intelligence into impactful loan strategies powering your financial success
          </p>
        </div>
      </header>

      <section className="calculator-section">
        <div className="container emi-main-layout">
          {/* Left Column: Calculator */}
          <div className="emi-calc-wrapper">
            
            <div className="emi-tabs">
              <button className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabChange('Home')}>Home Loan</button>
              <button className={activeTab === 'Personal' ? 'active' : ''} onClick={() => handleTabChange('Personal')}>Personal Loan</button>
              <button className={activeTab === 'Car' ? 'active' : ''} onClick={() => handleTabChange('Car')}>Car Loan</button>
            </div>

            <div className="emi-calc-body">
              {/* Sliders Area */}
              <div className="emi-sliders-area">
                
                {/* Amount Slider */}
                <div className="slider-group">
                  <div className="slider-header">
                    <label>{activeTab} Loan Amount</label>
                    <div className="input-box">
                      <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(Number(e.target.value))} 
                      />
                      <span className="addon">₹</span>
                    </div>
                  </div>
                  <div className="slider-wrapper">
                    <input 
                      type="range" className="styled-slider" 
                      min="100000" max="20000000" step="50000"
                      value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                      style={{ backgroundSize: `${(amount - 100000) * 100 / (20000000 - 100000)}% 100%` }}
                    />
                    <div className="slider-scale">
                      <span>0</span>
                      <span>50L</span>
                      <span>1Cr</span>
                      <span>1.5Cr</span>
                      <span>2Cr</span>
                    </div>
                  </div>
                </div>

                {/* Interest Slider */}
                <div className="slider-group">
                  <div className="slider-header">
                    <label>Interest Rate</label>
                    <div className="input-box">
                      <input 
                        type="number" value={interest} step="0.1"
                        onChange={(e) => setInterest(Number(e.target.value))} 
                      />
                      <span className="addon">%</span>
                    </div>
                  </div>
                  <div className="slider-wrapper">
                    <input 
                      type="range" className="styled-slider" 
                      min="1" max="20" step="0.1"
                      value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                      style={{ backgroundSize: `${(interest - 1) * 100 / (20 - 1)}% 100%` }}
                    />
                    <div className="slider-scale">
                      <span>5</span>
                      <span>10</span>
                      <span>15</span>
                      <span>20</span>
                    </div>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="slider-group">
                  <div className="slider-header">
                    <label>Loan Tenure</label>
                    <div className="input-box with-toggle">
                      <input 
                        type="number" value={tenure} 
                        onChange={(e) => setTenure(Number(e.target.value))} 
                      />
                      <div className="addon-toggle">
                        <button className={tenureType === 'Yr' ? 'active' : ''} onClick={() => setTenureType('Yr')}>Yr</button>
                        <button className={tenureType === 'Mo' ? 'active' : ''} onClick={() => setTenureType('Mo')}>Mo</button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-wrapper">
                    <input 
                      type="range" className="styled-slider" 
                      min="1" max={tenureType === 'Yr' ? 30 : 360} step="1"
                      value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                      style={{ backgroundSize: `${(tenure - 1) * 100 / ((tenureType === 'Yr' ? 30 : 360) - 1)}% 100%` }}
                    />
                    <div className="slider-scale">
                      <span>0</span>
                      <span>{tenureType === 'Yr' ? '10' : '120'}</span>
                      <span>{tenureType === 'Yr' ? '20' : '240'}</span>
                      <span>{tenureType === 'Yr' ? '30' : '360'}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Results Area */}
              <div className="emi-results-area">
                <div className="emi-values">
                  <div className="result-block">
                    <p>Loan EMI</p>
                    <h3>{formatCurrency(emi)}</h3>
                  </div>
                  <div className="result-separator"></div>
                  <div className="result-block">
                    <p>Total Interest Payable</p>
                    <h4>{formatCurrency(totalInterest)}</h4>
                  </div>
                  <div className="result-separator"></div>
                  <div className="result-block">
                    <p>Total Payment<br/>(Principal + Interest)</p>
                    <h4>{formatCurrency(totalPayment)}</h4>
                  </div>
                </div>

                <div className="emi-chart-box">
                  <p className="chart-title">Break-up of Total Payment</p>
                  <div className="pie-chart" style={{ background: `conic-gradient(#88b544 0% ${100 - interestRatio}%, #ed7f20 ${100 - interestRatio}% 100%)` }}>
                    {/* Solid CSS pie chart */}
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="dot green"></span> Principal Loan Amount
                    </div>
                    <div className="legend-item">
                      <span className="dot orange"></span> Total Interest
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>

        {/* Schedule & Chart Placeholder */}
        <div className="container emi-schedule-placeholder">
           <div className="schedule-header">
             <p>Schedule showing EMI payments starting from</p>
             <input type="month" defaultValue="2026-05" />
           </div>
           <div className="schedule-graph">
              <div className="mock-graph">
                 <div className="mock-bars">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="mock-bar-group">
                         <div className="mock-bar orange" style={{ height: `${100 - (i*4)}%` }}></div>
                         <div className="mock-bar green" style={{ height: `${i*4}%` }}></div>
                      </div>
                    ))}
                    <svg className="mock-curve" preserveAspectRatio="none">
                      <path d={`M 0,5% C 30%,5% 60%,20% 100%,100%`} />
                      {[...Array(20)].map((_, i) => (
                        <circle key={i} cx={`${(i / 19) * 100}%`} cy={`${5 + Math.pow(i / 19, 2.5) * 95}%`} r="4" />
                      ))}
                    </svg>
                 </div>
              </div>
              <div className="chart-legend centered">
                <div className="legend-item"><span className="dot green"></span> Principal</div>
                <div className="legend-item"><span className="dot orange"></span> Interest</div>
                <div className="legend-item"><span className="line red"></span> Balance</div>
              </div>
           </div>
        </div>

        {/* Table Schedule */}
        <div className="container emi-table-container">
          <table className="emi-table">
            <thead>
              <tr>
                <th className="th-year">Year</th>
                <th className="th-principal">Principal<br/>(A)</th>
                <th className="th-interest">Interest<br/>(B)</th>
                <th className="th-total">Total Payment<br/>(A + B)</th>
                <th className="th-balance">Balance</th>
                <th className="th-paid">Loan Paid<br/>To Date</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td className="td-year"><span>+</span> {row.year}</td>
                  <td>{formatCurrency(row.principal)}</td>
                  <td>{formatCurrency(row.interest)}</td>
                  <td>{formatCurrency(row.totalPayment)}</td>
                  <td>{formatCurrency(row.balance)}</td>
                  <td className="td-paid">{row.paidPercentage}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="emi-table-footer">
            <p>Want to download OR share a custom link to your EMI calculation (with all your numbers pre-filled)?</p>
            <div className="footer-actions">
              <button className="action-btn pdf" onClick={handleDownloadPDF}><i className="fas fa-file-pdf"></i> Download PDF</button>
              <button className="action-btn excel" onClick={handleDownloadExcel}><i className="fas fa-file-excel"></i> Download Excel</button>
              <button className="action-btn share" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}><i className="fas fa-link"></i> Share</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmiCalculatorPage;
