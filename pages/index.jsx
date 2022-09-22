import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import CategorySection from '../components/Home/CategorySection/CategorySection';
import FeaturedSection from '../components/home/FeaturedSection/FeaturedSection';
import AboutSection from '../components/Home/AboutSection';
import Footer from '../components/Common/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <AboutSection />
    </div>
  );
}
