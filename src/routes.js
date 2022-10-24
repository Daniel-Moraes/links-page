import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EbookSaleScreen from './screens/ebooksale/EbookSaleScreen';
import Home from './screens/home/home';

const MyRoutes = () => (
    <React.Fragment>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/ebooksale" element={<EbookSaleScreen />}></Route>
            </Routes>
        </Router>
    </React.Fragment>
);

export default MyRoutes;