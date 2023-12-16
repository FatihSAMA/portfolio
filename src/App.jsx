import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MobileWorks from "./components/MobileWorks";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

import { useMediaQuery } from 'react-responsive'


export default function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {
        isTabletOrMobile ? (
          <Works />
        ) : (
          <MobileWorks />
        )
      }
      <Contact />
    </>
  );
}
