import "../style.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/home/About/About";
import Hero from "./pages/home/hero/Hero";

function App() {
  return (
    <body>
      <ThemeProvider>
        <Header />
        <Hero />
        <About />
      </ThemeProvider>
    </body>
  );
}

export default App;
