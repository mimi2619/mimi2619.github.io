import "./App.css";
import Navbar from "./components/MainBody/Navbar/Navbar";

import MainBody from "./components/MainBody/MainBody";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainBody />
    </div>
  );
}

export default App;
