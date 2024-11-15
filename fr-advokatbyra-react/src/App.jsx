import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <HeroVideo></HeroVideo>
      <Footer></Footer>
    </>
  );
}

export default App;
