import React from 'react';
import './App.css';
import DontStop from './components/DontStop';

import OurClasses from './components/OurClasses';
import OurTrainer from './components/OurTrainer';
import RecentBlog from './components/RecentBlog';
import Testmonials from './components/Testmonials';
import WelcomeToUS from './components/WelcomeToUs';
//import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <DontStop />
            <WelcomeToUS />
            <OurClasses />
            <OurTrainer />
            <Testmonials />
            <RecentBlog />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
