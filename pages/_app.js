import '../styles/globals.css'
import "../styles/animations.css"
import "../styles/transition.css"
import "../styles/cyberpunkButton.css"
import "../styles/eventCard.css"

import Head from 'next/head'

import TransitionEffect from '../components/transitionEffect'

function MyApp({ Component, pageProps }) {
  return (

<>
<Head>
   
</Head>
  <TransitionEffect>
    <Component {...pageProps} />
  </TransitionEffect>
  </>
    
  )
}

export default MyApp
