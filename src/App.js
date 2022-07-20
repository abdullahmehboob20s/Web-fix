import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-32">
        <Home />
      </div>
      <div className="mb-52">
        <About />
      </div>
      <div className="mb-32">
        <Work />
      </div>
      <Contact />
    </div>
  );
}

export default App;
