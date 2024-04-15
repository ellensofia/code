import "../style.css";
import TextAnimation from "./animations/TextAnimation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { TranslationProvider } from "./context/TranslationContext";
import About from "./pages/home/about/About";
import Contact from "./pages/home/contact/Contact";
import Hero from "./pages/home/hero/Hero";
import Scene from "./pages/home/hero/Scene";
import Projects from "./pages/home/projects/Projects";
import Tech from "./pages/home/tech/Tech";

function App() {
  /*   const [cursorPosition, setCursorPosition] = useState({ x: -1, y: -1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLBodyElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    setCursorPosition({ x, y });
  }; */

  return (
    <ThemeProvider>
      <TranslationProvider>
        <TextAnimation />
        <Header />
        <Scene />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
