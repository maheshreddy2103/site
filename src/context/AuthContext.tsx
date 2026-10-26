import React, { createContext, useContext, useState, useEffect } from 'react'

export interface User {
  id: string
  email: string
  role: string
  name: string
  customerId?: string
  membershipId?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, role?: string) => void
  signup: (userData: any) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {}
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('lakshmi_user')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        return null
      }
    }
    return null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('lakshmi_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('lakshmi_user')
    }
  }, [user])

  const login = (email: string, explicitRole?: string) => {
    let role = explicitRole || 'Customer'
    let name = 'Ananya Patel'

    if (email.toLowerCase().includes('ceo')) {
      role = 'CEO'
      name = 'Radhika Sharma'
    } else if (email.toLowerCase().includes('manager')) {
      role = 'Manager'
      name = 'Vikram Malhotra'
    } else if (email.toLowerCase().includes('sales')) {
      role = 'Sales Manager'
      name = 'Amit Kumar'
    } else if (email.toLowerCase().includes('finance')) {
      role = 'Finance Manager'
      name = 'Pooja Iyer'
    } else if (email.toLowerCase().includes('employee')) {
      role = 'Employee'
      name = 'Sanjay Verma'
    }

    const newUser: User = {
      id: `usr_${Date.now()}`,
      email,
      role,
      name,
      customerId: 'CUST-1001',
      membershipId: 'MEM-1001'
    }
    setUser(newUser)
  }

  const signup = (userData: any) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      email: userData.email,
      role: 'Customer',
      name: `${userData.firstName} ${userData.lastName}`.trim() || 'Valued Member',
      customerId: `CUST-${Date.now().toString().slice(-4)}`,
      membershipId: `MEM-${Date.now().toString().slice(-4)}`
    }
    setUser(newUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

