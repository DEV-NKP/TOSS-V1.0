import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
