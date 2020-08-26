import React from 'react';
import './Home.css';

import image1 from '../../assets/images/netflix.jpg';
import image2 from '../../assets/images/old-town-pic.jpg';
import image3 from '../../assets/images/war-pic.jpg';
import image4 from '../../assets/images/popcorns.jpg';
import image5 from '../../assets/images/old-tv.jpg';
import image6 from '../../assets/images/man-and-women.jpg';

function Home() {
    return (
        <div id="home-page">
            <div className="home-page-row">
                <div className="home-page-image"><img src={image1} alt="picture"></img></div>
                <div className="home-page-image"><img src={image3} alt="picture"></img></div>
                <div className="home-page-image"><img src={image2} alt="picture"></img></div>
                <div className="home-page-image"><img src={image3} alt="picture"></img></div>
                <div className="home-page-image"><img src={image2} alt="picture"></img></div>
            </div>
            <div className="home-page-row">
                <div className="home-page-image"><img src={image4} alt="picture"></img></div>
                <div className="home-page-image"><img src={image6} alt="picture"></img></div>
                <div className="home-page-image"><img src={image4} alt="picture"></img></div>
                <div className="home-page-image"><img src={image6} alt="pictu  re"></img></div>
                <div className="home-page-image"><img src={image5} alt="picture"></img></div>
            </div>
            <div className="home-page-row">
                <div className="home-page-image"><img src={image6} alt="picture"></img></div>
                <div className="home-page-image"><img src={image5} alt="picture"></img></div>
                <div className="home-page-image"><img src={image6} alt="picture"></img></div>
                <div className="home-page-image"><img src={image4} alt="picture"></img></div>
                <div className="home-page-image"><img src={image6} alt="picture"></img></div>
            </div>
        </div>
    );
}

export default Home;
