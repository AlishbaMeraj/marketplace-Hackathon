import { Metadata } from 'next'
import { Brands } from "@/components/home/Brands";
import BrowseStyles from "@/components/home/browser-styles";
import { Hero } from "@/components/home/Hero";
import NewArrivals from "@/components/home/new-arrivals";
import Testimonials from "@/components/home/testimonials";
import TopSelling from "@/components/home/top-selling";
import { client } from '@/sanity/lib/client';
import { productQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'SHOP.CO | Find Clothes That Match Your Style',
  description: 'Discover a diverse range of meticulously crafted garments at SHOP.CO. Browse through our collection of international brands and high-quality products designed to bring out your individuality.',
  keywords: 'clothing, fashion, style, e-commerce, online shopping, international brands, shop.co, shop co, hassanrj',
  authors: [{ name: 'Hassan Rajput' }],
  openGraph: {
    title: 'SHOP.CO | Find Clothes That Match Your Style',
    description: 'Discover a diverse range of meticulously crafted garments at SHOP.CO. Browse through our collection of international brands and high-quality products.',
    images: ['/images/hero1.jpeg'],
    type: 'website',
    siteName: 'SHOP.CO',
  },
}

export default async function Home() {
  // Manually pass a slug to tes

  return (
    <>
      <div>
        <Hero />
        <Brands />
        <NewArrivals />
        <hr />
        <TopSelling />
        <BrowseStyles />
        <Testimonials />
      </div>
    </>
  );
}

