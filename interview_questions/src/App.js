// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { JavascriptPage } from "./pages/JavascriptPage";
import { CssPage } from "./pages/CssPage";
import { MongoDbPage } from "./pages/MongoDbPage";
import { ExpressPage } from "./pages/ExpressPage";
import { ReactPage } from "./pages/ReactPage";
import { NodePage } from "./pages/NodePage";
import { BootstrapPage } from "./pages/BootstrapPage";
import { GitPage } from "./pages/GitPage";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Navbar />}> */}
            <Route index path="/" element={<LandingPage />} />
            <Route path="/CssPage" element={<CssPage />} />
            <Route path="/BootstrapPage" element={<BootstrapPage />} />
            <Route path="/JavascriptPage" element={<JavascriptPage />} />
            <Route path="/MongoDbPage" element={<MongoDbPage />} />
            <Route path="/ExpressPage" element={<ExpressPage />} />
            <Route path="/ReactPage" element={<ReactPage />} />
            <Route path="/NodePage" element={<NodePage />} />
            <Route path="/GitPage" element={<GitPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
