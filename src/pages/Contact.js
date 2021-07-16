import React from 'react';
import './Contact.scss';
import LinkButton from '../components/LinkButton.js';
import contactPic from '../images/contact.jpg';

import mail from '../icons/gmail.svg';
import call from '../icons/phone.svg';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import linkedin from '../icons/linkedin-box.svg';
import github from '../icons/github-circle.svg';
import dribbble from '../icons/dribbble.svg';
import behance from '../icons/behance.svg';
import twitter from '../icons/twitter-fill.svg';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    indexChangeHandler() {
        this.props.his.setState({selected: 2})
    }
    render() {
        return (
                <div className="parent-box">
                    <h3 id="contact-greet" >Let's <span>Connect!</span></h3>
                    <img src={contactPic} className="contact-photo" />
                    <p id="contact-info">Wanna create someting great? Feel free to contact
                   for freelance/collaborations or just drop a hi! :)</p>
                    <div className="links">
                        <div id="group1" className="link-group">
                            <LinkButton icon={mail} label={"hashimirfan99@gmail.com"} link={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hashimirfan99@gmail.com"} />
                            <LinkButton icon={call} label={"+91 99400 27510"} link={"tel:+919940027510"} />
                            <LinkButton icon={facebook} label={"facebook"} link={"https://www.facebook.com/iamhashimirfan"} />
                            <LinkButton icon={instagram} label={"Instagram"} link={"https://www.instagram.com/iamhashimirfan/"} />
                        </div>
                        <div id="group2" className="link-group">
                            <LinkButton icon={linkedin} label={"LinkedIn"} link={"https://in.linkedin.com/in/utkarsh-gill-9a5029173"} />
                            <LinkButton icon={twitter} label={"Twitter"} link={"https://twitter.com/uiuxhashim"} />
                            <LinkButton icon={dribbble} label={"dribbble"} link={"https://dribbble.com/uiuxhashim"} />
                            <LinkButton icon={behance} label={"Behance"} link={"https://www.behance.net/uiuxhashim/"} />
                        </div>
                       
                    </div>

                    <p className="signature">Hashim Irfan Ali© 2021</p>
                </div>
        )
    }
}

export default Contact;