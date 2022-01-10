import { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.scss'
import '../styles/theme.scss'

function MyApp({ Component, pageProps }) {

  const determineUserPreference = () => {
    if(localStorage.schachteTheme) {
      return localStorage.schachteTheme
    }

    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
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
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
