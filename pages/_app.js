import { Toaster } from 'react-hot-toast'
import Layout from '../components/Layout/Layout'
import AuthProvider from '../context/AuthProvider/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <AuthProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  
  <Toaster></Toaster>
  </>
}
