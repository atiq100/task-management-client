import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/Home/Home/Home'




export default function Home() {
  return (
    <>
      <Head>
        <title>Task manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
     <main>
      <div>
        <Hero></Hero>
      </div>
     </main>
    </>
  )
}
