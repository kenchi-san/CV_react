import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path="/"  element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/competences" element={<Knowledges/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;