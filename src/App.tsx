import "../style.css";
import TextAnimation from "./animations/TextAnimation";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { TranslationProvider } from "./context/TranslationContext";
import About from "./pages/home/About/About";
import Hero from "./pages/home/hero/Hero";

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <TextAnimation />
        <body>
          <Header />
          <Hero />
          <About />
        </body>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
