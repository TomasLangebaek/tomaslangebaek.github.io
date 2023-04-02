import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Home} from "../pages/Home";
import {Aves} from "../pages/Aves";


const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aves" element={<Aves/>}/>
        </Routes>
    );
};

export default Main;