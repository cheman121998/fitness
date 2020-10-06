import React from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import DontStop from './components/DontStop';
import OurClasses from './components/OurClasses';
import OurTrainer from './components/OurTrainer';
import RecentBlog from './components/RecentBlog';
import Testmonials from './components/Testmonials';
import WelcomeToUS from './components/WelcomeToUs';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route>
                        <DontStop />
                    </Route>
                    <Route>
                        <WelcomeToUS />
                    </Route>
                    <Route>
                        <OurClasses />
                    </Route>
                    {/* <Route>
                        <OurTrainer />
                    </Route> */}
                    <Route>
                        <Testmonials />
                    </Route>
                    <Route>
                        <RecentBlog />
                    </Route>
                    <Route>
                        <ContactUs />
                    </Route>
                    <Route>
                        <Footer />
                    </Route>
                </div>
            </Router>
        </div>
    );
}
export default App;
