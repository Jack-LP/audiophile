import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/common/Navbar';
import Hero from '../components/common/home/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}
