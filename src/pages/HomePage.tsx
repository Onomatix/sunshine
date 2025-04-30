import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import WriteUp from "@/components/sections/WriteUp";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import ProductFeatures from "@/components/sections/ProductFeatures";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <WriteUp />
      <FeaturedProduct />
      <ProductFeatures />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default HomePage;
