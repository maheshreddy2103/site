import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Public Pages
import Home from './pages/Home'
import Plans from './pages/Plans'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import Offers from './pages/Offers'
import Partners from './pages/Partners'
import Reward from './pages/Reward'
import Orders from './pages/Orders'
import BuyNowCalculator from './components/BuyNowCalculator'

// Customer Pages
import CustomerDashboard from './pages/CustomerDashboard'
import CustomerMembership from './pages/CustomerMembership'
import CustomerPayments from './pages/CustomerPayments'
import CustomerRewards from './pages/CustomerRewards'
import CustomerWallet from './pages/CustomerWallet'

// Employee & Management Pages
import AdminDashboard from './pages/AdminDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import SalesDashboard from './pages/SalesDashboard'
import FinanceDashboard from './pages/FinanceDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import EmployeeLeads from './pages/EmployeeLeads'
import EmployeeSignup from './pages/EmployeeSignup'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/calculator" element={<div className="min-h-screen bg-slate-50 py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"><BuyNowCalculator /></div>} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/login" element={<Login defaultMode="admin" />} />
              <Route path="/admin" element={<Login defaultMode="admin" />} />
              <Route path="/manager/login" element={<Login defaultMode="admin" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/support" element={<Support />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/orders" element={<Orders />} />

              {/* Customer Routes */}
              <Route path="/customer/dashboard" element={<CustomerDashboard />} />
              <Route path="/customer/membership" element={<CustomerMembership />} />
              <Route path="/customer/payments" element={<CustomerPayments />} />
              <Route path="/customer/rewards" element={<CustomerRewards />} />
              <Route path="/customer/wallet" element={<CustomerWallet />} />

              {/* Admin & Management Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/manager/dashboard" element={<ManagerDashboard />} />
              <Route path="/sales/dashboard" element={<SalesDashboard />} />
              <Route path="/finance/dashboard" element={<FinanceDashboard />} />
              <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
              <Route path="/employee/leads" element={<EmployeeLeads />} />
              <Route path="/employee/signup" element={<EmployeeSignup />} />

              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  </ThemeProvider>
)
}

