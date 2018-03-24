import React from 'react';

import TopBar from '../components/TopBar';

import splashPhoto from '../assets/images/splashphoto.jpg';
import logo from '../assets/images/opengov.png';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Welcome to the O.G. Voter Turnout App</h1>
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid" src={logo} alt="OG logo" />
                        </div>
                        <div className="col-xs-12 homeWelcome">
                            <p>This application was created as part of the Hennepin County Geo:Code 2018 hackathon. Click on the Map and Reports pages to check out detailed voter information data for the state of Minnesota in the past four statewide elections since 2010.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;