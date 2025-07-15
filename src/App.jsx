import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Telehealth from "./pages/Telehealth";
import Referral from "./pages/Referral";

// About pages
import Mission from "./pages/About/Mission";
import Team from "./pages/About/Team";
import Blog from "./pages/About/Blog";
import Contact from "./pages/About/Contact";

// Service pages
import Offerings from "./pages/Services/Offerings";
import Packages from "./pages/Services/Packages";
import Recommendations from "./pages/Services/Recommendations";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telehealth" element={<Telehealth />} />
          <Route path="/referral" element={<Referral />} />

          {/* About Routes */}
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/contact" element={<Contact />} />

          {/* Services Routes */}
          <Route path="/services/offerings" element={<Offerings />} />
          <Route path="/services/packages" element={<Packages />} />
          <Route path="/services/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
