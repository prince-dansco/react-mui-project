import React from "react";
import Categoris from "./Categoris";
import Blog from "./Blog";
import Footer from "../component/Footer";
import HeroCont from "./heroCont";
import HeroDetail from "./hero1";
import HeroSpecification from "./heroSpecification";
import HeroMainDetail from "./heroMainDetail";
import ContactSection from "./contact";
import ContactDetail from "./contactDetail";

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });

const Home = () => {
  return (
    <main sx={{ scrollBehavior: "smooth", transition: "all 2s ease-in" }}>
      <section id="home">
        <HeroCont />
        <HeroDetail />
        <HeroSpecification />
        <HeroMainDetail />
      </section>

      <section id="categories">
        <Categoris />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <ContactSection />
        <ContactDetail />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
