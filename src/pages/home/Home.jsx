import Header from "./comb/Header";
import Banner from "./comb/Banner";
import Nav from "./comb/Nav";
import About from "./comb/About";
import Services from "./comb/Services";
import Work from "./comb/Work";
import Contact from "./comb/Contact";

function Home() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}
export default Home;
