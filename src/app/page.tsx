import Image from "next/image";
import Hero from "./components/hero";
import Service from "./components/service";
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";

export default function Home() {
  return (
    <div>
      <Hero />

      <Work />

      <Service />

      <About />

      <Contact />
    </div>
  );
}
