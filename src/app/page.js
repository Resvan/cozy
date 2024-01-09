import AnimatedText from "./components/AnimatedText";
import Card from "./components/Card";
import DynamicTransition from "./components/DynamicTransition";
import Navbar from "./components/Navbar";
import Value from "./components/Value";

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicTransition/>
      <Card/>
      <Value/>
    </>
  );
}
