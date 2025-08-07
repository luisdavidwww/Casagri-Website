import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Navbar from '../common/Navbar';

export const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    );
}