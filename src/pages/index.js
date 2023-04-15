import { Fragment } from "react";
import Hero from "@/components/HomePage/Hero";
import CardSection from "@/components/HomePage/CardSection";
import InfoSection from "@/components/HomePage/InfoSection";
import AdditionalInfo from "@/components/HomePage/AdditionalInfo";
import Footer from "@/components/Reusable/Footer";
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <CardSection />
      <InfoSection />
      <AdditionalInfo />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
