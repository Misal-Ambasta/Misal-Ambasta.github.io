import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Styles from './Github.module.css';

export default function Github() {
    return (
        <div>
            <div classNameName="col-12" className="fourthPart">
                <div className="row">
                    <div className="col-11 offset-1">
                        <div className="row" className="stat">
                            <div className="col-12 offset-2 offset-md-0 col-md-6  col-lg-3" style={{ marginBottom: '150px' }}>
                                <div>
                                    <span className="half-circle1" />
                                    <span className="half-circle2" />
                                </div>
                                <p style={{ position: 'absolute', left: '47px', color: '#3BCEC8', fontSize: '42px', top: '55px', fontWeight: 'bold' }}>1200+</p>
                                <p style={{ position: 'absolute', left: '45px', color: '#FFC831', fontSize: '42px', top: '200px', fontWeight: 'bold' }}>Hours</p>
                                <p style={{ position: 'absolute', left: '0px', color: ' #FFC831', fontSize: ' 24px', top: '255px' }}>of full stack coding</p>
                            </div>
                            <div className="col-12 offset-2 offset-md-0 col-md-6 col-lg-3" style={{ marginBottom: '150px' }}>
                                <div className="half-circle3" />
                                <div className="half-circle4" />
                                <p style={{ position: 'absolute', left: '60px', color: ' #3BCEC8', fontSize: ' 42px', top: '55px', fontWeight: ' bold' }}>300+</p>
                                <p style={{ position: 'absolute', left: '70px', color: ' #3BCEC8', fontSize: ' 42px', top: '200px', fontWeight: ' bold' }}>DSA</p>
                                <p style={{ position: 'absolute', left: '65px', color: ' #3BCEC8', fontSize: ' 24px', top: '255px' }}>Problems</p>
                            </div>
                            <div className="col-12 offset-2 offset-md-0 col-md-6 col-lg-3" style={{ marginBottom: '150px' }}>
                                <div>
                                    <span className="half-circle5" />
                                    <span className="half-circle6" />
                                </div>
                                <p style={{ position: 'absolute', left: '70px', color: ' #3BCEC8', fontSize: ' 42px', top: '55px', fontWeight: ' bold' }}>10+</p>
                                <p style={{ position: 'absolute', left: '30px', color: ' #FFC831', fontSize: ' 42px', top: '200px', fontWeight: ' bold' }}>Projects</p>
                            </div>
                            <div className="col-12 offset-2 offset-md-0 col-md-6 col-lg-3" style={{ marginBottom: '150px' }}>
                                <div className="half-circle7" />
                                <div className="half-circle8" />
                                <p style={{ position: 'absolute', left: '60px', color: ' #3BCEC8', fontSize: ' 42px', top: '55px', fontWeight: ' bold' }}>100+</p>
                                <p style={{ position: 'absolute', left: '45px', color: ' #3BCEC8', fontSize: ' 42px', top: '200px', fontWeight: ' bold' }}>Hours</p>
                                <p style={{ position: 'absolute', left: '50px', color: ' #3BCEC8', fontSize: ' 24px', top: '255px' }}>of soft skill</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="py-5">
                    <div className={`mb-2 ${Styles.heading}`}>Github</div>
                </div>
            <GitHubCalendar blockSize={20} blockMargin={5} fontSize={16} username="Misal-Ambasta">
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
        </div>
    );
}
