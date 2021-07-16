import React from 'react';
import './About.scss';
import mypic from '../images/website_photo.png'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    indexChangeHandler() {
        this.props.his.setState({selected: 1})
    }

    render() {
        return (
                <div className="parent-box">
                    <h3 id="about-greet" >Hi! I'm Hashim <span>Irfan.</span></h3>
                    <img src={mypic} className="photo" />
                    <div className="intro-brief">
                        <p id="about-content">
                            {`UI/UX Designer, passionate about solving problems and designing intuitive digital experiences that leave a positive impact on people and the society.\n\nI’m a speedcuber, an amateur guitarist, a terrible singer (not being modest) but I like to sing. I prefer indie folk music & yes! I love AR Rahman :3\n\nJust completed my bachelor’s from Crescent University Chennai, I’m a self-learnt designer drawing experiences by solving real world problems for the users around me.`}
                        </p>
                    </div>
                    <p id="quote">Engineer by Qualification, Designer by <span>Choice.</span></p>
                </div>
        )
    }
}

export default About;