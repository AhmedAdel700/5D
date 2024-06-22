import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}
