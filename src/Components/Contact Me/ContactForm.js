import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            mobile:'',
            message:'',
        };
    }
    render() {
        return (
            <div className="contact--form--section">
                <form>
                    <div className="d-inline">
                        <div className="i--style">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="i--style">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div className="i--style">
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div className="i--style">
                        <textarea name="message" placeholder="Message" />
                    </div>

                    <div className="i--styl submit--btn">
                        <input type="submit" value="Send Message" />
                        <i className="uil uil-message"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
