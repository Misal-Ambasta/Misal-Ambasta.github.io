import React from 'react'
import Styles from './HomePage.module.css'
import { MdLocationOn,MdCall,MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom'


class HomePage extends React.Component{

    render(){
        return (
            <>
            <div className={`container ${Styles.main_container}`}>
                <div className={`my-3 position-relative ${Styles.profile_container}`}>
                    <img src="https://avatars1.githubusercontent.com/u/57540242?s=460&u=dbf44927e8062685000ef99c25e85d27c7df737c&v=4" alt="profile"></img>
                    <div className={`position-absolute ${Styles.decorative_circle}`}></div>
                </div>

                <div className={Styles.name}>
                    Misal Ambasta
                </div>

                <div className={Styles.profession}>
                    Full Stack Developer
                </div>
                <br></br>
                
                <div>
                    <Link to={{pathname:"https://www.linkedin.com/in/misal-ambasta-08007017a/"}} target="_blank">
                        <img src="linkedin.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://twitter.com/IamMisalAmbasta"}} target="_blank">
                        <img src="twitter.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://github.com/Misal-Ambasta"}} target="_blank">
                        <img src="github.svg" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                </div>


                <div className={`row m-4 ${Styles.details}`}>
                    <div className="col-sm-12 col-lg-4">
                        <MdLocationOn size="40px" color="#0E6E84"/>
                        <br></br>
                       Kolkata, India
                    </div>

                    <div className="col-sm-12 col-lg-4">
                       <MdCall size="40px" color="#0E6E84"/> 
                       <br></br>
                      +91 990 3492 520
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <MdEmail size="40px" color="#0E6E84"/> 
                        <br></br>
                       misalambasta@gmail.com
                    </div>
                </div>

                <div className={`mb-5 px-5 ${Styles.details}`}>
                An aspiring Full Stack Developer, that enjoys every part of his work, from working in the FrontEnd or Backend, to communicating and collaborating, with different people, towards a common goal.
                   <br/> 
                   <Link to={{pathname:"https://drive.google.com/drive/folders/1_sVbWvLtuZl-LJAvzU6VSIwuUZlGo47L?usp=sharing"}} target="_blank"><button type="button" className="btn btn-outline-info resume">RESUME</button></Link>
                </div>

                <div className={ `container ${Styles.skills}`}>
                    <img src="html-5.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="css.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="js.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="react.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="redux.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="bootstrap.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="express.png" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="mongo.png" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="github.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
            </div>
            </>
        )
    }
}

export default HomePage