import React from 'react';
import Styles from './Projects.module.css';

class Projects extends React.Component {
    render() {
        return (
            <div className={Styles.main_container}>
                <h1 className={Styles.heading}>Projects</h1>
                <br />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="boltBazar.png" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Bolt Bazaar</h5>
                                <p className="card-text">An e-commerce website that allows small-scale restaurants to book services & products to enhance their business. This was a live industry project for a start up called NutnBolt.</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="http://ec2-13-233-62-34.ap-south-1.compute.amazonaws.com/" className="btn btn-success btn-block ">
                                        Live
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/aayushah711/teal-project" className="btn btn-outline-dark btn-block disabled" role="button" aria-disabled="true">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="meditation.png" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Meditation App</h5>
                                <p className="card-text">This app has made with high-quality graphics, simple and easy-touse interfaces, and soothing voices for the guided meditation tracks. An meditation app which will help you to being calm. Helps you to sleep more, stress less, live better.</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="https://misal-ambasta.github.io/Meditation-app/" className="btn btn-success btn-block ">
                                        Live
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Misal-Ambasta/Meditation-app" className="btn btn-outline-dark btn-block ">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="comfort-living.png" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Comfort Living</h5>
                                <p className="card-text">Comfort is an online shopping platform which is focusing on decoration of home and have related accessories. User can even add items to Wishlist and cart.</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="https://comfort-living.vercel.app/" className="btn btn-success btn-block ">
                                        Live
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/masai-course/ac_047_misal/tree/master/week_23/day_2/assignments/router-project-misal-ambasta" className="btn btn-outline-dark btn-block ">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row justify-content-center">
                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="expenseManager.png" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Myntra clone</h5>
                                <p className="card-text">Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="https://nervous-bassi-781035.netlify.app/" className="btn btn-success  btn-block">
                                        Live
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Misal-Ambasta/Myntra-clone" className="btn btn-outline-dark  btn-block">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="Food Delivery System.jpg" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Food Delivery App</h5>
                                <p className="card-text">An App that will help you to find an restaurants and will provide list of items available in a restaurant. You can also place an order in this.</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="https://misal-ambasta.github.io/masai-sprint-4/" className="btn btn-success btn-block ">
                                        Live
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Misal-Ambasta/masai-sprint-4" className="btn btn-outline-dark btn-block ">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3">
                            <img src="arcade inventary.png" className="card-img-top" alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Arcade Inventory</h5>
                                <p className="card-text">An App that will help you to find an restaurants and will provide list of items available in a restaurant. You can also place an order in this.</p>
                                <div className="mt-auto">
                                    <a target="_blank" rel="noopener noreferrer" href="#" className="btn btn-success btn-block ">Live</a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mamata24/Arcade-Inventory" className="btn btn-outline-dark btn-block ">
                                        Github link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
