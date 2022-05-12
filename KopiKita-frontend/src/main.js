import React from "react";
import {Routes, Route} from 'react-router-dom';
import Hero from "./components/Hero";
import Makanan from "./pages/makanan";
import Minuman from "./pages/minuman";

class Main extends React.Component{
    render(){
        return (
            <Routes>
                <Route index element={< Hero />} />
                <Route path="/makanan" element={< Makanan />} />
                <Route path="/minuman" element={< Minuman />} />
            </Routes>
        )
    }
}
export default Main;