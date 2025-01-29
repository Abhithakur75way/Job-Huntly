import React from "react";
import Navbar from "../../components/Navbar"; // Adjust the import path if necessary
import Banner from "../../components/Banner"; // Adjust the import path if necessary
import PartnerSection from "../../components/PartnersSection";
import ExploreByCategory from "../../components/ExploreByCategory";
import FeaturedJobs from "../../components/FeaturedJobs";
import CTASection from "../../components/CtaSection";
import LatestJobsOpen from "../../components/LatestJobs";
import Footer from "../../components/Footer";
const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />
      <PartnerSection />
      <ExploreByCategory />
      <CTASection />
      <FeaturedJobs />
      <LatestJobsOpen />
      <Footer />
    </div>
  );
};

export default LandingPage;
