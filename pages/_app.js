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
   
</Head>
  <TransitionEffect>
    <Component {...pageProps} />
    <ToastContainer

position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
    
    />
  </TransitionEffect>
  </>
    
  )
}

export default MyApp
