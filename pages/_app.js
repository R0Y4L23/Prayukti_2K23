import '../styles/globals.css'
import "../styles/animations.css"
import "../styles/transition.css"
import "../styles/cyberpunkButton.css"
import "../styles/eventCard.css"

import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'

import Head from 'next/head'

import TransitionEffect from '../components/transitionEffect'

function MyApp({ Component, pageProps }) {
  return (

<>
<Head>
<meta name="google-site-verification" content="NO75LCdR3fP9T_rJemeTDAjA8Ac4IFqRauRS6YejaFc" />
</Head>
  <TransitionEffect>
    <Component {...pageProps} />
    <ToastContainer

position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
theme="dark"
    
    />
  </TransitionEffect>
  </>
    
  )
}

export default MyApp
