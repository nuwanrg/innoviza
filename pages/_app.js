import 'styles/tailwind.scss'
import 'styles/global.scss'
import { AuthProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>
  )
}

export default MyApp
