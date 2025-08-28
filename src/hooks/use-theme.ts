import { useState, useEffect } from "react"

export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [isNavbarOverLight, setIsNavbarOverLight] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Detecta quando a navbar está sobre seções claras (após a seção hero)
      setIsNavbarOverLight(scrollY > 100)
    }

    setIsDark(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    window.addEventListener("scroll", handleScroll)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { 
    isDark, 
    isLight: !isDark,
    isNavbarOverLight,
    shouldUseDarkLogo: isDark || isNavbarOverLight
  }
}
