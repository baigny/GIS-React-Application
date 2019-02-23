import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import heroWave from '../../images/home/hero_wave.svg';
import freelanceProjects from '../../images/home/freelance_projects.svg'
import mockInterview from '../../images/home/mock_interview.svg'
import privateProjects from '../../images/home/private_projects.svg'
import profileGraphic from '../../images/home/profile_graphic.svg';
import '../../styles/styles.css';
import Card from './Card.jsx';

function Home(props){
    return (
        <div className="home">
            <Navbar/>
            <div className="welcome-section container">
                <div className="row justify-content-around align-items-center">
                    <div className="jumbotron bg-white col-lg-4 col-md-6 col-xs-12">
                        <h1 className="text-secondary">Welcome to</h1>
                        <h1 className="text-white p-2 home-bg-gradient"><strong><em>GIS Profile App</em></strong></h1>
                        <h4><small><em>
                            This is a GIS profile web app, that aims to provide
                            Google India scholarship scholars profile to users or recruiter.
                        </em></small></h4>
                        <div className="row mt-4">
                            <div className="col-6">
                                <a href="/"><button className="btn home-bg-gradient home-button text-white p-1">See Profiles</button></a>
                            </div>
                            <div className="col-6">
                                <a href="/"><h4><small>Fork On Github</small></h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <img src={profileGraphic} alt="heroWave"/>
                    </div>
                </div>
            </div>
            <img src={heroWave} className="home-hero-wave" alt="heroWave"/>
            <div className="jumbotron home-features">
                <div className="container">
                    <h1 className="text-white">What we do?</h1>
                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur</h5>
                    <div className="row mt-5 justify-content-around">
                        <Card name="Mock Interviews" imagepath={mockInterview}>
                            <ul className="features-list">
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                        <Card name="Freelance Projects" imagepath={freelanceProjects}>
                            <ul className="features-list">
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                        <Card name="Private Projects" imagepath={privateProjects}>
                            <ul className="features-list">
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i class="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;