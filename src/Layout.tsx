import React, {useEffect} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import styles from "@/App.module.scss";

export function Layout() {
    return (
        <Router>
            <div className={styles.App}>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/About' element={<AboutPage/>}/>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>);
}

export default Layout;
