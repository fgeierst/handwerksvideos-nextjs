import Head from 'next/head'
import Nav from '../components/nav'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>
      <main >
        <h1 >
          Welcome!
        </h1>

        <p >
          Get started now.
        </p>

      </main>

      <footer >

      </footer>
    </div>
  )
}
