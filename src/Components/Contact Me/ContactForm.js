import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            message: "",
            nameError:"",
            emailError:"",
            mobileError:"",
            messageError:"",
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // console.log(name, value);
        this.setState((prevState) => {
            prevState[name] = value;
            return prevState;
        });
    };

    handleSubmit = (e) => {
        const { name, email, mobile, message } = this.state;

        e.preventDefault();
        if (name && email && mobile && message) {
            const emailPattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );

            if (!emailPattern.test(email)) {
                console.log("Please enter valid email address.");
                return;
            }

            const serviceId = "service_yjapljf";
            const templateId = "template_7bpafxs";
            const userId = "U3Yz0gLlEn0Qd9bIk";
            const templateParams = {
                name,
                email,
                mobile,
                message,
            };

            emailjs
                .send(serviceId, templateId, templateParams, userId)
                .then((resp) => console.log(resp))
                .catch(() => console.log("error in emailjs"));
            console.log("submit");
        } else console.log("please fill all fields");
    };

    render() {
        const { name, email, mobile, message } = this.state;        
        const {nameError, emailError, mobileError, messageError} = this.state;
        
        return (
            <div className="contact--form--section">
                {/* <form> */}
                    <div className="d-inline">
                        <div className="i--style">
                            <input
                                value={name}
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                required
                            />
                            <span className="error--msg">{nameError}</span>
                        </div>
                        <div className="i--style">
                            <input
                                value={email}
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                required
                            />
                            <span className="error--msg">{emailError}</span>
                        </div>
                    </div>

                    <div className="i--style">
                        <input
                            value={mobile}
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            onChange={this.handleChange}
                            required
                        />
                        <span className="error--msg">{mobileError}</span>
                    </div>
                    <div className="i--style">
                        <textarea
                            value={message}
                            name="message"
                            placeholder="Message"
                            onChange={this.handleChange}
                        />
                        <span className="error--msg">{messageError}</span>
                    </div>

                    <div
                        className="i--styl submit--btn"
                        onClick={this.handleSubmit}
                    >
                        <label>Send Message</label>
                        <i className="uil uil-message"></i>
                    </div>
                {/* </form> */}
            </div>
        );
    }
}

export default ContactForm;
