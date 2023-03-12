import '../styles/globals.css'
import "../styles/animations.css"
import "../styles/transition.css"
import "../styles/cyberpunkButton.css"

import TransitionEffect from '../components/transitionEffect'

function MyApp({ Component, pageProps }) {
  return <TransitionEffect><Component {...pageProps} /></TransitionEffect>
}

export default MyApp
