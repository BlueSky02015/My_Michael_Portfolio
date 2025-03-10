import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./component/LoadingScreen";
import { Navbar } from "./component/navbar";
import { MobileMenu } from "./component/MobileMenu";
import { Home } from "./component/pages/Home";
import { About } from "./component/pages/about";
import { Projects } from "./component/pages/project";
import { Contact } from "./component/pages/contact";


function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`} // using `` to inject js desc
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
        <Home/>
        <About/>  
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
