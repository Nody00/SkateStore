import { Fragment } from "react";
import Hero from "@/components/HomePage/Hero";
import CardSection from "@/components/HomePage/CardSection";
import InfoSection from "@/components/HomePage/InfoSection";
import AdditionalInfo from "@/components/HomePage/AdditionalInfo";
import Footer from "@/components/Reusable/Footer";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Skate,browse and enjoy</title>
        <meta
          name="description"
          content="Browse a huge selection of quality skating goods,including boards,trunks,wheels and clothing"
        />
      </Head>
      <Hero />
      <CardSection />
      <InfoSection />
      <AdditionalInfo />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
