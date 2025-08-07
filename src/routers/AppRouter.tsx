import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

export const AppRouter = () => {

    return (
        <Router>
            <div style={{ display: 'block' }}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
        </Router>
    );
}