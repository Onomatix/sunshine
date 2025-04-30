import Layout from "@/components/Layout";
import BioSection from "@/components/sections/story/BioSection";
import ServicesSection from "@/components/sections/story/ServicesSection";
import GallerySection from "@/components/sections/story/GallerySection";
import VideoSection from "@/components/sections/story/VideoSection";
import MagicBraBanner from "@/components/sections/story/MagicBraBanner";
import ContactForm from "@/components/sections/story/ContactForm";

const StoryPage = () => {
  return (
    <Layout>
      <BioSection />
      <ServicesSection />
      <GallerySection />
      <VideoSection />
      <MagicBraBanner />
      <ContactForm />
    </Layout>
  );
};

export default StoryPage;
