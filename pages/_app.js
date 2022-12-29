import { Toaster } from 'react-hot-toast'
import Layout from '../components/Layout/Layout'
import AuthProvider from '../context/AuthProvider/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <><Layout>
    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
  </Layout>
  <Toaster></Toaster>
  </>
}
