import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('savenbuy_theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch (e) {
      // ignore
    }
    return 'light' // Default is clean whitish theme as requested
  })

  useEffect(() => {
    try {
      localStorage.setItem('savenbuy_theme', theme)
    } catch (e) {}

    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      document.body.style.backgroundColor = '#0B0F19'
      document.body.style.color = '#F8FAFC'
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      document.body.style.backgroundColor = '#F8FAFC'
      document.body.style.color = '#0F172A'
    }
  }, [theme])

  function toggleTheme() {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function setTheme(t: Theme) {
    setThemeState(t)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
