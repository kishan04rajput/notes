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
import { TailwindPage } from "./pages/TailwindPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="flex flex-col gap-24">
                    <Navbar />
                    <Routes>
                        <Route index path="/" element={<LandingPage />} />
                        <Route path="/CssPage" element={<CssPage />} />
                        <Route
                            path="/TailwindPage"
                            element={<TailwindPage />}
                        />
                        <Route
                            path="/BootstrapPage"
                            element={<BootstrapPage />}
                        />
                        <Route
                            path="/JavascriptPage"
                            element={<JavascriptPage />}
                        />
                        <Route path="/MongoDbPage" element={<MongoDbPage />} />
                        <Route path="/ExpressPage" element={<ExpressPage />} />
                        <Route path="/ReactPage" element={<ReactPage />} />
                        <Route path="/NodePage" element={<NodePage />} />
                        <Route path="/GitPage" element={<GitPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
