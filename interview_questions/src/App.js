// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BootstrapPage } from "./pages/BootstrapPage";
import { CssPage } from "./pages/CssPage";
import { ExpressPage } from "./pages/ExpressPage";
import { GitPage } from "./pages/GitPage";
import { HtmlPage } from "./pages/HtmlPage";
import { JavascriptPage } from "./pages/JavascriptPage";
import { LandingPage } from "./pages/LandingPage";
import { MongoDbPage } from "./pages/MongoDbPage";
import { NodePage } from "./pages/NodePage";
import { ReactNativePage } from "./pages/ReactNativePage";
import { ReactPage } from "./pages/ReactPage";
import { RubyOnRailsPage } from "./pages/RubyOnRailsPage";
import { RubyPage } from "./pages/RubyPage";
import { TailwindPage } from "./pages/TailwindPage";
import { TypescriptPage } from "./pages/TypescriptPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="flex flex-col gap-24">
                    <Navbar />
                    <Routes>
                        <Route index path="/" element={<LandingPage />} />
                        <Route path="/HtmlPage" element={<HtmlPage />} />
                        <Route path="/CssPage" element={<CssPage />} />
                        <Route path="/TailwindPage" element={<TailwindPage />} />
                        <Route path="/BootstrapPage" element={<BootstrapPage />} />
                        <Route path="/JavascriptPage" element={<JavascriptPage />} />
                        <Route path="/TypescriptPage" element={<TypescriptPage />} />
                        <Route path="/MongoDbPage" element={<MongoDbPage />} />
                        <Route path="/ExpressPage" element={<ExpressPage />} />
                        <Route path="/ReactPage" element={<ReactPage />} />
                        <Route path="/ReactNativePage" element={<ReactNativePage />} />
                        <Route path="/NodePage" element={<NodePage />} />
                        <Route path="/RubyPage" element={<RubyPage />} />
                        <Route path="/RubyOnRailsPage" element={<RubyOnRailsPage />} />
                        <Route path="/GitPage" element={<GitPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
