import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contact--form--section">
                <form>
                    <div className="d-inline i--style">
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="d-inline i--style">
                        <input type="email" name="email" placeholder="Email" />
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
                        <i class="uil uil-message"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
