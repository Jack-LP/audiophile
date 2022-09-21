import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import CategorySection from '../components/Home/CategorySection/CategorySection';
import FeaturedSection from '../components/home/FeaturedSection/FeaturedSection';

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
      <FeaturedSection />
    </div>
  );
}
