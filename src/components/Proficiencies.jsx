import React from 'react';
import Styles from './Proficiencies.module.css';

class Proficiencies extends React.Component {
    render() {
        return (
            <div className="my-5 container-fluid ">
                <div className={`mb-5 ${Styles.heading}`}>Proficiencies</div>

                <div className={`row justify-content-center ${Styles.proficiencies}`}>
                    <div className="col-sm-12 col-md-5 col-lg-2">
                        <img src="react.svg" alt="img" />
                        <div>React Apps</div>
                    </div>

                    <div className="col-sm-12 col-md-5 col-lg-2">
                        <img src="front.svg" alt="img" />
                        <div>Frontend</div>
                    </div>

                    <div className="col-sm-12 col-md-5 col-lg-2">
                        <img src="back.svg" alt="img" />
                        <div>Backend</div>
                    </div>

                    <div className="col-sm-12 col-md-5 col-lg-2">
                        <img src="database.svg" alt="img" />
                        <div>Data Structures</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proficiencies;
