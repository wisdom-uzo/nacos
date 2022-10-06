import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import { CookiesProvider } from "react-cookie";


function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
  
  
}

export default MyApp
