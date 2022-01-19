import { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.scss'
import '../styles/theme.scss'

import '../styles/prism.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { ThemeContextProvider } from "../context/ThemeContext";
import './fontAwesome.js'

function MyApp({ Component, pageProps }) {

  const determineUserPreference = () => {
    if(localStorage.schachteTheme) {
      return localStorage.schachteTheme
    }

    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem("schachteTheme", "dark")
        return 'dark';
      } else {
        localStorage.setItem("schachteTheme", "light")
        return 'light';
      }
    }
    localStorage.setItem("schachteTheme", "light")
    return 'light';
  }

  useEffect(() => {
    const userPref = determineUserPreference()
    let app = document.getElementsByTagName('BODY')[0]
    app.setAttribute('data-theme', userPref)
    let bodySelector = document.querySelector('body').classList
    bodySelector.remove('preload')
  })

  return (

    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
