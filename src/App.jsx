import "./App.css";
import Collection from "./components/collection/Collection";
import CustomerSec from "./components/CustomerSection/CustomerSec";
import DetailsSec from "./components/detailsSection/DetailsSec";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trend from "./components/Trand/Trend";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
      {/* <Trend /> */}
      <DetailsSec/>
      <CustomerSec/>
    </>
  );
}

export default App;
