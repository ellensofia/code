import "../style.css";
import TextAnimation from "./animations/TextAnimation";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/home/About/About";
import Hero from "./pages/home/hero/Hero";

function App() {
  return (
    <ThemeProvider>
      <TextAnimation />
      <body>
        <Header />
        <Hero />
        <About />
      </body>
    </ThemeProvider>
  );
}

export default App;
