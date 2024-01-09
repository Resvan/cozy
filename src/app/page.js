import AnimatedText from "./components/AnimatedText";
import Card from "./components/Card";
import DynamicTransition from "./components/DynamicTransition";
import Navbar from "./components/Navbar";
import Value from "./components/Value";

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicTransition />
      <div className="container flex justify-center items-center mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Value />
    </>
  );
}
