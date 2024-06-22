import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <About />
    </>
  );
}
