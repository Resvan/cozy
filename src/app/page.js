import Card from "./components/Card";
import Carousel from "./components/Carousel";
import DynamicTransition from "./components/DynamicTransition";
import Navbar from "./components/Navbar";
import ParalaxCards from "./components/ParalaxCards";

import Value from "./components/Value";

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicTransition />
      <div className="container flex justify-center items-center mx-auto mt-10">
        <Card />
      </div>
      <Value />
      <ParalaxCards />
      <Carousel/>
    </>
  );
}
