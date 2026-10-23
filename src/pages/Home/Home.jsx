import Collection from "../../components/Collection/Collection";
import Hero from "../../components/Hero/Hero";
import DetailsSec from "../../components/detailsSection/DetailsSec";
import CustomerSec from "../../components/CustomerSection/CustomerSec"; // Check this folder name too (it's CustomerSection in your tree)
// import Trend from "../../components/Trend/Trend";

const Home = () => {
  return (
    <>
      
      <Hero/>
      <Collection />
      {/* <Trend /> */}
      <DetailsSec />
      <CustomerSec />
    </>
  );
};

export default Home;
