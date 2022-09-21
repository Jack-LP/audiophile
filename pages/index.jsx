import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Hero from '../components/common/home/Hero';
import CategorySection from '../components/common/home/CategorySection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <CategorySection />
    </div>
  );
}
