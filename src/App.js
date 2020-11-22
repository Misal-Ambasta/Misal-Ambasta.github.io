import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Proficiencies from './components/Proficiencies';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Styles from "./components/Proficiencies.module.css"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HomePage />
                <hr />
                <Proficiencies />
                <Projects />
                <div className="py-5">
                    <div className={`mb-2 ${Styles.heading}`}>Github</div>
                </div>
                <GitHubCalendar blockSize={20} blockMargin={5} fontSize={16} username="Misal-Ambasta">
                    <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
            </div>
        </BrowserRouter>
    );
}

export default App;
