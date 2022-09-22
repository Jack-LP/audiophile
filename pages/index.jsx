import Head from 'next/head';
import Hero from '../components/home/Hero';
import CategorySection from '../components/Common/CategorySection/CategorySection';
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection';
import AboutSection from '../components/Common/AboutSection';

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
