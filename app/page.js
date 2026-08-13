import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProcessSteps from "@/components/ProcessSteps";
import ServicesGrid from "@/components/ServicesGrid";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProcessSteps />
      <ServicesGrid />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
