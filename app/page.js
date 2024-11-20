import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Sales from "@/components/Sales";
import ProductGrid from "@/components/ProductGrid";
import ProductGrid2 from "@/components/ProductGrid2";
import InquirySection from "@/components/InquirySection";
import Recommended from "@/components/Recommended";
import ServicesAndSuppliers from "@/components/ServicesAndSuppliers";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <Sales />
      <ProductGrid />
      <ProductGrid2 />
      <InquirySection />
      <Recommended />
      <ServicesAndSuppliers />
      <Footer />
    </div>
  );
}
