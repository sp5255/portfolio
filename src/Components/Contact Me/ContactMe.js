import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./ContactForm";
import '../../Assets/Styles/ContactMe/index.css'

class ContactMe extends React.Component {
    render() {        
        return (
            <div data-aos="slide-right" className="contact--section" id="ContactMe">
            <div className="title">
                <label>Contact Me</label>
                <span>Get in touch</span>
            </div>
            
            <div className="contact--container">                

            {/* left icons (call, email, location) */}
                <div>                    
                    <ContactCard
                        icon="uil uil-phone"
                        title="Call Me"
                        desc="+919756716316"
                    />
                    <ContactCard
                        icon="uil uil-envelope"
                        title="Email"
                        desc="pundir5255@gmail.com"
                    />
                    <ContactCard
                        icon="uil uil-location-point"
                        title="Location"
                        desc="Shamli, UP"
                    />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>

            </div>
        );
    }
}

export default ContactMe;
