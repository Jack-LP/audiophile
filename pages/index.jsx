import Head from 'next/head';
import Hero from '../components/home/Hero';
import CategorySection from '../components/Common/CategorySection/CategorySection';
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection';
import AboutSection from '../components/Common/AboutSection';
import productData from '../data.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero productData={productData} />
      <div className='flex flex-col gap-[14rem] py-[14rem]'>
        <CategorySection />
        <FeaturedSection productData={productData} />
        <AboutSection />
      </div>
    </div>
  );
}
