import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <Contact />
    </div>
  );
}

export default App;
