import Head from 'next/head'
import Register from './auth/register'





export default function Home() {


  return (
    <div className=""> 
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className=''>
        <Register />
          
      </main>
  
    </div>
  )
}
