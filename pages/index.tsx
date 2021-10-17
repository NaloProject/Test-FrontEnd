import type { NextPage } from 'next'
import Head from 'next/head'
import StyledIndex from './StyledIndex';
import AppContainer from "../components/appContainer/AppContainer";


const Home: NextPage = () => {
  return (
    <StyledIndex>
      <div className="back" />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer />
    </StyledIndex>
  )
}

export default Home