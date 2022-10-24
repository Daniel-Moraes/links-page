import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EbookSaleScreen from './screens/ebooksale/EbookSaleScreen';
import Home from './screens/home/home';

const MyRoutes = () => (
    <React.Fragment>
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/ebooksale" element={<EbookSaleScreen />}></Route>
            </Routes>
        </HashRouter>
    </React.Fragment>
);

export default MyRoutes;