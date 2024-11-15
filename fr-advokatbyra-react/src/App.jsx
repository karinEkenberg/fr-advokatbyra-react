import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <HeroVideo></HeroVideo>
    </>
  );
}

export default App;
